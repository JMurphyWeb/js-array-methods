
// FOREACH FUNCTION
QUnit.test('forEach function with increment', function( assert ) {
  var original_array = [1,2,3,4];
  var new_array = [];

  forEach(original_array, function (element) {
    new_array.push(element + 1);
  });

  assert.deepEqual(new_array, [2,3,4,5], 'array of numbers is incremented');
  assert.deepEqual(original_array, [1,2,3,4], 'orginal array is not mutated');
});


QUnit.test('forEach function with object creation', function( assert ) {
  var original_array = [ 'Sam', 'Kat', 'Frank' ];
  var new_array = [];

  forEach(original_array, function (element) {
    new_array.push({ name: element });
  });
  var expected_users = [
    { name: 'Sam' },
    { name: 'Kat' },
    { name: 'Frank' }
  ]

  assert.deepEqual(new_array, expected_users, 'users are created from names');
  assert.deepEqual(original_array, [ 'Sam', 'Kat', 'Frank' ], 'orginal array is not mutated');
});



// MAP FUNCTION
QUnit.test('map function with increment', function( assert ) {
  var original_array = [1,2,3,4];
  var new_array = [];

  var incremented = map(original_array, function (element) {
    return element + 1;
  });

  assert.deepEqual(incremented, [2,3,4,5], 'array of numbers is incremented');
  assert.deepEqual(original_array, [1,2,3,4], 'orginal array is not mutated');
});



QUnit.test('map function with object creation', function( assert ) {
  var original_array = [ 'Sam', 'Kat', 'Frank' ];
  var mapped_users = map(original_array, function (element) {
    return { name: element };
  });
  var expected_mapped_users = [
    { name: 'Sam' },
    { name: 'Kat' },
    { name: 'Frank' }
  ]

  assert.deepEqual(mapped_users, expected_mapped_users, 'users are created from names');
  assert.deepEqual(original_array, [ 'Sam', 'Kat', 'Frank' ], 'orginal array is not mutated');
});




// FILTER FUNCTION
QUnit.test('filter function with numbers', function( assert ) {
  var original_array = [1,2,3,4];
  var new_array = [];

  var evens = filter(original_array, function (element) {
    return element % 2 === 0;
  });

  assert.deepEqual(evens, [2,4], 'array of numbers is filtered properly');
  assert.deepEqual(original_array, [1,2,3,4], 'orginal array is not mutated');
});



QUnit.test('filter function with object creation', function( assert ) {
  var original_array = [ 'Sam', 'Kat', 'Frank' ];
  var filtered_users = filter(original_array, function (element) {
    return element === 'Sam' || element === 'Kat';
  });

  assert.deepEqual(filtered_users, [ 'Sam', 'Kat' ] , 'users are filtered');
  assert.deepEqual(original_array, [ 'Sam', 'Kat', 'Frank' ], 'orginal array is not mutated');
});
