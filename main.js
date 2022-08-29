const { app, BrowserWindow, ipcMain } = require("electron")


function createWindow() {
    const win = new BrowserWindow({
        width: 1500,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile("index.html")
}


app.whenReady().then(createWindow)

ipcMain.on("my", (event, obj) => {
    console.log(obj);
})