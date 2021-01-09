const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    backgroundColor: '#1b56cc',
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    }
  });

  // mainWindow.webContents.openDevTools();

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
