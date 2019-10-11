/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    // Make a regex to check for letters
    const regex = /[a-zA-Z]/gi;
    // Make sure there is a number present
    if(!/\d/.test(input))
      // If not return 1
      return 1;
    // Split the input at the first letter
    let inputNumber = input.slice(0, regex.exec(input).index);
    // Check to see if there is a fraction
    if(/\//g.test(inputNumber)){
      // Check to see if there is more than 1 fraction
      if(inputNumber.match(/\//g).length > 1)
        // If there is return an error
        return 'invalid number';
      // Get the numerator
      let a = inputNumber.slice(0, /\//g.exec(inputNumber).index);
      // Get the denominator
      let b = inputNumber.slice(/\//g.exec(inputNumber).index + 1, inputNumber.length);
      // Return the decimal of the fraction.
      return parseFloat(a) / parseFloat(b);
    }
    // If there isn't a fraction just return the number as a float.
    return parseFloat(inputNumber); 
  };
  
  this.getUnit = function(input) {
    // Regex for letters
    const regex = /[a-zA-Z]/gi;
    // Accepted values for units
    const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    // Split at the first letter to get the unit
    let unit = input.slice(regex.exec(input).index, input.length);
    // If the array includes the inputted value return else return an error.
    return validUnits.includes(unit) ? unit : 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    // Array of valid units
    const inputUnit = ['gal','l','mi','km','lbs','kg'];
    // Index matched array of corresponding conversions
    const outputUnit = ['l','gal','km','mi','kg','lbs'];
    // Return the output corresponding to the input's index
    return outputUnit[inputUnit.indexOf(initUnit.toLowerCase())];
  };
  // Method as above
  this.spellOutUnit = function(unit) {
    var inputUnit = ['gal','l','km','mi','kg','lbs'];
    var outputWord = ['gallons','litres','kilometres','miles','kilograms','pounds'];
    return outputWord[inputUnit.indexOf(unit.toLowerCase())];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit.toLowerCase()){
      case 'gal':
        return parseFloat(initNum * galToL);
      case 'l':
        return parseFloat(initNum / galToL);
      case 'mi':
        return parseFloat(initNum * miToKm);
      case 'km':
        return parseFloat(initNum / miToKm);
      case 'lbs':
        return parseFloat(initNum * lbsToKg);
      case 'kg':
        return parseFloat(initNum / lbsToKg);
      default:
        'There has been an error';
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    return `${initNum} ${this.spellOutUnit(initUnit)} is equal to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
