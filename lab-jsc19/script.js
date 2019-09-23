function getA(a) {
  var a = 10;
  return function(b) {
    return a;
  }
}

var b = getA();

console.log(b());
