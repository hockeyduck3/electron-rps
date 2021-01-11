const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    backgroundColor: '#1b56cc',
    width: 860,
    height: 650,
    minWidth: 860,
    minHeight: 650,
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    }
  });

  mainWindow.webContents.openDevTools();

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
