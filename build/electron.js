const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');

let serverProcess;

app.whenReady().then(() => {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools: false
        },
        titleBarStyle: 'hiddenInset',
        icon: path.join(__dirname, 'icon.png'),
        title: 'Ocean Diving'
    });

    win.setMenuBarVisibility(false);
    win.loadURL('https://endrewbortoli.github.io/ocean-diving/');
    win.maximize();

    // Prevent title from changing when the page loads
    win.webContents.on('page-title-updated', (event, title) => {
        event.preventDefault();  // Prevent the title from updating
        win.setTitle('Ocean Diving');  // Set the desired title
    });
});

// Clean up the server process on app close
app.on('window-all-closed', () => {
    if (serverProcess) {
        serverProcess.kill();
    }
    app.quit();
});
