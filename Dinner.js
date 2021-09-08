// Create a Dinner class with attributes dishName, protein, veggie, and price. Create a function that prints each attribute. Create an object of the class in your main function

class Dinner {
   constructor(dinnername) {
     this.location = dinnername;
     this.dishes = [];
};
displayDishes(dishDesc) 
{
     this.dishes.push(dishDesc);
 }
}

class Dishes {
    constructor(name, protein, veggies, price)
  {
         this.dishName = name;
         this.dishProtein = protein;
         this.dishVeggies = veggies;
         this.dishPrice = price;
  
  console.log(`We're serving:
  ${this.dishName}, made with ${this.dishProtein},
  with ${this.dishVeggies}!\n Only ${this.dishPrice}
  `);
  }
}

let dishDesc = new Dinner ("");
// Create some dog instances
let dishone = new Dishes ("Trebor's Shrimp & Pasta", "Shrimp", "Pasta(?)", "$200.00");
let dishtwo = new Dishes ("Sucramed's Buger", "USA fed Beef", "Lettuce and Onions", "$500.00");
let dishthree = new Dishes ("Dorrej's Breakfast Pizza", "Egg, Bacon, Sasuage", "Spinach(?)", "$999.97");

dishDesc.displayDishes(dishone);
dishDesc.displayDishes(dishtwo);
dishDesc.displayDishes(dishthree);