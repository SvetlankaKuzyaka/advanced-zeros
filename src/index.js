module.exports = function getZerosCount(number, base) {
  var multipliers = [];
  for (var i = 2; i <= Math.sqrt(base); i++) {
    var pair = [];
    var power = 0;
    if (base % i == 0) {
      while (base % i == 0) {power++; base /= i;};
      pair[0] = i; pair[1] = power; multipliers.push(pair);
    }
  }
  if (base != 1) multipliers.push([base, 1]);
  return Math.min.apply(null, multipliers.reduce(function(result, item) {
     var k = Math.floor(Math.log(number) / Math.log(item[0]));
     var sum = 0;
     for (var j = 1; j <= k; j++) {
       sum += Math.floor(number / Math.pow(item[0], j));
     };
     result.push(Math.floor(sum/item[1]));
     return result;
  }, []));
}
