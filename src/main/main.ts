/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow } from 'electron';

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:3000`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
