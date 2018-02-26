module.exports = function getZerosCount(number) {
  var rez = 0;
  var number;
  while (number > 0) {
    number = Math.floor(number / 5);
    rez += number;
  }
  return rez;
}

