function solution(arr) {
  var answer = [];
  answer = arr.map((num) => {
      if(num >= 50 && num % 2 === 0) {
          return num / 2;
      } else if(num < 50 && num % 2 === 1) {
          return num * 2;
      }
      return num;
  })
  return answer;
}