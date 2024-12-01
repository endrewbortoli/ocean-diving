// src/components/PageViewCounter.jsx

import React, { useEffect, useState } from 'react';

const PageViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Função para incrementar a contagem de visualizações
    const incrementView = () => {
      // Verifica se a chave 'viewCount' existe no localStorage
      if (localStorage.getItem('viewCount')) {
        // Se existir, incrementa a contagem
        let count = parseInt(localStorage.getItem('viewCount')) + 1;
        localStorage.setItem('viewCount', count);
        setViewCount(count);
      } else {
        // Se não existir, define a contagem como 1
        localStorage.setItem('viewCount', 1);
        setViewCount(1);
      }
    };

    // Chama a função para incrementar a contagem ao montar o componente
    incrementView();
  }, []);

  return (
    <div style={{ position: 'absolute', bottom: '80px', left: '20px', zIndex: 10, padding: '10px 20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '5px' }}>
      <p className="text-xs"><span>{viewCount}</span> Visualizações</p>
    </div>
  );
};

export default PageViewCounter;
