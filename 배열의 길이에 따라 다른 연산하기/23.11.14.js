function solution(arr, n) {
  var answer = [];
  let isEven = arr.length % 2 === 0 ? true : false;
  answer = arr.map((value, index) => {
      if(isEven){
          if(index % 2 === 1) return value + n;  
          return value;
      } else {
          if(index % 2 === 0) return value + n;  
          return value;
      }
  })
  return answer;
}