function solution(a, b) {
  let answer = 0;
  let bigNum = 0;
  let smallNum = 0;
  
  if(a > b) {
      bigNum = a;
      smallNum = b;
  } else {
      bigNum = b;
      smallNum = a;
  }
  
  for(let i = smallNum; i <= bigNum; i++){
      answer += i;
  }
  
  return answer;
}