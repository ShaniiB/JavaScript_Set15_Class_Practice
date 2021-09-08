// Create a Phone class with attributes phoneName, storageLimit, isAndroid, screenSize, and hasHeadPhoneJack. Create a function that prints each attribute. Create an object of the class in your main function.

// Begin the Class
class Store {
    constructor(phonestore) {
        this.name = phonestore;
        this.showcase = [];
    };
// Add phone model
    showInventory(newPhone) {
        this.showcase.push(newPhone);
        console.log(`We current have these phone models to showcase.
        ${newPhone.phoneName}
        ${newPhone.osType}
        ${newPhone.phoneStorage}
        ${newPhone.phoneScreenSize}
        ${newPhone.phoneJack}`);
 }
}    

class Phone {
    constructor(name, type, limit, size, jack) {
        this.phoneName = name;
        this.osType = type ;
        this.phoneStorage = limit;
        this.phoneScreenSize = size;
        this.phoneJack = jack;
  }
};

let myStore = new Store("Phone Store");
let phone1 = new Phone("Pear", "Android", "3GB", "3inches", "Yes");
let phone2 = new Phone("Orange", "Android", "8GB", "4inches", "Yes");
let phone3 = new Phone("Banana", "Android", "8GB", "4inches", "Yes");
let phone4 = new Phone("Granny Smith", "iPhone", "5GB", "5inches", "No");
let phone5 = new Phone("Honey-crisp", "iPhone", "19GB", "10inches", "No");
let phone6 = new Phone("Cosimc-crisp", "iPhone", "30GB", "12inches", "No");


myStore.showInventory(phone1);
myStore.showInventory(phone2);
myStore.showInventory(phone3);
myStore.showInventory(phone4);
myStore.showInventory(phone5);
myStore.showInventory(phone6);

