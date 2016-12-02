function chunkArrayInGroups(arr, size) {
  // first solution
  /*var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % size !== size - 1)
      arr1.push(arr[i]);
    else {
      arr1.push(arr[i]);
      arr2.push(arr1);
    }
    
  }
  if (arr1 !== 0)
    arr2.push(arr1);
  return arr2;
}*/
  // second solution
  /*arr = arr.slice();
  var finalAnswer = [];
  for (var i = 0, lenGth = arr.length; i < lenGth; i+=size) {
    finalAnswer.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return finalAnswer;
}*/
  // 3 solution
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);