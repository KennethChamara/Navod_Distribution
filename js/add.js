function addCustomer() {
    document.getElementById("main-body").innerHTML = "<add-customer></add-customer>";
    document.getElementById("myLinks").style.display = "none";
}

function addOrder() {
    document.getElementById("main-body").innerHTML = "<add-order></add-order>";
    document.getElementById("myLinks").style.display = "none";
}

function addPayment() {
    document.getElementById("main-body").innerHTML = "<add-payment></add-payment>";
    document.getElementById("myLinks").style.display = "none";
}

function addProduct() {
    document.getElementById("main-body").innerHTML = "<add-product></add-product>";
    document.getElementById("myLinks").style.display = "none";
}

function addSalesRep() {
    document.getElementById("main-body").innerHTML = "<add-sales-rep></add-sales-rep>";
    document.getElementById("myLinks").style.display = "none";
}





function first() {
    document.getElementById("main-body").innerHTML = "<test-zero></test-zero>";
    document.getElementById("myLinks").style.display = "none";
}




function inventoryManagement() {
    document.getElementById("main-body").innerHTML = "<inventory-management></inventory-management>";
    document.getElementById("myLinks").style.display = "none";
}

function AvailableItem() {
    document.getElementById("main-body").innerHTML = "<available-item></availabale-item>";
    document.getElementById("myLinks").style.display = "none";
}

function returnItem() {
    document.getElementById("main-body").innerHTML = "<return-item></return-item>";
    document.getElementById("myLinks").style.display = "none";
}

function viewSalesRep() {
    document.getElementById("main-body").innerHTML = "<view-sales-rep></view-sales-rep>";
    document.getElementById("myLinks").style.display = "none";
}

function viewOrder() {
    document.getElementById("main-body").innerHTML = "<view-order></view-order>";
    document.getElementById("myLinks").style.display = "none";
}

function viewProduct() {
    document.getElementById("main-body").innerHTML = "<view-product></view-product>";
    document.getElementById("myLinks").style.display = "none";
}

function viewCustomer() {
    document.getElementById("main-body").innerHTML = "<view-customer></view-customer>";
    document.getElementById("myLinks").style.display = "none";
}

function addInventory() {
    document.getElementById("main-body").innerHTML = "<add-inventory></add-inventory>";
    document.getElementById("myLinks").style.display = "none";
}

function loadRepProductAnalysis() {
    document.getElementById("main-body").innerHTML = "<product-analysis></product-analysis>";
    document.getElementById("myLinks").style.display = "none";
}

function loadRepProgress() {
    document.getElementById("main-body").innerHTML = '<rep-progress val="29"></rep-progress>';
    document.getElementById("myLinks").style.display = "none";
}
function updateproduct(p_id) {
    document.getElementById("main-body").innerHTML = "<update-product p_id=${p_id}></update-product>";
    document.getElementById("myLinks").style.display = "none";
}
function updatecustomer(customer_id) {
    document.getElementById("main-body").innerHTML = "<update-customer customer_id=${customer_id}></update-customer>";
    document.getElementById("myLinks").style.display = "none";
}
function updateorder(o_id) {
    document.getElementById("main-body").innerHTML = "<update-order o_id=${o_id}></update-order>";
    document.getElementById("myLinks").style.display = "none";
}
function updaterep(rep_id) {
    document.getElementById("main-body").innerHTML = "<update-rep rep_id=${rep_id}></update-rep>";
    document.getElementById("myLinks").style.display = "none";
}