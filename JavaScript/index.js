// 1. Ways To Print in JavaScript

console.log("Hello World");
alert("Me");
document.write("This is Document Write")

// 2. Javascript Console API 
console.log("Hello World", 0 + 1);
console.warn("This is Warnings");
console.error("This is an Error");


// 3. JavaScript Variables
// What are Variables? - Containers to store data values 

/*
multi 
line 
commment
*/

var number1 = 40;
var number2 = 105;
console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 450;
var num2 = 50.50;

// String
var str1 = "This is a String";
var str2 = 'This is also a String';
console.log(str1, str2);

// Objects
var marks = {
    Ravi: 40,
    Shubham: 75,
    Harry: 100
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

/*
At A Very High Level, There Are Two Types Of Data Types In JavaScript 
1. Primitive Data Types: undefined, null, number, string, boolean, symbol
2. Reference Data Types: Arrays and Objects
*/


var arr = [1, 2, 4, 5, 'Prasanjit']
console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The Value Of a + b is ", a + b);
console.log("The Value Of a - b is ", a - b);
console.log("The Value Of a * b is ", a * b);
console.log("The Value Of a / b is ", a / b);

// Assignment Operators
var c = b;
c += 5;
c -= 5;
c *= 5;
c /= 10;
console.log(c);


// Comparison Operators
var x = 40;
var y = 150;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);


// Logical Operators

// Logical And
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// Logical OR 
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Logical NOT 
console.log(!false);
console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// DRY = Do Not Repeat Yourself 
cal_avg0 = avg(5, 45);
cal_avg = avg(30, 120);
console.log(cal_avg0, cal_avg);



// Conditionals in JavaScript


var age = 40;
// Single if Statement 
if (age > 18) {
    console.log('You Can Drink Alcohol');
}

// if - else Statement
if (age > 18) {
    console.log('You Can Drink Alcohol');
}
else {
    console.log('You Cannot Drink Alcohol');
}



var age = 25;
if (age > 30) {
    console.log("You Are Not A Kid");
}
else if (age > 25) {
    console.log("Bachhe Nahi Rahe");
}
else if (age > 20) {
    console.log("Yes Bachhe Nahi Rahe");
}
else if (age > 18) {
    console.log("18 Bachhe Nahi Rahe");
}
else {
    console.log("Bachhe rahe");
}
console.log("End Of Ladder");




var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr[i])
}


// For Each Function 
arr.forEach(function (element) {
    console.log(element);
})



let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}



// do{
//      console.log(arr[j]);
//      j++;
//  } while (j < arr.length); 



let myArr = ["Fan", "Camera", 40, null, true];
// Array Methods

console.log(myArr.length);
myArr.pop();
myArr.push("Harry")
myArr.shift()

const newLen = myArr.unshift("Harry")
console.log(newLen);
console.log(myArr);



// String Methods in JavaScript
let myLovelyString = "Harry is a Good Boy Good Good Harry";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("Good"))
console.log(myLovelyString.lastIndexOf("Good"))

console.log(myLovelyString.slice(1, 4))
Replace_Strings = myLovelyString.replace("Harry", "Rohan");
Replace_Strings = Replace_Strings.replace("Good", "Bad");
console.log(Replace_Strings, myLovelyString)



let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


// DOM Manipulation
let element = document.getElementById('click');
console.log(element);


let elementClass = document.getElementsByClassName("container")
console.log(elementClass);
elementClass[0].style.background = "Yellow";
elementClass[0].classList.add("Bg-Primary")




console.log(element.innerHTML);
console.log(element.innerText);



TagName = document.getElementsByTagName('div')
console.log(TagName)


createdElement = document.createElement('p');
createdElement.innerText = "This is a Created Para";
TagName[0].appendChild(createdElement);


createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a Created Bold";
TagName[0].replaceChild(createdElement2, createdElement);




// Selecting Using Query

selector = document.querySelector('.container')
console.log(selector);
selector = document.querySelectorAll('.container')
console.log(selector)


function clicked() {
    console.log('The Button Was Clicked')
}
window.onload = function () {
    console.log('The Document Was Loaded')

}



// Events in JavaScript



firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Clicked</b>"
    console.log("Clicked On Container")
})




firstContainer.addEventListener('mouseover', function () {
    console.log("Mouse On Container")
})



firstContainer.addEventListener('mouseout', function () {
    console.log("Mouse Out Of Container");
})




let prevHTML = document.querySelectorAll('.container')[2].innerHTML;
firstContainer0.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[2].innerHTML = prevHTML;
    console.log("Mouse Up When Clicked On Container");
})


firstContainer0.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[2].innerHTML = "<b> We Have Clicked</b>"
    console.log("Mouse Down When Clicked On Container");
})






// Arrow Functions
function summ(a, b) {
    return a + b;
}

summ = (a, b) => {
    return a + b;
}


logKaro = () => {
    document.querySelectorAll('.container')[3].innerHTML = "<b> Set Interval Fired</b>"
    console.log("I Am Your Log")
}

logKaro()



// Set Timeout And Set Interval
clr = setTimeout(logKaro(), 5000);
clr = setInterval(logKaro(), 2000);




// Use ClearInterval(clr)/ClearTimeout(clr) To Cancel SetInterval/SetTimeout

// JavaScript localStorage
localStorage.setItem('Name', 'Harry')
localStorage.getItem('Name')
localStorage.removeItem('Name')
localStorage.clear();



// JSON 
obj = { name: "Harry", Age: 25 }
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)

parsed = JSON.parse(`{"name":"Harry","Age":"25"}`)
console.log(parsed);



JSMarks = 100;
console.log(`JavaScript Marks  ${JSMarks}`)




