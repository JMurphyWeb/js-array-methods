function forEach (array, fn) {
  for(var i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}


function map (array, fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i, array));
  }

  return newArray;
}



function filter (array, fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
