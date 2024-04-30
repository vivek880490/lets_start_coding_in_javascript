MAP IMPLEMENTATION
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

FILTER IMPLEMENTATION
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

REDUCE IMPLIMENTATION

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  
  return accumulator;
}

FOREACH IMPLEMENTATION

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

