
import {
  app,
  BrowserWindow,
  globalShortcut,
  Menu,
  shell,
  Tray
} from 'electron';
import menubar from 'menubar';
import path from 'path';

if (process.env.NODE_ENV === "development") {
  let hotReloadServer = require('hot-reload-server')
  let webpackConfig = require('../webpack.config.dev')
  hotReloadServer(webpackConfig, {
    publicPath: '/dist'
  }).start()
}

// Create a variable to hold the window
let mainWindow = null;
let tray = null

app.on('ready', function() {
  // creates a new browser window
  mainWindow = new BrowserWindow({
    alwaysOnTop: true,
    hasShadow: true,
    transparent: true,
    frame: false,
    toolbar: false
  })

  tray = new Tray(`${__dirname}/test.png`);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'About',
      click() {
        mainWindow.hide();
        shell.openExternal('https://google.com');
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click() {
        app.quit();
      }
    }
  ]);

  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)


  // load the file
  mainWindow.maximize();
  mainWindow.loadURL('file://' + __dirname + '/index.html')


  const shortcut = globalShortcut.register('Control+Space', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
      mainWindow.webContents.on('dom-ready', () => {
        mainWindow.webContents.executeJavaScript(`
          document.getElementById("search-bar-input").focus()
        `);
      });
    }
  });

  if (!shortcut) { console.log('Registration failed.'); }
});

app.dock.hide();

export default app;