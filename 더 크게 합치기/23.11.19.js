function solution(a, b) {
  const at = String(a) + String(b);
  const bt = String(b) + String(a);
  
  return at >= bt ? Number(at) : Number(bt);
}