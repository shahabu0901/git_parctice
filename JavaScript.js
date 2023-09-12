Date 17/03/2023

let employees={
    users:[
        {name: "html",id:123},
        {name:"css", id:456},
        {name:"javascript",id:789}
    ]}

//console.log(employees.users[0,1,2]); // all the  value of employees
console.log(employees.users[0]);
console.log(employees.users[1]); 
console.log(employees.users[2]);
console.log(employees.users[2].name);


let result= prompt("enter your keys")
let person={
    name:"abc",
    id:123,
    address:xyz
}
console.log(person["id"]); // 123
Date 12/03/2023

   console.log("Hello Worlds")
   var a=10
   a=10
   console.log(a)

    var a=20
    a=20
    console.log(a)

    let a=15
    a=15
    console.log(a)

     let a=30
    console.log(a)
    let a= "HII"
    let b= "hello"
    let c= "BYE"
     console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));

    console.log(`3 Web Tech
    1:HTML
    2;CSS
    3:JS`);
    console.log(`${a}How are you`)

 / Date 13/03/2023//

let Firstname= prompt("Enter Your First Name")
let Lastname= prompt("Enter Your Last Name")
console.log(`the name is ${Firstname} ${Lastname}`);
confirm(" Are You Trainer")
alert("Dont Come This Page !!!!!!!")
let num1=Number(prompt("Enter Your First Number"))
let num2=Number(prompt("Enter Your Last Number"))
console.log(num1+num2);
 alert("DONT USE THIS")

 Let a="js is very easy,html is very boring"
 let b= a.to uppercase()
 console.log(b)
 let c=a.to lowercase()
 console.log(c)
 a.replace(/html/g,`js`)


 let str= "Html is very easy,Html is boring"

 let a=str.toLowerCase()
 console.log(a);

 let b=str .toUpperCase()
 console.log(b);

 let c=str.replace(/Html/i,"js")
 console.log(c);

 let d=str.replace(/Html/g,"js")
 console.log(d);
let a=str.split("")
console.log(a);
let b=a.reverse()
console.log(b);
let c=b.join("")
console.log(c);
let reversedStr=str.split("").reverse().join("")
console.log(reversedStr);
 
write a program to reverse a string?
let str= prompt("ENTER YOUR NAME")  //Input: abc

let reversedStr=str.split("").reverse().join("").toUpperCase()
console.log(reversedStr); //Output: CBA
 
<-------------------------> DATE 14/03/2023

let a=["a",0,1,2]
a.pop()
console.log(a.pop());
 console.log(a)

 a.push(10)
 console.log(a);
 
 console.log(a)
 a.shift()

 console.log(a)
 a.unshift(20)
 console.log(a);

let a=["a",0,1,2]
a.splice(0,2,"Hii")
console.log(a);

a.splice(0,1)
console.log(a);


<------------------//DATE 15/03/2023----->


let a = [10,20,30,40,]
let d = [50,60,70,80]
let c = ["a","b","c","d"]
let b=a.concat(d,c)
console.log(b);

let e=a.includes(50)
console.log(e);

let f=a.indexOf(10)
console.log(f);////// o index value of 10

let unsort = [2,4,5,8,2,7]
let sorted = unsort.sort()
console.log(sortstr);

let unsortstr = ["z","d","a"]
let sortstr = unsortstr.sort()
console.log(sortstr);

<--------date 16/03/2023---------->  


let car= {
    Brand: "Mahindra",
    Model: "XUV 700",
    color: "Black",
    price: "25 lacs",
}
console.log(car);
console.log(car.price)
car.color="red" // Update of object
console.log(car);
car.price="25lacs"
delete car.color
console.log(car); // Delet of an object

let person = {
    name: "rockybhai",
    designation: "saltham",
    company: "kgf3",
    enemies:{
        enemy1: "garuda",
        enemy2: "adhira",
        enamy3: "ramika",
    }
}
delete person.enemies.enemy1
console.log(person);
person.enemies.enemy1="death"
console.log(person);

let employees={
emp_name: "prajwal",
emp_designation: "trainer",
emp_salary:100000,
emp_skills:["html","css","bootstrp","tailwindcss", "javaScript", "reactjs","mongodb"]
}
console.log(employees);
employees.emp_skills[3]
console.log(a);
delete employees.emp_skills[6]
console.log(employees);

let employeesData =[
    {name: "Bhargav",desig:"software devolper"},
    {name: "Rahul",desig:"devolper"},
    {name: "Shahzad",desig:"engineer"},
    {name: "shahabu",desig:"trainer"},
]



let person={
    name:"ABC",
    id:123,
    address:"XYZ",
    "emp-salary": 20000
}
console.log(person[id]); //123


#01 Write a Programme Array Of Object:,



let Student={
 user:[
    {name: "Rahul" id:20},
    {name: "shahzad",id 21}

]

<------DATE 18/03/2023------>


let num1= Number (prompt("Enter your first number"))
let num2= Number (prompt("Enter your second number"))
function add(a,b){
    console.log(a+b);
}
add(2,3)
add(20,30)
add(99 , 1)


let person={
    name: "shahabu",
    id:8294,
    address: function(){
        console.log("Bengaluru")
    }
}
person.address()
console.log(console);
document.write(console);



             <----------DATE: 20/03/2023------------>



function print() {
    return "Hiii"
    
}
console.log(print());

let abc =function(){
    console.log("Hello");
}
 let a= abc
//let a=abc()
//a()
console.log(a());


function print(a){
    console.log(`${a} is very easy`);
}
print("html")

function print(b){
    console.log(`${b} is very hard`);
}
print("javascript")
function print(c){
    console.log(`${c} is medium language`);
}
print("css")

let input = prompt("entr the easy webtech")
function print(a){
    console.log(`${a} is very easy`);
}
print (input)


function add(a,b,c){
    console.log(a+b+c);
}
 add(1,2,) // NaN
add(1,2,3) // 6


<-----21/03/2023--------->


var a= 20
function print(){
    let a=30
    console.log(a);
}
print()

a()
 console.log(a);
 var a= function(){
    console.log("hii");
 }
 a()
 a=10
console.log(a);    // a is not a function //


let a=25
function print(){
let a=55
console.log(a);
}
print()


console.log(a)
var a=10
var b=30
function print(){
    var c = 30
    console.log(c)

}
console.log(a);
function print1(){
console.log(a)
}

print1()
print()
console.log("Bye");


<---------Date 23/03/2023--------------->


Nested Function

let a=20
console.log(a)
function x(){
    var b=25
    console.log(a)
    function y(){
        var c =35
        console.log(b,c)
        console.log(a)
       // console.log(a,b); extra line
    }
y()
console.log(c);
}
x()


let a=25
console.log(a)
function x(){
    let a=10
    console.log(a)
}
x()
console.log((a));
x()


let a
function x(){
  a=15
   // console.log(a)  //15"
}
console.log(a) // UD  
x()  //5
    console.log(a); //5



function fun(a){

console.log(typrof ,arguments.length)
}
fun(7); 
fun(2)

fun()
fun()


<------24/03/2023-------->


function a(){
    let data=10
    function b(){
        return data 
    }
    return b
}
let x = a();
console.log(x)
console.log(x);   // AGAIN EXICUTE
console.log(x()); // AGAIN EXICUTE
console.log(x());

           <-----Date 25/03/2023--------->

function a(){
console.log("function a is called");
}
a()

let b= ()=>{
//function b(){
    console.log("function b is called");
}

b()
setTimeout(b,10000)
function c(){
    console.log("function c is called");
}

c()

setInterval(()=> {document.write("Hello Sir");},2000)



function mainFunc(a,b,task){
    let c= task (a,b)
    return c
}
let add=mainFunc(4,8,function(a,b)
{return a+b})
let multiplication=mainFunc(10,5,function(a,b)
{return a*b})
let sub=mainFunc(20,5,function(a,b)
{return a/b})

console.log(add);
console.log(multiplication);
console.log(sub);



27/03/2023//


let a= ()=>{
    console.log("Function a is called");
}
a()
let b= () => {
    console.log("functin b is called");
}
b()
setTimeout(b,50000)
let c= ()=>{
console.log("functin c is called");
}
c()
setInterval(()=> {document.write("hii");},20000)



function mainFunc(a,b,task){
    let c= task(a,b)
    return c
}
let value = mainFunc(10,4,function(a,b){
  return a - b});
console.log(value);

let value1 = mainFunc(8,4,function(a,b){
  return a * b})
console.log(value1);

let value2 = mainFunc(4,12,function(a,b){
  return a + b})
console.log(value2);
let value3 = mainFunc(12,4,function(a,b){
  return a / b})
console.log(value3);






function x(a,...rest){
    console.log(rest);
    console.log(a);
}
x(1,2,3,4,5)


let obj1={
    name: "Md Shahabuddin",
    designation: "software engineer",
    company: "apollo"
}
let obj2= {
    id: 1,
    ...obj1
}
console.log(obj2);


date 28/03/2023// 

let a= "5"
let b=5
let data = a==b
console.log(data);


let a1= "5"
let b1=5
let data1 = a==b
console.log(data1);


function car (brand, name, price){
    this.brand= brand
    this.name= name
    this.price= price
}
let car1 =new car("kia","celtos",1200000)
let car2 =new car ("cretta", "hundai",10000000)
car1.cc="1200"
console.log(car1);
car2.brand="tata"
console.log(car2);


function Book (name,publication, subject){
this.name = name
this.publication=publication
this.subject=subject
}
let Book1 = new Book("Java","Games gasling","NK")
let Book2 = new Book("JavaScript","parjawal","Nr")
let Book3 = new Book("sql","Ef Codd","data")
console.log(Book1);
console.log(Book2);
console.log(Book3);



let a = object.keys(car1)
console.log(a)
let b = object.values(Car1)
console.log(b)
let c = object.entries(car1)
console.log(c);



<-------29/03/2023//------->
------------------------------------------------

let arr = ["Hii","Hello","Bye"]
for (let abc in arr){
    console.log(abc);
}
for (let abc of arr){
    console.log(abc);
}
arr.forEach((x,y)=>{
    console.log(x,y);
})


let arr = ["Hii","Hello","Bye"]

//let arr = [20,25,30] //Extra Things....>

let a= arr.forEach((x)=>{
console.log(x);
})
let b= arr.map((x)=>{
    console.log(x);
})


let arr = ["Hii","Hello","Bye"]
let b= arr.map((x)=>{
    return x
})
console.log(b);


let [a,b,c,d]=[1,2,3,4]
console.log(a);
console.log(b)
console.log(c)
console.log(d)


let arr= [10,"hii","hello"]
let [x,y,z]=arr
var [a,b]= [1,]
var [b,a]= [a,b]
console.log(a);
console.log(b);


let [p,q,...r]= [10,20,30,40,50,60]
console.log(p) // 10
console.log(q)  // 20
console.log(r);  //[30,40,50,60]


let {x}={a:b}
console.log(x);



let arr = [10,20,30,40,50]

for (let a in arr){
  console.log(a);  // Only Index Values Are Print
} 



let arr = [10,20,30,40,50]

for (let a of arr){
  console.log(a);    // values are printed
} 

Test Of writen  Date 31/03/2023



let a=10
b=50
function x(){
  let a=30
  b=10                           //// Test Qn
  console.log(a);
}
x()
console.log(a+b);


let a= "50"
var b=10
const c=40                     test Qn
a=25
console.log(a+b+c);



function a(){
  let x=10
  function b(){
  let y=10
    return x+y
 }                               test qn
  return b
      }
let c=a()
let d=c()
console.log(d);

 /again try this 

 
function  mainfun(a,b,task){
  let  c=task(a,b)
  return c
}
let sub = mainfun(12,4,function(a,b){
  return a-b
})
  console.log(sub);
  let multi= mainfun(8,4 ,function(a,b){
    return a*b
  })
   console.log(multi);
   let Div= mainfun(10,5 , function(a,b){
     return a/b})
     console.log(Div);
   

date 1/04/2023//
-----------------------------------------------------------

let maxValues =Math.max(10,20,50)    //50
console.log(maxValues);

let minValues =Math.min(10,20,-7)   // -7
console.log(minValues);

let rounup= Math.round(12.1)        //13
console.log(rounup);

let a= Math.ceil(12.1)             // 13
console.log(a);

let b= Math.floor(12.9)           //12
  console.log(a)



  let a = new Date("199 march")     //Real Time
  console.log(a);


let a=Math.ceil(Math.random()*10000)     // Random Number Ouput
console.log(a);


function OTP (){
  let a
  for (i=0; i<4; i++){
  a= Math.floor(Math.random()*100005)    //otp Genarete Many time 
}
console.log(a);
}
OTP()

function OTP (){
  let a 
  for(i=0; i<=5; i++){
    a= Math.floor(Math.random()*10000000)
  }
  console.log(a)
}
OTP();

function OTP(){
  let a
  for(i=0; i<=10; i++){
    a=Math.floor(Math.random()*1000000)
  }
  console.log(a)
}
OTP();

var a=50;

for(var i=0; i<=a; i++){
  if(i%2===0)
  console.log(i);;;;;;;;;;;
}

function OTP(){
  let a
  for (i=0; i<10; i++){
    a= Math.floor(Math.random()*10000)
  }
  console.log(a);
}
OTP()


function OTP(){
  for(i=0; i<5; i++){
    a=Math.floor(Math.random()*1000000)
  }
  console.log(a);
}
OTP();





let a = new Date("2023 june")    //Repaet Programme;
console.log(a);


Date 04/04/2023//   DOM START TODAYS


let Heading1 =document.getElementById("x")
let value1 = Heading1.innerText
console.log(value1);

let Heading2 = document.getElementById("y")
let value2 = Heading2.innerText
console.log(value2);

--------------------------------------------------------

let Heading1 = document.getElementById("x")
Heading1.innerText = "Hello Galaxy From Dom"
Heading1.style.background = "blue"
Heading1.style.fontSize = "35px"
Heading1.style.color = "white"
Heading1.style.border = "10px solid red"
Heading1.style.display = "flex"
Heading1.style.justifyContent = "center"

---------------------------------------------------------

let div1 =  document.getElementById("abc")
 div1.innerHTML = "<h1>Hello</h1> <br> <h2>helllllooo</h2>"
 let a = 10;
 let b = 40;
div1.innerHTML = `${a+b}`
div1.innerHTML = `<h1> The Result is ${a+b} </h1>`

--------------------------------------------------------------

let div1 =  document.getElementById("abc")
let a = Number(prompt("enter the first number"))
let b = Number(prompt("enter the second number "))
div1.innerHTML = `<h1> The Result is ${a+b} </h1>`

Date 05/04/2023 ---------------------->


let values = document.getElementsByClassName("a")
console.log(values);  // html collection 

values[1].style.background = "red"
values[0].style.background = "blue"

let idvalues = document.getElementById("b")



let values = document.getElementsByClassName("a")
console.log(values); //
let check = Array.isArray(values)

let newArray = Array.from(values)
console.log(newArray);

newArray.map((elem)=>{
  console.log(elem);
  elem.style.background = "yellow";
})


let tags = document.getElementsByTagName("div")
console.log(tags);

let tags2 = Array.from(tags)
tags2.forEach((x)=>{
  x.style.background = "blue"
  x.innerText = "DIVISION TAG"
})


Date 06/03/2023///

let a = document.querySelector("div")    // only one seleted
console.log(a);

let a = document.querySelector(".a")
console.log(a);

let a = document.querySelectorAll(".y")
console.log(a);

a.forEach((x)=>{
  x.style.background = "red"
});

   Date 07/04/2023///


let heading1 = document.createElement("h1")
heading1.innerText = "Hello Word"
document.body.append(heading1)


let para = document.createElement("p")
para.innerText = "adsgshbfjdbsahfjiuhkjdbdhsjfiuweiuvzbhjguiahhjsjfhugfr"
document.body.append(para)
------------------------------------------------------------------------------------------------

let ol = document.createElement("ol")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")

li1.innerText = "HTML"
li2.innerText = "CSS"
li3.innerText = "js"

ol.appendChild(li1)
ol.appendChild(li2)
ol.appendChild(li3)

document.body.append(ol)

-----------------------------------------------------------------------------------------


let ul = document.createElement("ul")
let li11 = document.createElement("li")
let li12 = document.createElement("li")
let li13 = document.createElement("li")

li11.innerText = "HTML"
li12.innerText = "CSS"
li13.innerText = "js"

ul.appendChild(li11)
ul.appendChild(li12)
ul.appendChild(li13)

document.body.append(ul)

-----------------------------------------------------------------------------------------------

TABLE CREATION

let heading1 = document.createElement("h3")
heading1.innerText = "TABLE CREATION"
document.body.append(heading1)

let table = document.createElement("Table")
let tr1 = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
td1.innerText = "Time/Day"
td2.innerText = "10.00"
td3.innerText = "12:00"
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
 table.appendChild(tr1)
//document.body.append(table)
//document.body.append(tr1)

// //Table Creation

let tr2 = document.createElement("tr")
let td4 = document.createElement("td")
let td5 = document.createElement("td")
let td6 = document.createElement("td")
td4.innerText = "Mon"
td5.innerText = "Html"
td6.innerText = "Js"
tr2.appendChild(td4)
tr2.appendChild(td5)
tr2.appendChild(td6)
table.appendChild(tr2)


let tr3 = document.createElement("tr")
let td7 = document.createElement("td")
let td8 = document.createElement("td")
let td9 = document.createElement("td")
td7.innerText = "Tues"
td8.innerText = "Css"
td9.innerText = "React"
tr3.appendChild(td7)
tr3.appendChild(td8)
tr3.appendChild(td9)
table.appendChild(tr3)

let tr4 = document.createElement("tr")
let td10 = document.createElement("td")
let td11 = document.createElement("td")
let td12 = document.createElement("td")
td10.innerText = "WED"
td11.innerText = "Js"
td12.innerText = "HTML"
tr4.appendChild(td10)
tr4.appendChild(td11)
tr4.appendChild(td12)
table.appendChild(tr4)

table.style.border= "2px solid black"
table.style.padding = "5px"
table.style.borderSpacing="5px"
// table.style.backgroundColor= "red"
table.style.color = "blue"

document.body.append(table)

//------------------------TABLE  CREATION END----------------------------------------------

// DATE /08/04/2023//

function x(){
console.log("h1 tag is clicked");
}

function y(){
  console.log("Submitted");
}

let a= document.querySelector("h1")
function chgcolor(){
  console.log(a);
  a.style.background="red"
}

function chgcolor1(){
  a.style.background="blue"
}



let fetchData =async()=>{
  let data =await fetch ("https://jsonplaceholder.typicode.com/users")
  let res =await data.json();
  console.log(res)
}
fetchData

let a="abc"
let b=a.reverse();
console.log(a)

function Student(sid,name){
  this.id= sid;
  this.name= name;
}
  let Student1 = new Student(1,"rahul")
  let Student2 = new Student(2,"rahul")
  let Student3 = new Student(3,"shahzad")
console.log(Student1.sid);
console.log(Student2.name);
console.log(Student3.name);
console.log(Student1)
console.log(Student2)
console.log(Student3)