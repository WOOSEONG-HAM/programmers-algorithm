function solution(n) {
  var answer = 0;
  var j = n % 2 === 0 ? 2 : 1;
  for(var i=j; i<=n; i=i+2){
      if(j===1){
          answer = answer + i;
      } else {
          answer = answer + (i * i);
      }
  }
  return answer;
}