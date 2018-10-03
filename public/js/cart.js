// Global Variable   
var classic = localStorage.getItem("classic");
var premium = localStorage.getItem("premium");
var standout = localStorage.getItem("standout");
var card = document.getElementById("checkout_Card");

// Table Generation
window.onload = function () {

    var table = document.getElementById("cart_list");
    var tbody = document.getElementById("cart_body");
    var total = localStorage.getItem("total");
    var classic = localStorage.getItem("classic");
    var standout = localStorage.getItem("standout");
    var premium = localStorage.getItem("premium");

    // DEBUG Log
    //    console.log("RUNNNING generate_table()");
    //    console.log("classic: " + localStorage.getItem("classic"));
    //    console.log("StandOut : " + localStorage.getItem("standout"));
    //    console.log("premium: " + localStorage.getItem("premium"));
    //    console.log("Total: " + localStorage.getItem("total"));

    // Check if there is anything in cart, if not show no item in cart info
    if (total == 0) {
        // Show error Message
        table.innerHTML = "Your cart is Empty. <a class='btn pr-10 blue darken-2' href='index.html'>Add a Plan</a>";
        console.log("Total is empty");
    } else {
        // If it is not empty, insert row and cell
        // Generate Header
        if (premium != 0) {
            generate_premium(tbody);
        }
        if (standout != 0) {
            generate_standout(tbody);
        }
        if (classic != 0) {
            generate_classic(tbody);

        }
        generate_total(table, total);
        document.getElementById("title").innerHTML = "Cart<button class='bottom right btn'>Check Out</button>";
    }
};

// Generate and insert classic row into the cart
function generate_classic(tbody) {

    var classic = localStorage.getItem("classic");
    var amount = classic * parseFloat(269.99);
    // DEBUG Log
    //    console.log(classic);
    //    console.log(amount);

    if (classic != 0) {
        // Insert a new row at index 0
        var row = tbody.insertRow(0);
        // Insert a new cell at index 0,1,2,3
        var ID = row.insertCell(0);
        var Item = row.insertCell(1);
        var Quantity = row.insertCell(2);
        var Sub_Total = row.insertCell(3);
        // Populate the cell with data
        ID.innerHTML = "Classic";
        Item.innerHTML = "Classic Ad";
        Quantity.innerHTML = classic;
        Sub_Total.innerHTML = amount;
    }
};

// Generate and insert standout row into the cart
function generate_standout(tbody) {

    var standout = localStorage.getItem("standout");
    var amount = standout * parseFloat(322.99);

    //    // DEBUG Log
    //    console.log(standout);
    //    console.log(amount);

    if (standout != 0) {
        // Insert a new row at index 0
        var row = tbody.insertRow(0);
        // Insert a new cell at index 0,1,2,3
        var ID = row.insertCell(0);
        var Item = row.insertCell(1);
        var Quantity = row.insertCell(2);
        var Sub_Total = row.insertCell(3);
        // Populate the cell with data
        ID.innerHTML = "Standout";
        Item.innerHTML = "Standout Ad";
        Quantity.innerHTML = standout;
        Sub_Total.innerHTML = amount;
    }
};

// Generate and insert Premium row into the cart
function generate_premium(tbody) {
    var premium = localStorage.getItem("premium");
    var amount = premium * parseFloat(394.99);

    // DEBUG Log
    //    console.log(premium);
    //    console.log(amount);

    // Insert Role to Table
    if (premium != 0) {
        // Insert a new row at index 0
        var row = tbody.insertRow(0);
        // Insert a new cell at index 0,1,2,3
        var ID = row.insertCell(0);
        var Item = row.insertCell(1);
        var Quantity = row.insertCell(2);
        var Sub_Total = row.insertCell(3);
        // Populate the cell with data
        ID.innerHTML = "Premium";
        Item.innerHTML = "Premium Ad";
        Quantity.innerHTML = premium;
        Sub_Total.innerHTML = amount;
    }
};

// Generate and insert Total row
function generate_total(tbody, count) {

    // Calculate the amount of each package
    var stand_out_amount = standout * parseFloat(322.99);
    var premium_amount = premium * parseFloat(394.99);
    var classic_amount = classic * parseFloat(269.99);
    var total = stand_out_amount + premium_amount + classic_amount;
    // Insert row to table
    if (total != 0) {
        // Insert a new row at index 0
        var row = tbody.insertRow(0);
        // Insert a new cell at index 0,1,2,3
        var ID = row.insertCell(0);
        var Item = row.insertCell(1);
        var Quantity = row.insertCell(2);
        var Sub_Total = row.insertCell(3);
        // Populate the cell with data
        ID.innerHTML = "";
        Item.innerHTML = "";
        Quantity.innerHTML = "<p class='bold pt-10'>Total</p>";
        Sub_Total.innerHTML = total;
    }
};
