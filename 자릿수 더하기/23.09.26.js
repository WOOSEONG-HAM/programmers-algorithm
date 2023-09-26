function solution(n) {
  var answer = 0;
  answer = String(n).split('').reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
  return answer;
}