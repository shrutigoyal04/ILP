// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit} °F`);
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C`);
}

celsiusToFahrenheit(60);       
fahrenheitToCelsius(45);      