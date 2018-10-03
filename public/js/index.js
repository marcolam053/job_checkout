// Close Prompt
$('.close-icon').on('click', function () {
    $(this).closest('.card').fadeOut();
})

// Initialise the counter for use in cart
var classic_cnt = 0;
var standout_cnt = 0;
var premium_cnt = 0;
var total = 0;
localStorage.setItem("classic", classic_cnt);
localStorage.setItem("standout", standout_cnt);
localStorage.setItem("premium", premium_cnt);
localStorage.setItem("total", total);


// Function to add Classic Plan to cart
function AddClassic() {
    classic_cnt++;
    total++;
    localStorage.setItem("classic", classic_cnt);
    localStorage.setItem("total", total);

    // DEBUG Log
//    console.log("Classic Count INCREASED");
//    console.log("total Count INCREASED");

    document.getElementById("cart").innerHTML = "<a class='counter'><i class='fa fa-shopping-cart fa-9x pr-10'></i>" + localStorage.total + "</a>";
};


// Function to add standout plan to cart
function AddStandout() {
    standout_cnt++;
    total++;
    localStorage.setItem("standout", standout_cnt);
    localStorage.setItem("total", total);

    // DEBUG Log
//    console.log("Standout Count INCREASED");
//    console.log("total Count INCREASED");

    document.getElementById("cart").innerHTML = "<a class='counter'><i class='fa fa-shopping-cart fa-9x pr-10'></i>" + localStorage.total + "</a>";
};

// Function to add Premium Plan to cart
function AddPremium() {
    premium_cnt++;
    total++;
    localStorage.setItem("premium", premium_cnt);
    localStorage.setItem("total", total);

    // DEBUG Log
//    console.log("Premium Count INCREASED");
//    console.log("total Count INCREASED");

    document.getElementById("cart").innerHTML = "<a class='counter'><i class='fa fa-shopping-cart fa-9x pr-10'></i>" + localStorage.total + "</a>";
};
