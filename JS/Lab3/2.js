function getSizeOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function getSqrt(value) {
  alert(`sqrt root of ${value} ${Math.sqrt(value)}`);
  return Math.sqrt(value);
}

function getCos(value) {
  return Math.cos((value * Math.PI) / 180).toFixed(1);
}
