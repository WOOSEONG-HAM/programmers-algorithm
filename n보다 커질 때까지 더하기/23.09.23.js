function solution(numbers, n) {
  var answer = 0;
  numbers.forEach((number) => {
      if(answer <= n) answer += number;
  })
  return answer;
}