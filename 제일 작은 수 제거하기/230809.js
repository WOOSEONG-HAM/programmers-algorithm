function solution(arr) {
  let answer = [];
  let minNum = Math.min(...arr);
  let minNumIndex = arr.findIndex((num) => num === minNum);
  answer = arr.filter((num, index) => index !== minNumIndex);
  if (answer.length === 0) answer.push(-1);

  return answer;
}
