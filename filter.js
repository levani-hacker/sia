function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
      return number % 2 === 0;
    });
  }
  
  const sampleArray = [5, 2, 9, 1, 5, 6];
  const evenNumbers = filterEvenNumbers(sampleArray);
  
  console.log(evenNumbers);
  