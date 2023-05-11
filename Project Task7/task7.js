//My current age in human life
var myAge = 20;

//this 2 represents the first 2 years of the dog's life which will be equal to 10.5 dog years each
var earlyYears = 2;
earlyYears = 2 * 10.5;

//After first two years these will be the remaining years of life
var laterYears = myAge - 2;

//After first two years then remaining each year will count as 4 dog years each
laterYears = laterYears * 4;

console.log(earlyYears,laterYears);

//My total age in dog years will be equal to early years + later years
var myAgeInDogYears = earlyYears + laterYears;


//The toLowerCase method return a string with all lowercase letters
var myName = "MANIKANTA".toLowerCase();


//In this line of code we used console.log() to log the messaage between the parenthesis into the console
console.log("My name is "+myName+". I am "+myAge+" years old in human years which is "+myAgeInDogYears+" years old in dog years.")
