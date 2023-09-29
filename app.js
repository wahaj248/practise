// Chapter 1 (Alerts)

alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");
alert("You're learning JavaScript!");
alert("Hello! Welcome to the world of JavaScript!");




// Chapter 2 (Alerts)
var myFavoriteBook = "The Great Gatsby";
var favoriteColor;
favoriteColor = "Blue";
var teamName = "The Coding Wizards";
alert(teamName);
var bestMan = "Charlie";
bestMan = "John";



// Chapter 3 (Alerts)
var caseQty;
caseQty = 144;
var sum;
sum = 5 + 3; // or any other two numbers
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
var myNumber = 7;
myNumber = myNumber + 5; // or myNumber += 5;



// Chapter 4 (Alerts)
var productCost = 3.45;
var nameOfBand;
var totalAmount = 50;
var johnDoe;





// Chapter 5 (Alerts)
var num = 20 % 6;
var largeNum = 1000 * 2000;
var a = 10;
var b = 5;
var difference = a - b;
var myRemainder;
myRemainder = 20 % 7; // myRemainder will be 6
alert(5 * 3); // Displays 15



// Chapter 6 (Alerts)
x += 1; // or x++;
x--; // or x -= 1;
var x = 50;
var y = x++; // Here, y is assigned the current value of x, and then x is incremented.
// So, y will be 50.
var y = 50;
var z = --y; // Here, y is decremented first and then assigned to z.
// So, z will be 49.
var newNum = num--;
var originalValue = x++;

// Chapter 7 (Alerts)
var calculatedNum = 2 + (2 * 6); // calculatedNum will be 14
var calculatedNum = (2 + 2) * 6; // calculatedNum will be 24
var calculatedNum = (2 + 2) * (4 + 2); // calculatedNum will be 24
var calculatedNum = ((2 + 2) * 4) + 2; // calculatedNum will be 18
var cost = (2 + (2 * 4) + 10) * 4; // cost will be 56
var units = (2 + (2 * 4) + 10); // units will be 20
// To get 5 as the result, you can clarify with parentheses as follows:
var pressure = 4 / (2 * (4 - 2)); // pressure will be 1 (since 4 / (2 * 2) = 1)
// It seems there might be a misunderstanding, as it’s not possible to get 5 with these operations and numbers unless you modify the numbers or the operators.

// Chapter 8 (Alerts)
var num = "2" + "2"; // num will be "22" (as a string)
var message = "Hello," + " Dolly"; // Note the added space
alert(message); // It will alert: "Hello, Dolly"
alert("33" + 3); // It will alert: "333"
alert("Pakistan " + "Zindabad"); // It will alert: "Pakistan Zindabad"
var myString = "There are " + 10 + " apples."; // It will assign "There are 10 apples." to myString
var stringOne = "Hello";
var stringTwo = " World!";
var concatenatedString = stringOne + stringTwo; // It will assign "Hello World!" to concatenatedString

// Chapter 9 (Alerts)
var firstName = prompt("Enter first name");
var country = prompt("Country?", "China");
var yourName = prompt("Enter Your Name");
var userInput = prompt("Enter a string:", "Default String");
var message = "Please enter your age";
var defaultResponse = "25";
var userAge = prompt(message, defaultResponse);
var message = "Please enter your age";
var defaultResponse = "25";
var userAge = prompt(message, defaultResponse);

// Chapter 10 (Alerts)
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}
if (x === y) {
    var z = prompt("Please enter the value of z:");
}
if (x === y) {
    var z = prompt("Please enter the value of z:");
}
var x = 1; // or whatever value x is holding
if (x === 5) { // testing if x has a value of 5
    x = 10; // assigning a new value if condition is true
}

// Chapter 11 (Alerts)
if (x !== y) {
    // your code here
}
if (a >= b) {
    // your code here
}
if (variable !== 5) { // you can replace 5 with any number you want to compare
    variable = 10; // assigning a number to the variable
}
if (2 !== 3) { // this condition is true
    alert("Congratulations! The numbers are unequal.");
}
var firstName = prompt("Please enter your first name:");
if (firstName !== "John") { // you can replace John with any name you want to compare
    alert("No match");
}

    // Chapter 12 (Alerts)
    if (x >= y) {
        alert("x is greater than or equal to y");
    } else {
        alert("x is less than y");
    }
    var marks = prompt("Please enter your marks:");
    marks = parseFloat(marks); // Convert the input to a number
    
    if (marks >= 80) {
        alert("You have A grade. Percentage: " + marks + "%");
    } else if (marks >= 60) {
        alert("You have B grade. Percentage: " + marks + "%");
    } else if (marks >= 40) {
        alert("You have C grade. Percentage: " + marks + "%");
    } else {
        alert("You have failed. Percentage: " + marks + "%");
    }
    var a = 5; // Example value
    
    if (a === 10) {
        alert("a is 10");
    } else {
        alert("The correct value of a is " + a);
    }
    var city = prompt("Please enter a city:");

    if (city === "Karachi") {
        alert("It is Karachi!");
    } else if (city === "Lahore") {
        alert("It's Lahore!");
    } else {
        alert("The entered city is " + city);
    }
    
    // Chapter 13 (Alerts)
    if (a === b && c === d) {
        // your code here
    }
    if (a === b || c !== d) {
        // your code here
    }
    if ((name === "Hamza" || name === "Arsalan") && age < 60) {
        // your code here
    }
    var num1 = 10; // assign appropriate number
    var num2 = 20; // assign appropriate number
    
    if (num1 < num2 || num1 > num2) {
        alert("The condition is met!");
    }
    var firstName = "John"; // replace with your first name
    var lastName = "Doe"; // replace with your last name
    
    var inputFirstName = prompt("Please enter your first name:");
    var inputLastName = prompt("Please enter your last name:");
    
    if (firstName === inputFirstName && lastName === inputLastName) {
        alert("Your answers match the stored names!");
    }

    
    
// Chapter 14 (If statements nested)
var password = "userInput"; // Assign user input

if (password !== "") { // Check if password is not empty
    if (password.length <= 5) { // Nested if to check password length
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
if (a === 1 && c === "Max") {
    alert("OK");
}
var num1 = 5; // Assign any number
var num2 = 5; // Assign the same number

if (num1 === num2) { // Check if the first variable equals the second variable
    if (num1 <= num2) { // Nested if to check if the first variable is less than or equal to the second variable
        alert("Both conditions are met!");
    }
}

// Chapter 15 (Array I)
var emptyArray = [];
var singleElementArray = ["stringElement"];
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // Array indices start at 0, so index 2 corresponds to “j”
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alert(alphabet.length); // will alert 8
var myArray = ["firstElement"];
myArray[1] = "secondElement";
alert(myArray[1]);

// Chapter 16 (Array II)
var array = ["stringElement"];
array.push("newElement");
alert(array[1]); // will alert “newElement”
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
var myArray = ["firstElement"];
myArray.unshift("newFirstElement");
alert(myArray[0]);
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");




// Chapter 17-20 (for Loops)
for (var i = 0; i < 10; i++) {
    console.log(i);
}
for (var i = 0; i <= 12; i++) {
    console.log(i);
}
// Missing characters are: (;;)
for (var i = 0; i <= 4; i++) {
    console.log(i);
}
for (var count = 0; count < 100; count++) {
    console.log(count);
}
for (var i = 3; i > 0; i--) {
    console.log(i);
}
var arrayLength = array.length; // Replace 'array' with your array name
var flag = true; // Or false
var flag = true; // Or false
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}
var userNames = ["John", "Jane", "Doe"];
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write correct user name");
    }
}
var userNames = ["John", "Jane", "Doe"];
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write correct user name");
    }
}
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) alert("No match found");
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

// Chapter 21 (Changing Case)
var allLower = userInput.toLowerCase();
x = x.toLowerCase();
y = y.toUpperCase();
var newVar = someVar.toLowerCase();
var newArrayElement = array[0].toLowerCase();
alert(someVar.toUpperCase());
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


// Chapter 22 - 25 (Strings)
var length = someString.length;
var animal = "elephant";
var seg = animal.slice(2, 6); // "epha"
var lengthVar = someVar.length;
var lengthVar = someVar.length;
var indx = text.lastIndexOf("go");
if (someString.indexOf(indexNum) !== -1)
var character = "abcde".charAt(2); // "c"
var cha = text.charAt(9);
var x = str.charAt(str.length - 1);
var cha = input.charAt(4);
if (someVar.charAt(2) === 'a') 
var arr = [];
for (var i = 0; i < someVar.length; i++) {
    arr[i] = someVar.charAt(i);
}
var revisedReply = reply.replace("no", "yes");
var newStr = str.replace("1", "one");
var newStr = str.replace("1", "one");


// Chapter 26 (Rounding Numbers)
var roundedNumber = Math.round(someNumber);
var roundNum = Math.ceil(origNum);
var roundNum = Math.floor(origNum);
var newVar = Math.round(someVar);
var newVar = Math.round(.5 - .5); // 0


// Chapter 27 28 (Rounding Numbers)
var randomNum = Math.random();
var dice = Math.floor(Math.random() * 6) + 1;
var toss = Math.random() < 0.5 ? 'head' : 'tail';
function convert(str) {
    return parseInt(str);
}
var num = parseFloat("123.45");
if(!isNaN(parseFloat(string)) && isFinite(string))
var str = num.toString();
function convert(num) {
    return num.toString();
}
var num = parseInt("3.14");


    // Chapter 30 (Rounding Numbers)
    var num = Number(num.toFixed(2).toString());
    if (num.toFixed(2).toString().length > 4) 
    alert(num.toFixed(2).toString());
    alert(num.toFixed(2).toString());
    


    // Chapter 31-34 (Rounding Numbers)
    var dObj = new Date();
    var dStr = new Date().toString();
    var day = d.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    alert(dayNames[d.getDay()]);
    var extractedDate = {
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
        milliseconds: d.getMilliseconds()
    };
    var later = new Date(2020, 11, 31);
    var specificDate = new Date(1992, 1, 2);
    alert(new Date(1980, 0, 1).getTime());
    d.setFullYear(2023);
    function setToJanuary(date) {
        date.setMonth(0);
        return date;
    }
// You cannot directly set the day of the week, you have to calculate the difference and then add or subtract days.
d.setDate(d.getDate() + (desiredDayIndex - currentDayIndex));
function setMinutes(date) {
    var newMinutes = prompt("Enter new minutes:");
    date.setMinutes(newMinutes);
    return date;
}
function calculateAge() {
    var birthdate = new Date(prompt("Enter your birthdate (mm/dd/yyyy):"));
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
alert("Your age is: " + calculateAge());


// Chapter 35 - 37 (Functions)
function displayAlert() {
}
function askName() {
    var userName = prompt("Enter name");
}
function callTwoFunctions() {
    displayAlert();
    askName();
}
function displayName() {
    var name = prompt("Enter name");
    alert(name);
}
displayName();
function concat(a, b, c) {
    // Your code here
}
concat(var1, 'string', 123);
function concatenate(param1, param2) {
    var result = param1 + param2;
}
function multiply(a, b, c) {
    var result = a * b * c;
}
function average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}
function sum(a, b) {
    return a + b;
}
function average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}
var returnedValue = sum(5, 10);
function letterCount(word) {
    return word.length;
}
function setYear(date, year) {
    date.setFullYear(year);
}
function calculateAge(dateOfBirth) {
    var dob = new Date(dateOfBirth);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    return age;
}
function isPresent(word, array) {
    return array.includes(word);
}
function repeatLetter(str) {
    return str.repeat(10);
}
function reverseArray(arr) {
    return arr.reverse();
}
// Using the isPresent function
var presence = isPresent('haris', ['zaid','haris','raza','abubakar','hassan','hussain','fatima']);
console.log(presence); // will log true

// Using the reverseArray function
var reversed = reverseArray(['a','b','c','d','e']);
console.log(reversed); // will log ['e','d','c','b','a']



// Chapter 38 (Local vs. Global Variables)
function demonstrateLocalVariable() {
    var localVar = "I am a local variable"; // localVar is local to this function
    console.log(localVar); // Outputs: I am a local variable
}
demonstrateLocalVariable();
// console.log(localVar); // Uncommenting this will cause a ReferenceError as localVar is not defined in this scope
var globalVar = "I am a global variable"; // globalVar is a global variable

function accessGlobalVariable() {
    console.log(globalVar); // Outputs: I am a global variable
}
accessGlobalVariable();
var value = 'apple';

switch(value) {
    case 'apple':
        console.log('This is an apple.');
        break;
    case 'orange':
        console.log('This is an orange.');
        break;
    case 'banana':
        console.log('This is a banana.');
        break;
    default:
        console.log('Unknown fruit.');
}
var cityName = prompt("Please enter your city name: ");

switch(cityName.toLowerCase()) {
    case 'new york':
        alert('Hello, New Yorker!');
        break;
    case 'los angeles':
        alert('Hello, Angeleno!');
        break;
    case 'chicago':
        alert('Hello, Chicagoan!');
        break;
    // add more cases as needed
    default:
        alert('City not recognized!');
}


// Chapter 41, 42 (while loops, do…while loops)
var i = 0;
while (i < 2) {
    // doing nothing
    i++;
}

var i = 0;
do {
    // doing nothing
    i++;
} while (i < 2);
var animals = ["horse", "ox", "cow", "pig", "duck"];

// Using while loop
var index = 0;
while(index < animals.length) {
    if(animals[index] === "pig") {
        alert("Found it!");
        break;
    }
    index++;
}

// Using do…while loop
index = 0;
do {
    if(animals[index] === "pig") {
        alert("Found it!");
        break;
    }
    index++;
} while(index < animals.length);
// Using while loop
var num = 1;
while(num <= 10) {
    console.log(num);
    num++;
}

// Using do…while loop
num = 1;
do {
    console.log(num);
    num++;
} while(num <= 10);
// Using while loop
while(true) {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber);
        break;
    }
}

// Using do…while loop
do {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber);
        break;
    }
} while(true);
// Using while loop
while(true) {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber % 2 === 0 ? "Even" : "Odd");
        break;
    }
}

// Using do…while loop
do {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber % 2 === 0 ? "Even" : "Odd");
        break;
    }
} while(true);
// Using while loop
while(true) {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber % 2 === 0 ? "Even" : "Odd");
        break;
    }
}

// Using do…while loop
do {
    var inputNumber = prompt("Please enter a number:");
    if(inputNumber !== null) {
        console.log(inputNumber % 2 === 0 ? "Even" : "Odd");
        break;
    }
} while(true);
// Using while loop
var secretNumber = Math.floor(Math.random() * 100) + 1;
while(true) {
    var guess = prompt("Guess a number between 1 and 100:");
    if(guess == secretNumber) {
        alert("Congratulations! You guessed the right number.");
        break;
    } else {
        alert("Try again!");
    }
}

// Using do…while loop
var secretNumber = Math.floor(Math.random() * 100) + 1;
do {
    var guess = prompt("Guess a number between 1 and 100:");
    if(guess == secretNumber) {
        alert("Congratulations! You guessed the right number.");
        break;
    } else {
        alert("Try again!");
    }
} while(true);
// Using while loop
var timer = 10;
while(timer >= 0) {
    console.log(timer);
    timer--;
}

// Using do…while loop
timer = 10;
do {
    console.log(timer);
    timer--;
} while(timer >= 0);

// Chapter 46, 48 (Events)



// Chapter 49, 50 (Reading and Setting field values)
function printInput(){
    let inputVal = document.getElementById('myInput').value;
    console.log(inputVal);}
    function printCheckboxValue(){
        let isChecked = document.getElementById('myCheckbox').checked;
        console.log(isChecked);
      }
      function printSelectedValue(){
        let selectedValue = document.getElementById('mySelect').value;
        console.log(selectedValue);
      }
     
function printSelectedValue(){
  let selectedValue = document.getElementById('mySelect').value;
  console.log(selectedValue);
}
document.getElementById('regForm').addEventListener('submit', function(e){
    e.preventDefault(); // To prevent form submission and page reload
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
  
    // Perform your validation here, for example:
    if(password.length < 6){
      alert('Password must be at least 6 characters long.');
      return;
    }
    
    console.log('Form is valid:', { username, password, email });
  });

// chaptern 51

  function showMore(){
    document.getElementById('moreText').style.display = 'inline';
}

function searchText(word){
    let paragraph = document.getElementById('searchParagraph').innerText;
    if(paragraph.includes(word)) alert('Word Found!');
    else alert('Word Not Found!');
}
function findLongestWord(){
    let paragraph = document.getElementById('paragraph').innerText;
    let words = paragraph.split(' ');
    let longestWord = '';
    words.forEach(word => {
        if(word.length > longestWord.length) longestWord = word;
    });
    alert(longestWord);
}
function findLongestWord(){
    let paragraph = document.getElementById('paragraph').innerText;
    let words = paragraph.split(' ');
    let longestWord = '';
    words.forEach(word => {
        if(word.length > longestWord.length) longestWord = word;
    });
    alert(longestWord);
}
function setText(){
    let textFieldValue = document.getElementById('textField').value;
    if(textFieldValue.trim()) document.getElementById('paragraph').innerText = textFieldValue;
}function setText(specificWord){
    let textFieldValue = document.getElementById('textField').value;
    if(textFieldValue === specificWord) document.getElementById('paragraph').innerText = textFieldValue;
}





  
  
  
  
  


