// alert("Error please enter a valid password");

// alert("Welcome to js land.. \n  Happy coding" );

// alert("Welcome to js land");
// alert("Happy coding....");

// alert("Hell.... I can run trough my web browser's console");

// alert("Jhon Doe");
// alert(  "15 Year old");
// alert("Certified Mobile Application Development");

// alert("Pizza \n Pizz \n Piz \n Pi \n p");

// alert("My email address is example@example" );
// alert("I'm trying to learn from the Boook A smarter \n way to learn");
// alert("             @%$#&         ");

// alert("I'm 15 years old ");
// alert("You have visited this site 14 times")


// var v= +prompt("Visitor name");

// var Product=+prompt ("Product's title");

// var Quantaty= +prompt("XYZ");

// var a = +prompt("Enter your first value");
// var b = +prompt("Enter your second value");
// var total =  a + b; m
// document.write( "The answer is" + total  )

// var a = +prompt("Enter your first value");
// var b = +prompt("Enter your second value");
// var total =  a * b 
// document.write( "The answer is" + total  )

// var a = +prompt("Enter your first value");
// var b = +prompt("Enter your second value");
// var total =  a - b 
// document.write( "The answer is" + total  );

// var a = +prompt("Enter your first value");
// var b = +prompt("Enter your second value");
// var total =  a / b 
// document.write( "The answer is" + total  )



// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var x = +prompt("Enter number: ");
var y = +prompt("Enter another number: ");
 z = x+y;
document.write("Sum of "+a+ " and "+b+ " is "+c );

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var a= +prompt("Enter number: ");
var b = +prompt("Enter another number: ");
 c = a-b;
document.write("Subtraction of "+x+ " and "+b+ " is "+c );

z = x*y;
document.write("<br>"+"Multiplication of "+a+ " and "+b+ " is "+c );

z = x/y;
document.write("<br>"+"Division of "+a+ " and "+b+ " is "+zc );

c = a%b;
document.write("<br>"+"Modulus of "+a+ " and "+b+ " is "+c );


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
// after addition is: 13”. 
// i. Decrement the variable.
//  j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3. 
//   l. Output : “The remainder is : 0”. 

var a;
document.write("Value after variable declaration is: "+a);
a = 5;
document.write("<br>"+"Initial value: "+a);
++a;
document.write("<br>"+"Value after increment is: "+a);
a = a+7;
document.write("<br>"+"Value after addition is: "+a);
--a;
document.write("<br>"+"Value after decrement is: "+a);
a=a%3;
document.write("<br>"+"The remainder is : "+a);


// 4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var x = 600;
var y = x*5;
document.write("Total cost to buy 5 tickets to a movie is "+y+"PKR");


// 5: Write a script to display multiplication table of any number in your browser.
document.write("Table of 4"+"<br>")
for (var i=1; i<11; i++){
    document.write("4"+" x "+i+" =  " +4*i+"<br>");
}


// 6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a:  Store a Celsius temperature into a variable.
// b: Convert it to Fahrenheit & output “NNoC is NNoF”.
// c: Now store a Fahrenheit temperature into a variable.
// d: Convert it to Celsius & output “NNoF is NNoC”. 

var c=25;
fahrenheit=(c*9/5)+32;
document.write(c+"°C is "+fahrenheit+"°F"+"<br>" )
var f= 70;
celsius=(f-32)*5/9;
document.write(f+"°F is "+celsius+"°C" );


// 7:  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a: Price of item 1 
// b: Price of item 2 
// c: Ordered quantity of item 1 
// d: Ordered Quantity of item 2 
// e: Shipping charges 
// Compute the total cost & show the receipt in your browser. 
var a = 650;
var b = 100;
var q1=3;
var q2=7;
var c=100;
total = a*q1+b*q2+c;
document.write("Shopping Cart".bold()+"<br><br>");
document.write("Price of item 1 is "+a+"<br>");
document.write("Quantity of item 1 "+q1+"<br>");
document.write("Price of item 2 is "+b+"<br>");
document.write("Quantity of item 2 "+q2+"<br>");

document.write("<br>"+"Total cost of your order is "+total);


// 8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
var totalMarks=980;
var marks=804;
percentage = (marks/totalMarks)*100;
document.write("Marks Sheet".bold()+"<br><br><br>");
document.write("Total marks: "+totalMarks+"<br>");
document.write("Marks obtained: "+marks+"<br>");
document.write("Percentage: "+percentage+"<br>");


// 9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var x=10;
var y=25;
total= x*104.80 + y*28;
document.write("Currency in PKR".bold()+"<br><br><br>");
document.write("Total Currency in PKR: "+total );


// 10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a: Add 5 
// b: Multiply by 10 
// c: Divide the result by 2 
// Perform all calculations in a single expression 
var a =+prompt("Enter any number: ");
a=((a+5)*10)/2;
document.write(a);


// 11: The Age Calculator: Forgot how old someone is? Calculate it! 
// a: Store the current year in a variable. 
// b: Store their birth year in a variable. 
// c: Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
var currentYear=2020;
var birthYear=+prompt("Enter your birth year" );
age=currentYear-birthYear;
document.write("Age Calculator".bold()+"<br><br><br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age: "+age+"<br>");


// 12: The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable
// b: Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var r=20;
circumference=2*3.142*r;
area=3.142*(r*r);
document.write("The Geometrizer".bold()+"<br><br><br>");
document.write("Radius of a circle: "+r+"<br>");
document.write("The circumference is: "+circumference+"<br>");
document.write("The area is:" +area+"<br>");


// 13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a: Store your favorite snack into a variable 
// b: Store your current age into a variable. 
// c: Store a maximum age into a variable. 
// d: Store an estimated amount per day (as a number). 
// e: Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

var snack= "chocolate chip";
var currentAge=15;
var maxAge=65;
var snackDay=3;
totalEat=(maxAge-currentAge)*3;
document.write("The Lifetime Supply Calculator".bold()+"<br><br><br>");
document.write("Favourite Snack: "+snack+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+snackDay+"<br>");

document.write("You will need "+totalEat+" to last you until the ripe old age of "+maxAge);






// chapter 6-9
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 


var a = 10;
document.write("The value of a is "+a+"<br>");
var b = ++a;
document.write("The value of ++a is "+b+"<br>");
document.write("Now the value of a is "+a+"<br>");
var c= a++;
document.write("The value of a++ is "+c+"<br>");
document.write("Now the value of a is "+a+"<br>");
var d = --a;
document.write("The value of --a is "+d+"<br>");
document.write("Now the value of a is "+a+"<br>");
var e = a--;
document.write("The value of a-- is "+e+"<br>");
document.write("Now the value of a is "+a+"<br>");


//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 



var a = 2;
var b = 1;  
  //    --a  1   
  //    --a - --b = 1 -  0 
  //    --a - --b + ++b = 1 - 0 +  1
  //    --a - --b + ++b + b-- =1 - 0 + 1 + 1

document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
var result = --a - --b + ++b + b--;
document.write("result is "+result+"<br>");
//3. Write a program that takes input a name from user & greet the user. 
var f = prompt("Enter your name");
console.log("WElcome to the page",+" "+f);

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 


var g =+prompt("Enter any number"); 
var h = +prompt("Enter any number");

for (var h =1;h<=10;h++){
    document.write("5"+"x"+h+"="+5*h+"<br>")
}
var j= g * h;
console.log(+""+j);

// 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var x =prompt("Enter subject1: ");
var y =prompt("Enter subject2: ");
var z =prompt("Enter subject3: ");
var total=100;
var obtained1=+prompt("Enter obtained mark in subject1: ");
var obtained2=+prompt("Enter obtained mark in subject2: ");
var obtained3=+prompt("Enter obtained mark in subject3: ");
var totalMarks=(obtained1+obtained2+obtained3);
var percentage=(totalMarks/300)*100;

var percentage1=(obtained1/100)*100;
var percentage2=(obtained2/100)*100;
var percentage3=(obtained3/100)*100;

document.write("Subject  TotalMarks  ObtainedMarks  Percentage".bold()+"<br>");
document.write("<br>"+x+ " " +"         100       "+ "  " + obtained1+"  "+ percentage1+"%");
document.write("<br>"+y+ "  " +"         100       "+ "  " + obtained2+"  "+ percentage2+"%");
document.write("<br>"+z+ "  " +"         100        "+ "  " + obtained3+"  "+ percentage3+"%");
document.write("<br>"+" "+ "  " +"       300         "+ "  " + totalMarks+"  "+percentage+"%");







// Assignment 9-11
// 1-Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights” 
var city = prompt("Enter city name:");
if (city == "Karachi"){
    alert("welcome to the City of Lights!")
}
else{
    alert()
}


// 2-Write a program to take “gender” as input from user.
//  If the user is male, give the message:  Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender:")
if (gender == "male"){
    alert("Good Morning Sir.")

}
else if (gender == "female"){
    alert("Good Morning Ma’am.")
}
else{
    alert()
}


// 3- Write a program to take input color
//  of road traffic signal from the user &
//   show the message according to this table: 

var colour = prompt("Color of Road Traffic Signal:")
if (colour == "red"){
    alert("Must Stop.")

}
else if (colour == "yellow"){
    alert("Ready to move")
}
else if(colour == "green"){
    alert("Move now ")
}
else{
    alert()
}



// 4-Write a program to take input remaining fuel in car (in litres)
//  from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car” 
 
var litres = prompt("Remaining fuel in car(in litres):")
if (litres < 0.25){
    alert("Please refill the fuel in your car")

}
else{
    alert()
}



// 5-Run this script, & check whether alert message would be displayed
//  or not. Record the outputs. 

// (a)
var a = 4;
 if (++a === 5){
      alert("given condition for variable a is true");
 }
//  output = given condition for variable a is true

// (b)
var b = 82;
 if (b++ === 83){
    alert("given condition for variable b is true");
 } 
//  output =  none

// (c)
var c = 12;
 if (c++ === 13){
      alert("condition 1 is true");
     } 
if (c === 13){
     alert("condition 2 is true");
     } 
if (++c < 14){
     alert("condition 3 is true"); 
    } 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
// output = condition 2 is true
// output = condition 4 is true

// (d)
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
 
// output = The cost equals

// (e)
if (true){ 
    alert("True");
} 
if (false){ 
    alert("False");
} 
// output = True 

// (f)
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
} 
// output = none 


// 6-Write a program to take input the marks obtained in three subjects
//  & total marks. Compute & show the resulting percentage on your page.
//  Take percentage & compute grade as per following table:

var maths = +prompt("Enter Maths marks:");
var english = +prompt("Enter English marks:");
var science = +prompt("Enter Science marks:");
var total = 300;
var MarksObtained = (maths + english + science);
var percent = (MarksObtained/total)*(100)
if (percent>=80 && percent <=100 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A-one"+ "\n Remarks : Excellent")
}
else if (percent>=70 && percent <=80 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A"+ "\n Remarks : Good"   );
}
else if (percent>=60 && percent <=70 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : B"+ "\n Remarks : You need to Improve"   );
}
else if (percent<=60){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : C"+ "\n Remarks : Fail"   );
}
else{
    alert()
}


// 7-Store a secret number (ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”.
//  b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var secret= Math.ceil(Math.random() * 10);

var guess = +prompt("Guess the Number:");
var guess = parseInt()
 
if (guess == secret) {
   alert('Congratulations!\nThe number was ' + secret)
}
else{
    alert("Try again!")
}
 

// 8-Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3. 

var num = +prompt("Enter Number to check if divisible by 3:");
if (num%3==0){
    alert("The number" + num + "is divisible by 3")
}
else{
    alert("The number" + num + "is not divisible by 3")
}


// 9-Write a program that checks whether the given input is an even number or an odd number. 

var num = +prompt("Enter any number:")
if (num%2==0){
    alert("You have entered an Even Number")
}
else{
    alert("You have entered an Odd Number")
}


// 10-Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.”
//  b. T > 30 then “The Weather today is Normal.” 
//  c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.” 

var T = +prompt("Enter Today's Temperature");
if (T > 40){
    alert("It is too hot outside.")
}
else if(T >30 && T <=40){
    alert("The Weather today is Normal.")
    
}
else if(T >20 && T <=30){
    alert("The Weather today is cool.")
    
}
else if(T >10 && T <=20){
    alert("OMG! Today’s weather is so Cool.")
    
}
else{
    alert("Shit! I am freezing bro.")
}

// 11-Write a program to create a calculator for +,-,*, / & % using if statements.
// Take the following input: 
// a. First number
// b. Second number 
// c. Operation (+, -, *, /, %)
//  Compute & show the calculated result to user. 

var x= +prompt("Enter First Value:");
var y = +prompt("Enter Second Value:");
var z = prompt("Choose any of the operators : + , - , / , x , %")
if ( z == "+"){
    alert("The answer is =" + (x + y));
} 
else if( z == "-"){
    alert("The answer is =" + (x - y));
    
}
else if( z == "x"){
    alert("The answer is =" + (x * y));
    
}
else if( z == "/"){
    alert("The answer is =" + (x / y));
    
}
else if( z == "%"){
    alert("The answer is =" + (x % y));
    
}
else{
    alert("Invalid Operator. Please try again.")
}





// TASK 1   
var strings = 'this iS a TeSt 523 Now!';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            alert ('lower case true');
        }
    }
    i++;
}

// TASK 2

// var c= prompt("enter 1st digit");
// var d= prompt("enter 2nd digit digit");

// function largest(a, b) {
// 	if(a > b)
// 		return a;
// 	else if(a === b)
// 		return 0;
// 	else
// 		return b;
// }

// console.log(largest(c,d));

// Task 3
// var c= prompt("enter number");


// function test(a) {
// 	if(a > 0)
// 		alert ("+ve");
// 	else if(a == 0)
// 		alert("0");
// 	else
// 		alert("-ve");
// }

// console.log(test(c));

//Task 4
// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = prompt("Enter a letter");

// if (isVowel(char)) {
// 	console.log(char + " is a vowel");
// } else {
// 	console.log(char + " is not a vowel");
// }


//Task 5
// var saved = "Cool-Bingo"
// function checkPassword(saved) { 
//     var password1 = prompt("enter password"); 

//     // If password not entered 
//     if (password1 == '') 
//         alert ("Please enter Password"); 
          
          
//     // If Not same return False.     
//     else if (password1 != saved) { 
//         alert ("\nPassword did not match: Please try again...");
//     } 

//     // If same return True. 
//     else{ 
//         alert("Password Match") 
//     } 
// }
// console.log(checkPassword(saved));

//Task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)} 
// else{
// greeting = "Good evening";
// alert(greeting) }

// Task 7
// var dt = new Date();
// var hours = dt.getHours() ; // gives the value in 24 hours format
// alert(hours);
// var AmOrPm = hours >= 12 ? 'pm' : 'am';
// hours = (hours % 12) || 12;
// var minutes = dt.getMinutes() ;
// var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm; 
// alert(finalTime);// final time