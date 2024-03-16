// Global variables
let crust = document.getElementById("crust");
let sauce = document.getElementById("sauce");

// toppings array
let toppings = []

// event listener

var formButton = document.getElementById("btn");
formButton.addEventListener("click", function(event){
      event.preventDefault();
      var topping1 = document.getElementById("topping1").value
      var topping2 = document.getElementById("topping2").value
      var topping3 = document.getElementById("topping3").value
});

toppings.push(topping1, topping2, topping3);

function calculateTotal(toppings) { 
     
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust + "pizza" + "with" + sauce + "."

    let toppingString = "Toppings: ";

    // For Loop

    // total = baseCost + cost of all toppings

    // set DOM total += total   
    // use DOM: = orderString   
    // use DOM: = toppingString 
}