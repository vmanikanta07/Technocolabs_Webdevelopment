//Temperature today accoring to scientist kelvin is 293kelvin
const kelvin = 293;


//Temperature in celsius is equal to Temperature in kelvin - 273
var celsius = kelvin - 273;

//Temperaturn in fahrenheit can be calculated by using this formula
var fahrenheit = celsius * (9/5) + 32;


//We used floor Method from Math object to remove decimal from the fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.")

var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log("The temperature is "+newton+" degrees Newton.")
