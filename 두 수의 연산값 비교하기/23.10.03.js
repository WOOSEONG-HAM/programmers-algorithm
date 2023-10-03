function solution(a, b) {
  let aResult = Number(String(a) + String(b));
  let bResult = 2 * a * b;
  
  if(aResult > bResult) return aResult;
  
  return bResult;
}