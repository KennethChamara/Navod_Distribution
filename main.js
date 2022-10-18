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
console.log("jana");

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






//available item

ipcMain.on('availableItem', (event, args) => {
    var sql = "select (i.quantity - o.quantity) as quantity,p.pname,p.price from order_product as o,inventory as i,product as p where o.p_id=i.p_id and p.p_id=o.p_id";
    connection.query(sql, function(err, rows, fields) {

        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});




//Inventory Management

ipcMain.on('im', (event, args) => {
    var sql = "select p.pname,p.price,p.category,i.quantity,i.p_id,i.s_id from navode.inventory as i,product as p where p.p_id=i.p_id";
    connection.query(sql, function(err, rows, fields) {

        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('imdelete', (event, id) => {

    var sql = "DELETE FROM navode.inventory WHERE s_id =" + id.s_id + " and p_id =" + id.p_id;
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    console.log(id.s_id)

})




//select item in product table


ipcMain.on('inProduct', (event, args) => {
    var sql = "select * from navode.product";
    connection.query(sql, function(err, rows, fields) {

        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



//view order
ipcMain.on('viewOrder', (event, args) => {
    var sql = "select * from navode.order";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('deleteOrder', (event, id) => {

        var sql = "DELETE FROM navode.order WHERE o_id =" + id;
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
        console.log(id)

    })
    //view Product
ipcMain.on('viewProduct', (event, args) => {
    var sql = "select * from navode.product ";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('deleteProduct', (event, id) => {

        var sql = "DELETE FROM navode.product WHERE p_id =" + id;
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
        console.log(id)

    })
    //view sales rep
ipcMain.on('viewSalesRep', (event, args) => {
    var sql = "select * from navode.rep";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('deleteSalesRep', (event, id) => {

        var sql = "DELETE FROM navode.rep WHERE rep_id =" + id;
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
        });
        console.log(id)

    })
    //view customer
ipcMain.on('viewCustomer', (event, args) => {
    var sql = "select * from navode.customer_shop";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});



ipcMain.on('deleteCustomer', (event, id) => {

    var sql = "DELETE FROM navode.customer_shop WHERE customer_id =" + id;
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    console.log(id)

})




//return Iteam 
ipcMain.on('returnIteams', (event, args) => {
    var sql = "select * from customer_shop as c,product as p,returns as r where c.customer_id=r.customer_id and p.p_id=r.p_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;


        event.returnValue = rows;


    });
});


ipcMain.on('deleteReturn', (event, id) => {
    console.log(id.c_id)
    var sql = "DELETE FROM navode.returns WHERE date='" + id.date + "' and customer_id=" + id.c_id + " and p_id =" + id.p_id;
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });


})
ipcMain.on('updateReturns', (event, args) => {
    var sql = "select * from retuns as r,customer_shop as c,product as p where p.p_id=r.p_id and date=date and c.customer_id=r.customer_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});


//update
ipcMain.on('updateproduct', (event, args) => {
    var sql = "select * from navode.product  where p_id=p_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});

ipcMain.on('updateproductiteam', (event, obj) => {
    console.log(obj.id);
    var upsql = "UPDATE product SET price= '" + obj.price + "', pname= '" + obj.name + "',  category= '" + obj.category + "'  where p_id=" + obj.id;

    connection.query(upsql, function(err, result) {
        if (err) throw err;

        console.log("1 record updated from product");
    });
});

ipcMain.on('updatecustomer', (event, args) => {
    var sql = "select * from navode.customer_shop  where customer_id=customer_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});


ipcMain.on('updatecustomeriteam', (event, obj) => {
    console.log("anna");
    var upsql = "UPDATE navode.customer_shop SET  name='" + obj.fname + "',phone='" + obj.contactNo + "', route= '" + obj.route + "',  address= '" + obj.lname + "'  where customer_id=" + obj.id;

    connection.query(upsql, function(err, result) {
        if (err) throw err;

        console.log("1 record updated from rep");
    });
});

ipcMain.on('updatereturns', (event, p_id, customer_id, date) => {

    var sql = "select * from navode.returns where p_id=" + p_id + " and customer_id=" + customer_id + " and date=" + date;
    console.log(sql);
    connection.query(sql, function(err, rows) {
        if (err) throw err;
        console.log(rows.p_id);

        event.returnValue = rows;


    });
});

ipcMain.on('selectcustomer', (event, customer_id) => {

    var sql = "select * from navode.customer_shop where customer_id=" + customer_id;

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});

ipcMain.on('updateorder', (event, args) => {
    var sql = "select * from navode.order  where o_id=o_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});

ipcMain.on('updateorderiteam', (event, obj) => {
    console.log(obj.id);
    var upsql = "UPDATE navode.order SET date='" + obj.date + "' , shop_id='" + obj.shop_id + "', product= '" + obj.product + "',  status= '" + obj.status + "',  quantity= '" + obj.quantity + "'  where o_id=" + obj.id;

    connection.query(upsql, function(err, result) {
        if (err) throw err;

        console.log("1 record updated from order");
    });
});

ipcMain.on('updaterep', (event, args) => {
    var sql = "select * from navode.rep  where rep_id=rep_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});

ipcMain.on('updaterepiteam', (event, obj) => {
    console.log(obj.id);
    var upsql = "UPDATE navode.rep SET rep_id='" + obj.repId + "' , phone='" + obj.phone + "', address= '" + obj.address + "',  name= '" + obj.name + "'  where rep_id=" + obj.id;

    connection.query(upsql, function(err, result) {
        if (err) throw err;

        console.log("1 record updated from rep");
    });
});

ipcMain.on('updatecustomer', (event, args) => {
    var sql = "select * from navode.customer_shop  where customer_id=customer_id";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record inserted");

        event.returnValue = rows;


    });
});


ipcMain.on('updatecustomeriteam', (event, obj) => {
    console.log("anna");
    var upsql = "UPDATE navode.customer_shop SET  name='" + obj.fname + "',phone='" + obj.contactNo + "', route= '" + obj.route + "',  address= '" + obj.lname + "'  where customer_id=" + obj.id;

    connection.query(upsql, function(err, result) {
        if (err) throw err;

        console.log("1 record updated from rep");
    });
});



//rep Analysis
ipcMain.on('repAnalysis', (event, args) => {

    var y = args.year;
    var m = args.month;
    console.log(y);
    var sql = "select sum(op.quantity*p.price) as total_price from navode.product as p,navode.order_product as op,navode.order as o where(op.o_id = o.o_id and p.p_id = op.p_id) and date between '" + y + "-" + m + "-1' and '" + y + "-" + m + "-31'";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


//product analysis
//doughnut chart
ipcMain.on('productAnalysis', (event, args) => {

    var y = args.year;
    var m = args.month;

    var sql = "select p.category,sum(op.quantity) as total from navode.order_product as op,navode.product as p,navode.order as o where (op.o_id=o.o_id and p.p_id=op.p_id) and date between '" + y + "-" + m + "-1' and '" + y + "-" + m + "-31' group by p.category";

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;


        event.returnValue = rows;


    });
});

//bar chart
ipcMain.on('bar', (event, args) => {

    var y = args;


    var sql = "select month(o.date) as month,sum(op.quantity) as total from navode.order_product as op,navode.product as p,navode.order as o where (op.o_id=o.o_id and p.p_id=op.p_id) and year(o.date)='" + y + "'   group by month(o.date)";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


ipcMain.on('profit', (event, args) => {

    var y = args;


    var sql = "select p.pname,(op.quantity*p.price) as total from navode.product as p,navode.order_product as op,navode.order as o where(op.o_id = o.o_id and p.p_id = op.p_id) and month(date)=" + args;
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


//inventory chart


ipcMain.on('inventoryChart', (event, args) => {

    var y = args;


    var sql = "select p.pname,sum(i.quantity) as quantity from navode.product as p,navode.inventory as i,navode.stock as s where(i.s_id = s.s_id and i.p_id = p.p_id) and month(date)=09 group by(i.p_id)";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


//invoice report
ipcMain.on('inoiceReport', (event, args) => {

    var y = args;


    var sql = "select p.pname,p.price,(op.quantity) as total,(op.quantity*p.price) as value from navode.product as p,navode.order_product as op,navode.order as o where(op.o_id = o.o_id and p.p_id = op.p_id) and month(date)=09";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


//return report
ipcMain.on('returnReport', (event, args) => {

    var y = args;


    var sql = "select p.pname,r.quantity,r.manufacture_date,r.description from navode.returns as r,navode.product as p where r.p_id=p.p_id";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


ipcMain.on('salesReport', (event, args) => {

    var y = args;


    var sql = "select (op.quantity*p.price) as value,month(date) as month from navode.product as p,navode.order_product as op,navode.order as o where(op.o_id = o.o_id and p.p_id = op.p_id) group by month(date)";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});


ipcMain.on('returnValue', (event, args) => {

    var y = args;


    var sql = "select p.pname,(r.quantity*p.price) as value from navode.returns as r,navode.product as p where r.p_id=p.p_id and month(date)=09;";
    console.log(sql)
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log("1 record");

        event.returnValue = rows;


    });
});