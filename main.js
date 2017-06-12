const electron = require('electron')
const path = require('path')
const url = require('url')

const Menu = electron.Menu
const MenuItem = electron.MenuItem
const ipc = electron.ipcMain

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Module to control application life.
const app = electron.app

if (process.mas) app.setName('MyAngular')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null

const menu = new Menu()
menu.append(new MenuItem({
  label: '768x838',
  click() {
    //console.log('768x838')
    mainWindow.setContentSize(838, 768)
  }
}))
menu.append(new MenuItem({
  label: '1024x768',
  click() {
    //console.log('1024x768')
    mainWindow.setContentSize(1024,768)
  }
}))
menu.append(new MenuItem({
  label: '1024x838',
  click() {
    //console.log('1024x838')
    mainWindow.setContentSize(1024,838)
  }
}))
menu.append(new MenuItem({
  label: '1366x1024',
  click() {
    //console.log('1366x1024')
    mainWindow.setContentSize(1366, 1024)
  }
}))
menu.append(new MenuItem({
  label: '1440x986',
  click() {
    //console.log('1440x986')
    mainWindow.setContentSize(1440, 986)
  }
}))

function initialize() {
  var shouldQuit = makeSingleInstance();
  if (shouldQuit) return app.quit()



  function createWindow() {
    var windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName(),
      frame:true
    }

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '/dist/index.html'))
    // and load the index.html of the app.
    // mainWindow.loadURL(url.format({
    //   pathname: path.join(__dirname, '/dist/index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // }))

    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }

  app.on('browser-window-created', function (event, win) {
    win.webContents.on('context-menu', function (e, params) {
      menu.popup(win, params.x, params.y)
    })
  })

  app.on('ready', function () {
    createWindow()
    // autoUpdater.initialize()
  })


  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
  if (process.mas) return false
  return app.makeSingleInstance(function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

ipc.on('show-context-menu', function (event) {
  const win = BrowserWindow.fromWebContents(event.sender)
  menu.popup(win)
})

// Handle Squirrel on Windows startup events
switch (process.argv[1]) {
  case '--squirrel-install':
    //  autoUpdater.createShortcut(function () {
    //    app.quit()
    //  })
    break
  case '--squirrel-uninstall':
    //  autoUpdater.removeShortcut(function () {
    //    app.quit()
    //  })
    break
  case '--squirrel-obsolete':
  case '--squirrel-updated':
    app.quit()
    break
  default:
    initialize()
}
