const _ = {
  clamp(num, lower, upper) {
    // define lower num
    const lowerNum = Math.max(num, lower);
    // define clamp num
    const clampNum = Math.min(lowerNum, upper)
    return clampNum
  },

  inRange(num, start, end) {
    // if no end value given, assign start to end and 0 to start
    if (end === undefined) {
      end = start;
      start = 0;
    }
    // if start is greater than end switch numbers
    if (start > end) {
      let storeEnd = end
      end = start;
      start = storeEnd;
    }
    // logic for num between start and end
    if (num >= start && num < end) {
      return true
    } else {
      return false
    }
  },

  words(string) {
    let newArr = [];
    // assign newArr and use split to look for space
    newArr = string.split(" ")
    return newArr
  },

  pad(string, length) {
    // padding at the start
   let startPaddDiff = Math.floor((length - string.length)/2);
   // padding at the end
   let endPaddDiff = length - string.length - startPaddDiff;
   // using numbers from start and end diff to spaces
   let padString = ' ';
   // if length is greater than string length, assign padding to each side
   if (length > string.length) {
     return padString.repeat(startPaddDiff) + string + padString.repeat(endPaddDiff)
   } else {
     return string
   }
 },

 has(object, keyValue) {
    // checks if value is direct property of object
   let hasValue = object.hasOwnProperty(keyValue)
   return hasValue;

},

invert(object) {
let newObj = [];
// iterate through keys
for (key in object) {
  //switch values of key and value
  newObj[object[key]] = key
}
  return newObj
},

findKey(object, predicate) {
  // iterate though each key/value pair
   for (let key in object) {
    if (predicate(object[key])) {
      // returns first key that has value truthy from predicate function
      return key;
    } else {
      // returns undefined if no values found
      return undefined
    }
  }
},

drop(arr, numDrop) {
  // if there no input for numDrop, assume 1 deletion
  if (numDrop === undefined) {
    numDrop = 1
  }
  // newArr delete the number input
  let newArr = arr.slice(numDrop)
  return newArr
},

dropWhile(arr, predicate) {
  // find the index of
  let findIndexOf = function(element, index) {
    return !predicate(element, index, arr)
  };
  // Iterate array until an element found causes predicate to return falsy
  let dropNum = arr.findIndex(findIndexOf)
  // use drop() to drop elements prior to the one that returned a falsy
  let droppedArr = this.drop(arr, dropNum);
  return droppedArr
},

chunk(arr, chunkNum) {
  // if chunkNum is not defined let chunkNum = 1
 if (chunkNum === undefined) {
   chunkNum = 1;
 }
 // new arr to push chunks in
 newArr = [];
 // while c < arr.length increment chunkNum
 for (let c = 0; c < arr.length; c+=chunkNum) {
  // slice(start of arr(c) to end of arr c plus chunkNum)
  let arrChunk = arr.slice(c, c+chunkNum);
  newArr.push(arrChunk)
 }
 return newArr
}

}



// Do not write or modify code below this line.
module.exports = _;
