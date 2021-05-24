let arr=[23,45,67,89,89,89];

let sum=0;
for(var x=4;x<arr.length;x++){//sum of Array
    sum+=arr[x];
}
console.log(arr.length)
console.log(sum)
console.log(sum/arr.length) //average

// conditions

var x=20
var y=60
if(x==10){
    console.log(x)
}
else if(y>50){
    console.log(y)

}
else{
    console.log('false')
}



var age=26
var gender="female"
if(gender=="female"){ 
if (age<18)
{
console.log("child")
}
else{ 
console.log("sorry is a man")
}}


 //1
for( var i=1;i<=100;i++ )
{
  if(i%3===0 && i%5===0)
  {
    console.log(i +"FizzBuzz");
  }
  else if (i%3 ===0) 
  {
    console.log(i+ "Fizz");
  }
  else if (i%5 ===0) 
  {
    console.log(i+"Buzz");
  }
  else
  {
    console.log(i);
  }
}



 // 2
a=-6;
b=-9;
c=-1;
d= 7;
f=-4;
if(a>b && a>c && a>c && a>d && a>f ){
    console.log(a);
}
else if(b>a && b>c && b>d && b>f){
    console.log(b);
}
else if(c>a && c>b && c>d&& c>f){
    console.log(c);
}
else if(d>a && d>b && d>c&& c>f){
    console.log(d);
}
else {
    console.log(f);
}

// 3
var students = [['John', 85], ['James', 78], ['juliet', 92], ['Job', 50],
 ['jane', 66]];

var averagemarks=0

for (var i=0; i < students.length; i++) {
    averagemarks += students[i][1];
    var avg = (averagemarks/students.length);
    }
    console.log("average grade: " + (averagemarks)/students.length);

    if (avg < 60){
      console.log("Grade : F");      
      } 

    else if (avg < 70) {
            console.log("Grade : D"); 
              } 

    else if (avg < 80) 
         {

         console.log("Grade : C"); 
    } 
     else if (avg < 90) {
            console.log("Grade : B"); 
    } 
     else if (avg < 100) {
            console.log("Grade : A"); 
}



//4
for (var x=0; x<=15; x++) {
  if (x === 0) {
    console.log(x +  " is even");
  }
    else if (x % 2 === 0) {
      console.log(x + " is even");   
}
else {
  console.log(x + " is odd");
}}

 //5
var sums=0;
for(i=1;i<1000;i++){
  if(i%3==0||i%5==0){
sums+=i
  }
}
console.log(sums)


 //6

function student(id,latestCallback){
  latestCallback();
}
function latestStudentList(){
  console.log('hello')
}
student(1,latestStudentList)

 //7
function leapyear(year){
 return(year%100===0)?(year%400===0):(year%4===0)
}
console.log(leapyear(2021));
console.log(leapyear(2020));
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1900));

 //8
function readStatus(){
  library = [ 
{
       author: 'Bill Gates', 
    title: 'The Road Ahead', 
    readingStatus: true }, 
{
     author: 'Steve Jobs',
     title: 'Walter Isaacson',
      readingStatus: true }, 
{ 
      author: 'Suzanne Collins', 
      title: 'Mockingjay',
   readingStatus: false }
  ];
  for (var i = 0; i < library.length; i++){
    var book =library[i].title+" " +'by'+" " +library[i].author ;
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {console.log("You still need to read " + book);

    var book="'"+library[i].readStatus
  }
 }
}
readStatus();
 
  
