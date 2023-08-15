function solution(absolutes, signs) {
  var answer = 123456789;

  const answerArray = absolutes.map((num, index) => {
    if (signs[index !== 0]) {
      return 0;
    }
    return num * (signs[index] ? 1 : -1);
  });

  answer = answerArray.reduce((result, num) => {
    result += num;
    return result;
  }, 0);
  return answer;
}
