function solution(arr, k) {
  var answer = [];
  answer = arr.map((number) => {
      if(k%2===0){
          return number + k;
      } else {
       return number * k;   
      }
  });
  return answer;
}