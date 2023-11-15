const { app, BrowserWindow } = require('electron')

app.disableHardwareAcceleration();

const mainWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      title: 'Tic Tac Toe',
      autoHideMenuBar: true,
      webPreferences: {
        zoomFactor: 1.0,
        nodeIntegration: true,
        contextIsolation: false,
        // enableRemoteModule: true
      }
    })
  
    win.loadFile('src/index.html')
    win.setResizable(false);
    // ----- OPEN DEV TOOLS ---- //
    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    mainWindow()
  })

 