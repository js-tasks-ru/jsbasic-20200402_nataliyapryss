function getMinMax(str) {
  let splitSeparation= str.split(/[\s,]+/);
  let arrNum = splitSeparation.map((string) => parseFloat(string));
  let filterArr = arrNum.filter((num) => isFinite(num));
  let max = Math.max(...filterArr);
  let min = Math.min(...filterArr);
  let minMaxObject = {};
  minMaxObject.max = max;
  minMaxObject.min = min;
  return minMaxObject;
}
