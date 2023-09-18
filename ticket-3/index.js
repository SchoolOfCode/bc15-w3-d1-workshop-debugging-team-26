function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}

console.log(countNumberOfNinesInNumber("1115.12578469"));
//countNumberOfNinesInNumber(19);