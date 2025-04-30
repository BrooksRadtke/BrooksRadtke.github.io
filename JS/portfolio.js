// "date" is object of Date() class
let date = new Date();

// Use "getYear()" method and stores 
// the returned value to "n"
let currentYear = date.getFullYear();

// Display the result
document.getElementById('copyright-year').innerHTML = "&copy;" + currentYear;