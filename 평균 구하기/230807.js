function solution(arr) {
  var answer = 0;
  let sum = arr.reduce((result, number) => {
    result += number;
    return result;
  }, 0);
  answer = sum / arr.length;
  return answer;
}
