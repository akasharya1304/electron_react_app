const { app, ipcMain, BrowserWindow, Menu} = require('electron')
// const { autoUpdater } = require('electron-updater');
const fs = require('fs')
const path = require('path')
const os = require('os')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()



function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    minWidth: 1440,
    minHeight: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  //load the index.html from a url
  win.loadURL(
    isDev?  'http://localhost:3001' : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if(isDev){
    win.webContents.openDevTools()
  }
  
  
  let options = {
    silent: false,
    printBackground: true,
    color: true,
    margins: {
        marginType: 'printableArea',
    },
    landscape: true,
    pagesPerSheet: 1,
    scaleFactor: 100,
    collate: true,
    copies: 1,
    pageSize: 'A4',
  }

  let pdfOptions = {
    printBackground: true,
    color: true,
    landscape: true,
    marginType: 1,
    scaleFactor: 100,
    pagesPerSheet: 1,
  }
  
  // MenuBar
  const menuTemplate = [
  
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            {   label: 'Quit',
                accelerator: 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ] 
    },
  
    // { role: 'editMenu' }
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'delete' },
            { type: 'separator' },
            { role: 'selectAll' }
        ]
    },
  
    // { role: 'viewMenu' }
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools',
              accelerator: 'F12'
            },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'printMenu' }
    {
        label: 'Print',
        submenu: [
            {   label: 'Print',
                accelerator: 'ctrl+p ',
                click() {
                    win.webContents.print(options, (success, errorType) => {
                      if (!success) console.log(errorType)
                  })
                }
            },
            { type: 'separator' },
            { label: 'Print Pdf',
              accelerator: 'ctrl+shift+P',
              click() {
                const pdfPath = path.join(os.homedir(), 'Desktop', 'newPDF.pdf')
                win.webContents.printToPDF(pdfOptions).then(data => {
                  fs.writeFile(pdfPath, data, (error) => {
                    if (error) throw error
                    console.log(`Wrote PDF successfully to ${pdfPath}`)
                }).catch(error => {
                  console.log(`Failed to write PDF to ${pdfPath}: `, error)
                })
              })
            }
          }
        ]
    },
  ]

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu)

  // win.once('ready-to-show', () => {
  //   autoUpdater.checkForUpdatesAndNotify();
  // })

  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//-------------------- print function -----------------

let previewPageOptions  = {
  silent: false,
  printBackground: false,
  color: false,
  margins: {
    marginType: 'printableArea',
  },
  landscape: false,
  pagesPerSheet: 1,
  scaleFactor: 100,
  collate: false,
  copies: 1,
  pageSize: 'A4',
}
let printPageOptions  = {
  silent: false,
  printBackground: false,
  color: false,
  margins: {
    marginType: 'printableArea',
  },
  landscape: false,
  pagesPerSheet: 1,
  scaleFactor: 100,
  collate: false,
  copies: 1,
  pageSize: 'A4',
}

let previewFullOptions  = {
  silent: false,
  printBackground: true,
  color: true,
  margins: {
    marginType: 'printableArea',
  },
  landscape: true,
  pagesPerSheet: 1,
  scaleFactor: 100,
  collate: false,
  copies: 1,
  pageSize: 'A3',
}

let printOptions  = {
  silent: false,
  printBackground: true,
  color: true,
  margins: {
    marginType: 'printableArea',
  },
  landscape: true,
  pagesPerSheet: 1,
  scaleFactor: 100,
  collate: false,
  copies: 1,
  pageSize: 'A4',
}
let previewOptions  = {
  marginsType: 0,
  printBackground: true,
  pagesPerSheet: 1,
  printSelectionOnly: false,
  landscape: true,
  pageSize: 'A4',
  scaleFactor: 100
}


//handle print
ipcMain.handle('printComponent', (event, url) => {
  console.log('we entered in main process for printing')
  let win = new BrowserWindow({ show: false });
 
  win.loadURL(url);
 
  win.webContents.on('did-finish-load', () => {
   win.webContents.print(printOptions, (success, failureReason) => {
    console.log('Print Initiated in Main...');
    if (!success) console.log(failureReason);
   });
  });
  return 'shown print dialog';
});

//handle preview
ipcMain.handle('previewComponent', (event, url) => {
  console.log('we entered in main process for pdf printing')
  let win = new BrowserWindow({ title: 'Preview', show: false, autoHideMenuBar: true });
  win.loadURL(url);
 
  win.webContents.once('did-finish-load', () => {
   win.webContents.printToPDF(previewOptions).then((data) => {
     let buf = Buffer.from(data);
     var data = buf.toString('base64');
     let url = 'data:application/pdf;base64,' + data;
 
     win.webContents.on('ready-to-show', () => {
      win.show();
      win.setTitle('Preview');
     });
   
     win.webContents.on('closed', () => win = null);
     win.loadURL(url);
    })
    .catch((error) => {
     console.log(error);
    });
  });
  return 'shown preview window';
});


//handle preview Table
ipcMain.handle('previewTableComponent', (event, url) => {
  console.log('we entered in main process for pdf printing')
  let win = new BrowserWindow({ title: 'Preview', show: false, autoHideMenuBar: true });
  win.loadURL(url);
 
  win.webContents.once('did-finish-load', () => {
   win.webContents.printToPDF(previewFullOptions).then((data) => {
     let buf = Buffer.from(data);
     var data = buf.toString('base64');
     let url = 'data:application/pdf;base64,' + data;
 
     win.webContents.on('ready-to-show', () => {
      win.show();
      win.setTitle('Preview');
     });
   
     win.webContents.on('closed', () => win = null);
     win.loadURL(url);
    })
    .catch((error) => {
     console.log(error);
    });
  });
  return 'shown preview window';
});


//handle Preview Page
ipcMain.handle('previewPageComponent', (event, url) => {
  console.log('we entered in main process for pdf printing')
  let win = new BrowserWindow({ title: 'Preview', show: false, autoHideMenuBar: true });
  win.loadURL(url);
 
  win.webContents.once('did-finish-load', () => {
   win.webContents.printToPDF(previewPageOptions).then((data) => {
     let buf = Buffer.from(data);
     var data = buf.toString('base64');
     let url = 'data:application/pdf;base64,' + data;
 
     win.webContents.on('ready-to-show', () => {
      win.show();
      win.setTitle('Preview');
     });
   
     win.webContents.on('closed', () => win = null);
     win.loadURL(url);
    })
    .catch((error) => {
     console.log(error);
    });
  });
  return 'shown preview window';
});


//handle print
ipcMain.handle('printPageComponent', (event, url) => {
  console.log('we entered in main process for printing')
  let win = new BrowserWindow({ show: false });
 
  win.loadURL(url);
 
  win.webContents.on('did-finish-load', () => {
   win.webContents.print(printPageOptions, (success, failureReason) => {
    console.log('Print Initiated in Main...');
    if (!success) console.log(failureReason);
   });
  });
  return 'shown print dialog';
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// package.json win inside
// "target": [
//   {
//     "target": "nsis",
//     "arch": [
//       "ia32"
//     ]
//   }
// ]