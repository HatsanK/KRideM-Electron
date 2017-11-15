const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const fs = require('fs')

var css = require("./custom.css");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// 405
function createWindow () {
  mainWindow = new BrowserWindow({width: 405, height: 720, webPreferences: {nodeIntegration: false}})

  mainWindow.loadURL('http://g12017647.sp.pf.mbga.jp/', {
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0; SAMSUNG SM-G930F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36'
  })

  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(css.toString());
  })

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
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