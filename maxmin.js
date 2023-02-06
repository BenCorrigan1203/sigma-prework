//function to find largest number in an array not using Math.max
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//function to find smallest number in an array not using Math.min
const findMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const minMax = (arr) => {
  let min = findMin(arr);
  let max = findMax(arr);
  return [min, max];
};
