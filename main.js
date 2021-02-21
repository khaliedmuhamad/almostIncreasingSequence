function almostIncreasingSequence(sequence) {
  let num = 0;
  for(let i = 0; i <= sequence.length ; i++ ) {
    if (sequence[i] <= sequence[i-1]) {
      num++;
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1] ) {
      num++;}
        }
      }
  return num <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
