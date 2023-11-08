function solution(num_list) {
  var answer1 = 0;
  var answer2 = 0;
  num_list.forEach((num, index) => {
      if(index%2 === 1){
          answer1 += num;
      } else {
          answer2 += num;
      }
  })
  return answer1 > answer2 ? answer1 : answer2;
}