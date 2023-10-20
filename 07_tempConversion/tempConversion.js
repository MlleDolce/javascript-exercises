const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  return cTemp = Math.round(cTemp * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * 9/5 + 32;
  return fTemp = Math.round(fTemp * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
