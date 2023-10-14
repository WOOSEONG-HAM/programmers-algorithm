function solution(num_list) {
  let hapAnswer = num_list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let gupAnswer = num_list.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
  return gupAnswer < hapAnswer * hapAnswer ? 1 : 0;
}