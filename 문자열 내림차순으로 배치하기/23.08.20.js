function descendingOrder(array) {
  return array.sort(function(a, b) {
      if(a < b) return 1;
      if(a > b) return -1;
      if(a === b) return 0;
  })
}

function solution(s) {
  var smallS = s.split("").filter((ss) => ss !== ss.toUpperCase());
  var bigS = s.split("").filter((ss) => ss === ss.toUpperCase());
  
  let answer = descendingOrder(smallS).join("") + descendingOrder(bigS).join("");
  
  return answer;
}