class Vehicle {
    constructor(wheels) {
       this.wheels = wheels;
    }
    toString() {
       return 'Wheels: ' + this.wheels + ' ';
    }
 }
 
 class Car extends Vehicle {
    constructor(color) {
       super(4);
       this.color = color;
    }
    toString() {
       return super.toString() + ' colored: ' + this.color;
    }
 }
 
 let car = new Car('blue');
 console.log(car.toString());
 let car1 = new Car('Red');
 
 function changeColor(btn) {
      btn.style.backgroundColor = "red";
 }
//  document.getElementById("btncar").addEventListener("click", changeColor);
 console.log(car1.toString());
 console.log(car instanceof Car);
 console.log(car instanceof Vehicle);
 