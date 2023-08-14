function solution(n) {
  var answer = 0;
  let arr = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      arr.push(i);
    }
  }

  answer = arr.sort((a, b) => a - b);
  return answer[0];
}
