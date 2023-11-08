function solution(my_string) {
  var answer = '';
  answer = my_string.split("").map((str) => {
      if(str === str.toUpperCase()){
          return str.toLowerCase();
      } else {
          return str.toUpperCase();
      }
  }).join('');
  return answer;
}