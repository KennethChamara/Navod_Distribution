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

ipcMain.on("addCustomer", (event, obj) => {
    console.log(obj);
})

ipcMain.on("addOrder", (event, obj) => {
    console.log(obj);
})


ipcMain.on("addPayment", (event, obj) => {
    console.log(obj);
})


ipcMain.on("addProduct", (event, obj) => {
    console.log(obj);
})


ipcMain.on("addSalesRep", (event, obj) => {
    console.log(obj);
})