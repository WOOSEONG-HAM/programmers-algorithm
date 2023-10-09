function solution(strArr) {
  var answer = [];
  answer = strArr.map((str, index) => {
      if(index%2 === 1) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  })
  return answer;
}