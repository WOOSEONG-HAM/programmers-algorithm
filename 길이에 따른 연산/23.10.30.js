function solution(num_list) {
  var answer = num_list.reduce((accumulator, currentValue) => {
      if(num_list.length > 10) {
          return accumulator + currentValue;
      } else {
          return accumulator * currentValue;
      }
  }, num_list.length > 10 ? 0 : 1);
  return answer;
}