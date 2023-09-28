function solution(my_string) {
  var answer = my_string.replace(/[^0-9]/g, "");
  answer = answer.split("").reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
  return answer;
}