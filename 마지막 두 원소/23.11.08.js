function solution(num_list) {
  let lastNumber = num_list[num_list.length - 1];
  let firstToLastNumber = num_list[num_list.length - 2];
  if(lastNumber > firstToLastNumber){
      num_list.push(lastNumber - firstToLastNumber);
  } else {
      num_list.push(lastNumber * 2); 
  }
  return num_list;
}