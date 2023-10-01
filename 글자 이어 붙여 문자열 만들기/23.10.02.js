function solution(my_string, index_list) {
  let answer = '';
  let string_list = my_string.split("");
  index_list.forEach((index) => {
      answer += string_list[index];
  })
  return answer;
}