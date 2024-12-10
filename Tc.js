document.getElementById('convertButton').addEventListener('click', function () {
    const tempInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(tempInput) || tempInput === '') {
        alert('Please enter a valid number for the temperature.');
        return;
    }

    const temperature = parseFloat(tempInput);
    let result;

    if (inputUnit === 'Celsius') {
        result = `
            Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F<br>
            Kelvin: ${(temperature + 273.15).toFixed(2)} K
        `;
    } else if (inputUnit === 'Fahrenheit') {
        result = `
            Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C<br>
            Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K
        `;
    } else if (inputUnit === 'Kelvin') {
        result = `
            Celsius: ${(temperature - 273.15).toFixed(2)} °C<br>
            Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F
        `;
    }

    document.getElementById('output').innerHTML = result;
});
