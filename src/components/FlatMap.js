import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { DeckGL } from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';
import Papa from 'papaparse';
import { LinearInterpolator } from '@deck.gl/core';

const FlatMap = forwardRef(({ csvUrl, initialViewState, heatmapConfig, tileLayerConfig }, ref) => {
  const [heatData, setHeatData] = useState([]);
  const [viewState, setViewState] = useState(initialViewState);

  useEffect(() => {
    const loadCSV = async () => {
      if (csvUrl != null) {
        try {
          const response = await fetch(csvUrl);
          const text = await response.text();

          Papa.parse(text, {
            header: true,
            complete: (results) => {
              const formattedData = results.data.map((row) => {
                const lat = parseFloat(row.lat);
                const lon = parseFloat(row.lon);
                const intensity = parseFloat(row.normalized);

                if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
                  console.warn(`Invalid coordinates: lat=${lat}, lon=${lon}`);
                  return null;
                }

                return [lon, lat, intensity];
              }).filter(item => item !== null);

              console.log("Formatted Data:", formattedData);
              setHeatData(formattedData);
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
            },
          });
        } catch (error) {
          console.error("Error fetching CSV:", error);
        }
      }
    };

    loadCSV();
  }, [csvUrl]);

  useImperativeHandle(ref, () => ({
    focusOnCoordinates: (latitude, longitude, zoomLevel) => {
      const newViewState = {
        longitude,
        latitude,
        zoom: zoomLevel,
        pitch: 0,
        bearing: 0,
        transitionDuration: 1000,
        transitionInterpolator: new LinearInterpolator(),
      };

      setViewState(newViewState);
    },
  }));

  const layers = [
    new TileLayer({
      data: tileLayerConfig.data || "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      minZoom: tileLayerConfig.minZoom || 0,
      maxZoom: tileLayerConfig.maxZoom || 19,
      tileSize: tileLayerConfig.tileSize || 256,
      renderSubLayers: (props) => {
        const {
          bbox: { west, south, east, north },
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        });
      },
    }),
    new HeatmapLayer({
      id: 'heatmap-layer',
      data: heatData,
      getPosition: d => d.slice(0, 2),
      getWeight: d => d[2],
      intensity: heatmapConfig.intensity || 1,
      colorRange: heatmapConfig.colorRange || [
        [0, 255, 255, 255],
        [0, 255, 0, 255],
        [255, 255, 0, 255],
        [255, 0, 0, 255],
      ],
      threshold: heatmapConfig.threshold || 0.9,
    }),
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <DeckGL
        viewState={viewState}
        controller={true}
        layers={layers}
        onViewStateChange={({ viewState }) => setViewState(viewState)}  // Update viewState on user interaction
        style={{ height: '100vh', width: '100%' }}
        onClick={() => console.log('Map clicked!')}  // Test click event
      />
    </div>
  );
});

export default FlatMap;