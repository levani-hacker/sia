function sortNumbers(numbers) {

    return numbers.sort(function(a, b) {
      return a - b;
    });
  }
  
  const sampleArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortNumbers(sampleArray);
  console.log(sortedArray);
  