function totalWordCount() {
  var str ="My life is happy"
  var totalSoFar = 0;

  for (var i = 0; i < str.length; i++)
    if (str[i] === " ") { 
     totalSoFar = totalSoFar+1;
  }
  totalSoFar = totalSoFar+ 1; 
  return totalSoFar
}

console.log(totalWordCount());