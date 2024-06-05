
//First Assignement Of JS.

document.write("<u><h1>Question # 01</h1></u> <h4>Input four numbers and display sum of these.</h4>");

let num1 = 50;
let num2 = 80;
let num3 = 150;
let num4 = 75;
let sum;

    sum = num1 + num2 + num3 + num4;
    document.write("Sum Of Four Numbers Is : ","<b>", sum,"</b>", ".");
document.write("<hr>"); 

//----------------End Of Question 01--------------------------------------------------------------.


document.write("<u><h1>Question # 02</h1></u> <h4>Input marks of five subjects of a student and calculate its average.</h4>");

let islamiat = 49;
let pakStudies = 47;
let urdu = 90;
let english = 85;
let math = 100;

let averageMarks;
let numbersOfSubjects = 5;

let totalMarks =  islamiat + pakStudies + urdu + english + math ; 
    
    averageMarks = totalMarks/numbersOfSubjects;
    document.write("Average Marks Of Five Subjects Are : <b>", averageMarks, "</b> .");
document.write("<hr>"); 

//----------------End Of Question 02--------------------------------------------------------------. 


document.write("<u><h1>Question # 03</h1></u> <h4>Input radius of circle and calculate area of circle.</h4>");

let radius = 11;
const Pi = 3.14;
let areaOfCircle;

    areaOfCircle = Pi*radius**2;
    document.write("Area Of Circle Is : <b>", areaOfCircle, " m<sup>2</sup>.</b>");
document.write("<hr>"); 

//----------------End Of Question 03--------------------------------------------------------------.    


document.write("<u><h1>Question # 04</h1></u> <h4>Take input from user about temperature in Celsius and display on screen the equivalent Fahrenheit temperature.</h4>");

let celcius = 35;
const division = 9/5;
const addition = 32;
let fahrenheit;


    fahrenheit = (celcius*division)+addition;
    document.write("Temperature In Fahrenheit Is : <b>", fahrenheit, " °F</b>");
document.write("<hr>"); 

///----------------End Of Question 04--------------------------------------------------------------.


document.write("<u><h1>Question # 05</h1></u> <h4>Calculate the pay of an employee, given the hours worked and rate per hour.</h4>");

let perHourRate = 600;
let workHour = 22;
let pay;
    
    pay = workHour * perHourRate;
    document.write("Your Pay Is : <b>", pay, "</b> .");
document.write("<hr>"); 

//----------------End Of Question 05--------------------------------------------------------------. 


document.write("<u><h1>Question # 06</h1></u> <h4>A painter wants to know the amount of paint needed to paint only the four walls. Each wall has same rectangular area. The chosen paint covers 100 square feet per gallon. </h4>");

let perGallonCost = 500;
let perGallonCoverArea = 100;
let perWallArea = 560;
let requiredGallonsPW = perWallArea / perGallonCoverArea    // required Gallons For One Wall.
let walls = 4;
let paintCost;


    paintCost = (walls * requiredGallonsPW) * perGallonCost;
    document.write("Paint Cost Of Four Wlls Is : <b>", paintCost, "</b> .");
document.write("<hr>"); 

//----------------End Of Question 06--------------------------------------------------------------.


document.write("<u><h1>Question # 07</h1></u> <h4>Bob would like to know what percentage of his income his rent is. Write a pseudo code which will calculate and print the required percentage.</h4>");

let income = 80000;
let rent = 15000;
let percentage;
const factor100 = 100;
    
    percentage = (rent/income) * factor100
    document.write("Rent Percentage Is : <b>", percentage, "</b> .");
document.write("<hr>"); 

//----------------End Of Question 07--------------------------------------------------------------.


document.write("<u><h1>Question # 08</h1></u> <h4>Write pseudo code to calculate circumference of circle.</h4>");

radius = 17;
const factor2 = 2;
let circumference;

    circumference = factor2 * Pi * radius;
    document.write("Circumference Of Circle Is : <b>", circumference, " m.</b>");
document.write("<hr>"); 

//----------------End Of Question 08--------------------------------------------------------------. 


document.write("<u><h1>Question # 09</h1></u> <h4>Write a program that input a number and prints a multiplication table for the entered number up to 10.</h4>");

let num = 2;
let staric = " * ";
let equal = " = ";

    
   

    document.write(num,staric,1,equal, "<b>", num * 1, "</b> <br>");
    document.write(num,staric,2,equal, "<b>", num * 2, "</b> <br>");
    document.write(num,staric,3,equal, "<b>", num * 3, "</b> <br>");
    document.write(num,staric,4,equal, "<b>", num * 4, "</b> <br>");
    document.write(num,staric,5,equal, "<b>", num * 5, "</b> <br>");
    document.write(num,staric,6,equal, "<b>", num * 6, "</b> <br>");
    document.write(num,staric,7,equal, "<b>", num * 7, "</b> <br>");
    document.write(num,staric,8,equal, "<b>", num * 8, "</b> <br>");
    document.write(num,staric,9,equal, "<b>", num * 9, "</b> <br>");
    document.write(num,staric,10,equal, "<b>", num * 10, "</b> <br>");


document.write("<hr>");

//----------------End Of Question 09--------------------------------------------------------------.

document.write("<u><h1>Question # 10</h1></u> <h4>Jim is going to replant his lawn. He would like to know how much the sod will cost, given cost of the sod per square feet and the length and width of two different lawn areas in feet. Write a solution to calculate this cost.</h4>");

let perSodCost = 250;
let lawn1Area = 15 * 15;
let lawn2Area = 10 * 5;
let requiredSod = lawn1Area + lawn2Area;
let replantCost;

    replantCost = requiredSod * perSodCost;
    document.write("Replant Cost Is : <b>", replantCost, "/- Rs.</b>");
document.write("<hr>"); 

//----------------End Of Question 10--------------------------------------------------------------. 









    




