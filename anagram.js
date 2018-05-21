'use strict';

const HashMap = require('./hashmaps');

// Anagram grouping
// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

//compare the hash values of each word. hash will be the key and word will be the value in an arrary hash1 = ['east', 'teas', 'eats'], hash2 = ['acre', 'race']
//map words into an array (could split, sort and join to compare)



function anagram(arr) {
  let hash = new HashMap;
  
  for (let i=0; i<arr.length; i++) {
  // arr.map(word => {
    let key= arr[i].split('')
      .sort()
      .join('');
    try{
      let val = hash.get(key);
      val.push(arr[i]);
    } catch (err) {
      hash.set(key, [arr[i]]);
    }
  }
  // console.log(hash);
  //need to return an array of the word arrays
  let arrayResult;

  // for (let i = 0; i < hash._slots.length; i++) {
  //   console.log(hash._slots[i]);
  //creates arr of obj
  arrayResult = hash._slots
    .filter(_slot => _slot !== undefined)
    .map(_slot => _slot.value);
    console.log(arrayResult);
  return arrayResult; 
  // }
}

//hash._slots.value[i] = arr
//map 

// HashMap {
//   length: 3,
//   _slots:
//    [ { key: 'acer', value: [Array], deleted: false },
//      <1 empty item>, //['acre', 'race']
//      { key: 'aest', value: [Array], deleted: false },
//      <3 empty items>,
//      { key: 'acrs', value: [Array], deleted: false } ],
//   _capacity: 8,
//   _deleted: 0 }

console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));