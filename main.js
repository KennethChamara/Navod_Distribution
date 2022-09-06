const { app, BrowserWindow, ipcMain } = require("electron")
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // or the original password : 'apaswword'
    database: 'navode'
});

connection.connect(function(err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
});

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




//main checks for thew addcustomer channel
ipcMain.on("addCustomer", (event, obj) => {
    var sql = "INSERT INTO customer_shop (name, phone, address,  route ) VALUES ('" + obj.fname + "','" + obj.contactNo + "','" + obj.lname + "','" + obj.route + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})


ipcMain.on("addOrder", (event, obj) => {
    var sql = "INSERT INTO navode.order (date, shop_id, product,  quantity, status ) VALUES ('" + obj.date + "','" + obj.shopid + "','" + obj.product + "','" + obj.quantity + "','" + obj.status + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})


ipcMain.on("addPayment", (event, obj) => {
    var sql = "INSERT INTO navode.payment (	invoice_no, amout, cheque_no,  	status, customer ) VALUES ('" + obj.Ino + "','" + obj.amount + "','" + obj.chequeNo + "','" + obj.status + "','" + obj.customer + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})


ipcMain.on("addProduct", (event, obj) => {
    var sql = "INSERT INTO navode.product (	pname, price, category ) VALUES ('" + obj.name + "','" + obj.price + "','" + obj.category + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})


ipcMain.on("addSalesRep", (event, obj) => {
    var sql = "INSERT INTO navode.rep (	rep_id , phone, name, address ) VALUES ('" + obj.repId + "','" + obj.contact + "','" + obj.name + "','" + obj.adress + "')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})

ipcMain.on('helloSync', (event, args) => {
    var sql = "select * from customer_shop";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('returnItem', (event, id) => {

    var sql = "DELETE FROM customer_shop WHERE customer_id =" + id;
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    console.log(id)

})