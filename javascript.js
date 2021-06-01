    // Applying all we've learnt On Car

    var carName="Mazida";//Hoisting
    // var is a mutable variable 
    //carName is a variable that is storage of Mazda
   //Mazda has datatype string 
   // var carName="Mazda" is a statement
   //this is Global scope as CarName can be accessed everywher
let x=function(){     //Anonymous function and declaring a function as a variable x
var carname2="Subaru";
console.log(carname2); 
console.log(carName);
}
//console.log(carname);// carName2 is local scope which means that it can't be accessed outside the block
x()






function car(carname,make,capacity){  // function creation ' function name is Car(named function) with parameters name,make,capacity and keyword function 
console.log(carname); // output statement
}
car("Mazda","Toyota",5) // arguments Mazda,Toyota and 5
      // datatype  of 5 is a number
       // datatype of MAzda and Toyota is string
       //function call





(function IIFE(){
const capacity=5;           // const is a variable that can't be reassigned or change
console.log(capacity);
} () )                 // Immediately invoked function 

let  maxfare=(capacity,fare)=>capacity*fare;
console.log(maxfare(5,100))               //Arrow function
                         //let variable which can be changed or not




function start() {
let carStart = "Voooooooooo"
console.log(carStart)            // closure where function stop has ability to remember what is in start and it is also a nested function
function stop() {
let carStop = carStart + " proooo"  //concatination
console.log(carStop)

}
stop()
}
start();

function buyCar() {
const price = 50000000
console.log(price)
}
function sellCar(sellingPrice, callback) {
setTimeout(() => {
console.log("Call back Function");
}, 3000);                                // setTimeout
console.log(sellingPrice)

}
sellCar(2000000, buyCar());   // Call back function : buyCar is used as an argument of sellCar


class Car {     //class creation called Car
constructor(registration, model) {
this.registration = registration;   //this keyword that define an object they belong to
this.model = model;
this.carInfo = function () {    // method which is function used as a property of object
return " Our car has" + " " + this.registration + "" + "number  " + " and" + " " + this.model
}
Car.prototype.refillPetrol = 40;    // using prototype to add an other object property
}
}
let car1 = new Car("KC5678", "cx567") // creation of object car1 using new keyword 
console.log(car1.registration)     //access
console.log(car1.carInfo())
console.log(car1.refillPetrol)

let promise=new Promise((resolve,reject)=>{   //promises
let carCrushes=true;      //boolean datatype
if(carCrushes){
resolve("pay back")
}
else{
reject("Buy another one")    //conditional if else statement
}

}).then((message)=>{
console.log('Insurance will pay back');
}).catch((message)=>{
console.log("can't be compessated")
})
async function cleanCar(){                //Asynchronous function
let y=setInterval(() => {        //setinterval and clear it
console.log("Let'st start cleaning");
clearInterval(y);
}, 2000);
console.log("Wuw!! We are done")
}
cleanCar()


let car = {         //object car
fname: 'mercedes',   //object properties
lname: "Benz"
}
console.log(car.fname); // Dot method to access an object's property
console.log(car['lname']); //Bracket method to access an object's property
let { fname, lname } = car    //Object destructuring
console.log(fname);



let { fname, ...rest } = car    //using rest keyword 
console.log(rest.lname);
console.log(fname)

for (let [key, value] of Object.entries(car)) {    //for loop
console.log(`${key}:${value}`)
}


for (key in car) {     //for in loop
console.log(key)
}



let car = ["Mini", "Bus"];
let [fname, lname] = car     // Array destructuring
console.log(fname);


for(name of car){   //for of loop
console.log(name);
}



export function Speed(value){  //export module
return speed*3;
}


let carNum=0;
while(carNum<5){   //While loop
console.log(carNum);
carNum++;
}



let carNumber=6;   //do while loop
do{   
console.log(carNumber);
carNumber--;
}
while(carNumber>0);




let carId='100';
let carId2=number(carId)
console.log(typeof(carId)); // Explicit coersion


 let carId2=carId + '';
console.log(carId2) // implicit coersion



let carSpeed="50";
let carspeed2=50;
console.log(carSpeed==carspeed2);//loosely equal to, Compares only values
console.log(carSpeed===carspeed2);//strictly equal to,Compares both values and types
console.log(carSpeed!=carspeed2);//Not loosely equal to 
console.log(carSpeed!==carspeed2);//Not strictly equal to




var carN=40;      //using switch case
switch(true){
case carN>60:
console.log("Perfect");
break;
default:
cconsole.log("Not enough")
}



function ternaryOp(){        //Ternary operator
car=="car"? console.log("true"): console.log("false") 
}
ternaryOp()




var strict=function(){   //using strict mode which will give us an error 
"use strict",
a=30;
console.log(a)
}
strict()       //function as a value


//  let myPromise = new Promise(function(myResolve, myReject) {
        
//           myResolve(); 
//           myReject();  
//         });
        
//         myPromise.then(
//           function(value) {  },
//           function(error) { }
//         );


//  let myPromise=new Promise(function(myResolve,myReject){
//             myResolve();
//             myReject();

//         });
//         myPromise.then(
//             function(value){},
//             function (error){

//             }
//         );
// let myPromise=new Promise(function(myResolve, myReject) {
//     var x=0;
//     if(x==0){myResolve("ok")};
//     else {myReject("error")};
// });

// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );



let farm = {
    farmId: farmId,
    name: name,
    farmer: farmer,
    phone: phone,
    address: address
};

newFarm=Object.assign(transaction,{category:'agribiz'})
console.log("transaction:",transaction)
console.log("newTransaction:",newTransact)
// for(var i=0;i<=15;i++)
// if (x===0){
//   console.log(i+''+"is even");
// }
// else if (1%2===0);{
//   console.log(i+''+'is even');
// }
// else{
//     console.log(i+''+'is an odd number');
// }

if (hours<18){
  console.log("good mornig")
}
else{console.log('good evening')}

function count(){ 
  var num=(1,100);
  var max=100
  for (x in num){ 
  if(x==max){
      console.log(x)
  }}}
  count();


var marks=80;
if(marks<60){console.log("f")}
elseif(marks<70);
  console,log("D")
elseif(marks<80);
  console.log("c")
elseif(marks<90);
  console.log(" B")
elseif(marks<100);
  console.log("A")
// else 
//   console.log('f')

function readStatus(){
  library = [ { author: 'Bill Gates', 
    title: 'The Road Ahead', 
    readingStatus: true }, 
  library2={
     author: 'Steve Jobs',
     title: 'Walter Isaacson',
      readingStatus: true }, 
  library3={ 
      author: 'Suzanne Collins', 
      title: 'Mockingjay',
   readingStatus: false }];


}