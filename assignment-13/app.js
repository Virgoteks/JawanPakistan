// chapters31-34

// 1
var dateTime = new Date();
document.write(dateTime);

// 2
var monthName = ["January","February","March","April","May","June","July","August","September","October","Noverber","December"]
var now = new Date();
var theMonth = now.getMonth();
document.write("Current month: "+ monthName[theMonth]);

// 3
var a =new Date();
var b = a.toString();
var c= b.slice(0,3);
document.write(c);

// 4
var dayName = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var now = new Date();
var theDay = now.getDay();
document.write(dayName[theDay])


// 5
var a = new Date();
if(new Date <= 15){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}


// 6
var date = new Date();
var milliSecondsSinceJan1970 = date.getTime();
var minutesSinceJan1970 = milliSecondsSinceJan1970 / 60000;
document.write("Current Date: "+date+"</br>");
document.write("Elapsed milliseconds since January 1, 1970: "+milliSecondsSinceJan1970+"</br>");
document.write("Elapsed minutes since January 1, 1970: "+minutesSinceJan1970+"</br>");

// 7
var a = new Date();
var b = a.getHours();
if(b<=11){
    alert("It's AM")
}
else if(b>=12||b<=24){
    alert("It's PM")
}


// 8
var laterDate = new Date("december 31, 2020")
document.write("Later date: "+laterDate)


// 9
var ramadanDate = new Date("June 18, 2015");
var a = new Date();
var daysSinceRamadan = a - ramadanDate
document.write(daysSinceRamadan+" "+"days have passed since 1st Ramadan, 2015")


// 10
var a = new Date("December 05, 2015");
var b = new Date();
var c = b - a;
var d = c/6000
document.write(d)

// 11
let date_1=new Date();
document.write();
let date_2=new Date();
date_2.setHours(21);
document.write("Current Date :"+date_1+"<br />"+'1 Hour Ago it was '+date_2);


// 12
var a = new Date()
var b = new Date(100-c)
document.write("Today date is : "+a+"100 years back it was "+b)

// 13
var a = new Date();
var b = a.getTime();
var c = new Date(prompt("(month day, year)"))
var d = c.getTime()
var e = b-d;
var AgeFormulae = e/(1000*60*60*24*365)
var age = Math.floor(AgeFormulae)
document.write("Your current age is: "+age);

// 14
let date=new Date();
let name=("Fahad khan");
var month_name=new Array(12);
month_name[0]="January"
month_name[1]="February"
month_name[2]="March"
month_name[3]="April"
month_name[4]="May"
month_name[5]="June"
month_name[6]="July"
month_name[7]="August"
month_name[8]="September"
month_name[9]="October"
month_name[10]="November"
month_name[11]="December"
let month=(month_name[date.getMonth()]);
let units=(410);
let chargePerUnit=(16);
let NAP=(chargePerUnit*units);
let lateCharges=(350);
let GAPADD=(NAP+lateCharges);
document.write('<b>K-ELECTRIC BILL</b>'+"<br />"+"<br />")
document.write(`Customer Name :`+name+"<br />"+"Current Month : "+month+"<br />"+"Number of units : "+units+"<br />"+"Charge Per Units : "+chargePerUnit+"<br />"+"<br />"+"Net Amount Payable(With in due date) "+NAP+"<br />"+"Late Payment Surcharge : "+lateCharges+"<br />"+"Gross Amount Payable after Due Date : "+GAPADD);


// chapters35-38

// 1
function time() {
    var a = new Date();
    document.write(a)
}
time()

// 2
function greet(){
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    alert("Welcome Mr/Mrs "+firstName+" "+lastName)
}
greet()

// 3
function sum(){
    var a = +prompt("Enter first num");
    var b = +prompt("Enter second num");
    var c = a + b;
    alert(c);
}
sum();

// 4
function result(num1,num2,operator){
var calc = num1*num2/operator
document.write(calc)
    return calc;

}
result(21,34,20);


// 5
function square(num){
var a = num*num
document.write(a)
}
square(8)


// 6
function factorial(num){
    for(i=0;i>0||i<=num;i++){
       var facNum = i*num;
       document.write(facNum);
    }
}
factorial(8)


// 7
function count(){
    var a = +prompt("enter start number");
    var b = +prompt("enter end number");
var c = a + b;
document.write(c)
}
count();


// 8
function calcHypotenues(){
    var perpendicular = +prompt("Enter value of perpendicular")
    var base = +prompt("Enter value of base")
function calcSquare(){
   var perpendicularSquare = perpendicular*perpendicular
   var baseSquare = base*base
   var Hypotenues = perpendicularSquare+baseSquare
document.write("Hypotenuse is: "+Hypotenues)
}
calcSquare();
}
calcHypotenues();


// 9
function areaOfRectangle(width,height){
var area = width*height
alert(area)
}
areaOfRectangle(+prompt("Enter width: "),+prompt("Enter height: "))

// 10
function checkPalindrome(str) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

document.write(value);

// 11
function firstLetterUpperCase(str){
var array = str.split(' ');
var newArray = [];
for(var i = 0; i < array.length(); i++){
    newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1))
}
return newArray.join(' ');
}
document.write(firstLetterUpperCase(prompt("Enter any string")))


// 12
function longestWord(String){
var a = String.split(" ")
var word = 0;
var longest = 0;
for(var i = 0; i< a.length - 1; i++){
    if(longest < a[i].length){
        word = a[i]
        longest = a[i].length
    }
}
return word;
}
document.write(longestWord(prompt("Enter any string")))


// 13
function characterCount(str,letter){
    var letterCount = 0;
    for(var i =0; i < str.length; i++){
        if(str.charAt(i)==letter){
            letterCount += 1
        }
    }
    return letterCount;
}
document.write(characterCount("Hypotenuse","e"))

// 14
function calcArea(){
    var radius = +prompt("Enter value of radius")
var pie = 3.142
var area = pie*(radius*radius)
document.write("The area is: "+area)
}
function calcCircumference(){
    var radius = +prompt("Enter value of radius")
var pie = 3.142
    var circumference = 2*pie*radius
    document.write(circumference)
}
calcArea();
calcCircumference();


// chapters38-42

// 1
function power(a,b){
    var result = 1;
    if(b == undefined)
    b = 2;
    for(var i =1; i <=b; i++){
        result = result*a;
    }
    return result;
}
document.write(power(+prompt("Enter base value"),+prompt("enter power")))

// 2
function leapYear() {
    var anyYear = +prompt("Enter year")
    if (anyYear % 4 == 0) {
        alert(anyYear + " It's a leap year")
    }
    else {
        alert(anyYear + " It's not a leap year")

    }
}

// 3
function valueOfS(){
var a = +prompt("Enter value of a")
var b = +prompt("Enter value of b")
var c = +prompt("Enter value of c")
var sValue = (a+b+c)/2
function area(){
    var valueOfArea = sValue*(sValue-a)*(sValue-b)*(sValue-c);
document.write("Area of triangle is: "+valueOfArea);
}
area();
}
valueOfS();

// 4
function mainFunction() {
    var marksInSubject1 = +prompt("Marks in first subject")
    var marksInSubject2 = +prompt("Marks in second subject")
    var marksInSubject3 = +prompt("Marks in third subject")
    function average() {
        document.write("Average of subjects is: " + (marksInSubject1 + marksInSubject2 + marksInSubject3) / 3 + "</br>")
    }
    function percentage() {
        var totalMarks = 300
        var totalObtained = marksInSubject1 + marksInSubject2 + marksInSubject3
        document.write("Percentage: " + (totalObtained / totalMarks) * 100)
    }
    average();
    percentage();
}
mainFunction();

// 5
function findIndex(a) {
    return a.indexOf('development');
  }
  var result = findIndex(['e', 'mobile', 'development']);
  alert(result);

// 6
var str = prompt("ENTER ANY SENTENCE :");
string = str.replace( /[aeiou]/g, '' );
alert(string);

// 7
function countOccurrencesOfVovels() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
        default:
            document.write(str)

        }
}
countOccurrencesOfVovels();

// 8
function findKilometers(){
var kilometers= prompt("Enter Distance")
var meters = kilometers*1000;
var centimeters = kilometers * 1000 * 100;
var feet = kilometers * 3280.84;
var inches = kilometers * 39370.08;
document.write("Distance in Meters : " + meters + "<br>" + "Distance in Feet : " + feet + "<br>"+ "The distance in Inches : " + inches + "<br>" + "Distance in Centimeters : " + centimeters + "<br>" )
}
findKilometers();


// 9
function overTime()
{
var above40 = prompt("Enter the Hours for an employee worked above 40 hours : ")
var i=1;
 while(i <= time)
 {
  above40 = i*12;
  i++;
 }
 document.write("Overtime of this employee is Rs " + above40);
}
overTime();


// 10
function cashier()
{
    var amount = prompt("Enter Ammount")
    var calc100 = document.write("Notes of Rs. 100 : " + Math.trunc(amount/100)+"</br>")
    var calc50 = document.write("Notes of Rs. 50 : " + Math.trunc((amount % 100) /50)+"</br>" )
    var calc10 = document.write("Notes of Rs. 10 : " + Math.trunc((amount % 100) %50 /10) +"</br>")
}
   cashier();

