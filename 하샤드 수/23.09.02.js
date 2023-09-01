function solution(x) {
  var total = 0;
  
  total = String(x).split('').reduce((result, n) => {
      return result += Number(n)
  }, 0);
  
  if(x%total === 0) return true;
  
  return false;
}