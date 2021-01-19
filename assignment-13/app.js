//********************-------------------*****************  CHAPTER 31 - 34 *******************-------------------*****************//



// Task (01)

var date = new Date();
document.write(date)


// Task (02)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var a = new Date()
var b = a.getMonth()
document.write("current Month : " + month[a.getMonth()])




// Task(03)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
document.write("today is : " , days[b] + "<Br>")
var c = days[b].slice(0,3)
document.write("today is : " , c)

// Task (04)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
var c = days[a.getDay()]

if (c === "Sunday" || c === "Saturday" ){
        alert("its funday")
        
}
else if (c === "Tuesday"){
        alert("Today is " + '"' + c +  '"' + " So please Go to work")
        
}

//With Loop
var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
var c = days[a.getDay()]


for ( i = 0 ; i < c.length; i++ ){
    if (c === "Sunday" || c === "Saturday" ){
        alert("its funday")
        break
    }
    else if (c === "Tuesday"){
        alert("Today is " + '"' + c +  '"' + " So please Go to work")
        break
    }
}


// Task (05)

var a = new Date()
var b = a.getDate()

if (b >= 1 && b <= 15 ){
    alert("First fifteen days of month")
}
else if (b >= 16 && b <= 30 ){
    alert("Last fifteen days of month")
}



// Task (06)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = myDate.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + myDate + "<BR>")
document.write("Elapsed miliseconds since January 1,1970 : " + min * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + min * 365 * 24 * 60);


// Task (07)

var currTime = new Date()

currTime = currTime.getHours()
if (currTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}


// Task (08)

var laterDate = new Date("12/31/20")

document.write("Later Date: " + laterDate)



// Task (09)

var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff /(1000 *60 *60 *24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015" )




// Task (10)

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beinning of 2015"
)



// Task (11)

var checkTime = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var oldhund = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<BR> 1 hour ago, it was " + oldhund)



// Task (12)

var oneYr = new Date();
var oldyear = oneYr.setYear(oneYr.getFullYear() - 100);
var oldhund = new Date(oldyear)

document.write("Curent Date: " + oneYr + "<BR> 100 Year back, it was " + oldhund)



// Task (13)

var currentYear = new Date()
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy")
var userDate = new Date(getUserdate)
var diff = currentYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365)
var bdYear = currentYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))



// Task (14)

// a)

var name = "Hafiz Syed Ahsan Hussain";


// b)

var date = new Date()
var month = date.getMonth()


// c)

var unit = 410


// d)

var chargesUnit = 16


// e)

var netAmount = unit * chargesUnit


// f)

var dueDateCharge = 500


// g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name " + name + "<BR>")
document.write("Month " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount ) 



//********************-------------------*****************  CHAPTER 35 - 38 *******************-------------------*****************//



// Task (01)


function date() {
    document.write(new Date())
}
date()


// Task (02)

function num() {
    var firstname = prompt("enter your first name")
    var secondname = prompt("enter your second name")
    alert("greetings " + firstname + " " + secondname) 
}
num()


// Task (03)

function sum(a,b) {
    var s = a + b
    return s
}

var add = sum(+prompt("enter 1st sum"),+prompt("enter 1st sum"))

document.write("sum of addition is " + add)





// Task (04)

function calc(num1,opr,num2){
    if(opr === "+"){
        return (num1 + num2)
    }
    else if(opr === "-"){
        return (num1 - num2)
    } 
    else if(opr === "*"){
        return (num1 * num2)
    }
    
    else if (opr === "/"){
        return (num1 / num2)
    }
    else{
        return "Incorrect Operator!"
    }
}

var num1 = +prompt("enter 1st number")
var opr = prompt("enter operator")
var num2 = +prompt("enter 2nd number")
 

document.write(calc(num1,opr,num2))



// Task (05)

function square(a) {
    var b = Math.sqrt(a)
    document.write(b)
}

square(+prompt("enter number"))



// Task (06)

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
 var a =  factorialize(5);
 document.write(a)




// Task (07)

function num(start,end) { 
    for(i = start; i <= end ; i++){
     document.write(i + "<br>");   
    }
};

num(
+prompt("enter the starting point"),
+prompt("enter the ending point")
);



// Task (08)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



// Task (09)

(variable)
function areaRectangle(width, height) {
    return width * height
}
var a = areaRectangle(4, 5)
document.write(a )

(value)
function areaRectangle(width, height) {
    var a = width * height
    document.write(a)
}
areaRectangle(4, 5)


// Task (10)

function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')

    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}
isPalindrome(prompt("enter"))

// Task (11)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))


// Task (12)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// Task (13)
function count(str,word){
    var arr1 = str.split('')
    count = 0
    for(x=0;x<arr1.length;x++){
        if(arr1[x]===word){
            count += 1
        }
    }return count
    
}
var str=prompt("Enter a string");
var wrd=prompt("Enter a word to count from the string");
document.write(wrd+" occur "+count(str, wrd)+" times in '"+str+"'")



// Task (14)

function calcCircumference(radius){
    cir = 2*3.142*radius;
    return ("The circumference is "+cir);
}
function calcArea(radius){
    area = 3.142*(radius**2);
    return ("<br>The area is "+area);
}

document.write(calcCircumference(5));
document.write(calcArea(8));


//********************-------------------*****************  CHAPTER 39 - 42 *******************-------------------*****************//

//  Task 01
function power(a, b) {
    return a ** b;
}
alert(power(2, 3));

// Task 02
var enter_year = prompt('Enter a Year to check if it is Leap or Not: ')

function leapYear() {
    if ((enter_year % 4 == 0 && enter_year % 100 != 0) || enter_year % 400 == 0) {
        alert(`${enter_year} is a Leap Year`);
    } else {
        alert(`${enter_year} is not a Leap Year`);
    }
}
leapYear();

//  Task 03
var [a, b, c] = [4, 4, 4];

function valueOfS() {
    return (a + b + c) / 2;
}

function areaOfTriangle(s = valueOfS()) {
    area = s * (s - a) * (s - b) * (s - c);
    return area;
}
alert(areaOfTriangle());

//  Task 04
var subject01_marks = parseFloat(prompt('Enter Marks Of Subject 01: '));
var subject02_marks = parseFloat(prompt('Enter Marks Of Subject 02: '));
var subject03_marks = parseFloat(prompt('Enter Marks Of Subject 03: '));

function average_marks() {
    var average_marks = (subject01_marks + subject02_marks + subject03_marks) / 3;
    return average_marks;
}

function percentage() {
    var total_marks = 300;
    var obt_marks = subject01_marks + subject02_marks + subject03_marks;
    var percentage = (obt_marks / total_marks) * 100;
    return percentage.toFixed(2);
}

function mainFunc() {
    alert(`Percentage: ${percentage()}`);
    alert(`Average Marks: ${average_marks()}`);
}
mainFunc();

//  Task 05
function indexof(chr, str) {
    var str_arr = str.split("");
    return str_arr.indexOf(chr);
}
indexof('i', 'This is a string');

//  Task 06
function removeVowels(str) {
    if (str.length > 25) {
        alert("length of the string must be less then 25.");
    } else {
        str = str.replace(/[aeiou]/gi, "")
        alert(str);
    }
}
removeVowels("This is a Sentance");

//  Task 07
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

console.log(findOccurrences());

//   Task 08
var distanceInKm = parseFloat(prompt('Enter the distance between 2 cities in KiloMeter: '));

function kmToM() {
    return (`${distanceInKm} Kilometers in Meters are ${distanceInKm*1000}`);
}

function kmToFt() {
    return (`${distanceInKm} Kilometers in Feet are ${distanceInKm* 3281}`);
}

function kmToIn() {
    return (`${distanceInKm} Kilometers in Inches are ${distanceInKm*39370}`);
}

function kmToCm() {
    return (`${distanceInKm} Kilometers in Centimeter are ${distanceInKm*100000}`);
}
document.write(`${kmToM()}<br> ${kmToFt()} <br> ${kmToIn()} <br> ${kmToCm()}`);

//  Task 09
var working_hours = prompt('Please Enter Working Hours: ');
if (working_hours > 40) {
    over_time = working_hours - 40;
    over_time_pay = over_time * 12.00;
    alert(over_time_pay)
} else {
    alert("You have to work for more than 40 hours to get over time pay");
}

//  Task 10
var enter_amount = parseInt(prompt('Please Enter Amount You Want To Withdraw: '));
document.write(`<br> You Will Have ${Math.floor(enter_amount / 100)} Hundred notes, ${Math.floor((enter_amount % 100) / 50)} Fifty Notes and ${Math.floor((((enter_amount % 100) % 50) / 10))} ten Notes`)