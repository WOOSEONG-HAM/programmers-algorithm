function solution(slice, n) {
  let count = Math.ceil(n/slice);
  return count < 1 ? count + 1 : count;
}