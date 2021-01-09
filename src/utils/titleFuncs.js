const electron = window.require('electron');

export function min() {
    electron.remote.getCurrentWindow().minimize();
}

export function max() {
    const window = electron.remote.BrowserWindow.getFocusedWindow();
    
    if (!window.isMaximized()) {
        electron.remote.getCurrentWindow().maximize();
    } else {
        electron.remote.getCurrentWindow().unmaximize();
    }
}

export function close() {
    electron.remote.getCurrentWindow().close();
}
