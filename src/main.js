
import {app, BrowserWindow} from 'electron';
import path from 'path';
// import url from 'url';
// import webpack from 'webpack';


// /******************************
// WEBPACK AND HMR
// ******************************/
// if (process.env.NODE_ENV === 'development') {
//   const webpackConfig = require('../webpack.dev.config.js');
//   const compiler = webpack(webpackConfig);
// }


// // Keep a global reference of the window object.  If you don't, the
// // window will close automatically when the JS object is garbage collected
// let appWindow;

// function createWindow() {
//   // Create new browser window
//   appWindow = new BrowserWindow({
//     // alwaysOnTop: true, // Always show on top of other windows
//     transparent: true,
//     frame: false,
//     toolbar: false
//   });

//   // Load index.html into app
//   appWindow.loadURL(url.format({
//     pathname: path.join(__dirname, 'src/index.html'),
//     protocol: 'file',
//     slashes: true
//   }));

//   // Emitted when window is closed
//   appWindow.on('closed', () => {
//     appWindow = null;
//   });
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.on('ready', () => {
//   console.log('AAAAA')
//   createWindow()
// });

// // Quit when all windows are closed.
// app.on('window-all-closed', () => {
//   // On macOS it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// });

// app.on('activate', () => {
//   // On macOS it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (appWindow === null) {
//     createWindow()
//   }
// });


// export default app;


// Import modules
// const electron = require('electron')

// const app = electron.app
// const BrowserWindow = electron.BrowserWindow

// Load environmental variables
// require('dotenv').load()

if (process.env.NODE_ENV === "development") {
  let hotReloadServer = require('hot-reload-server')
  let webpackConfig = require('../webpack.config.dev')
  hotReloadServer(webpackConfig, {
    publicPath: '/dist'
  }).start()
}

// Create a variable to hold the window
let mainWindow = null

app.on('ready', function() {

  // creates a new browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // transparent: true,
    // frame: false,
    // toolbar: false

  })
  // load the file
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  // Register window events
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})

export default app;