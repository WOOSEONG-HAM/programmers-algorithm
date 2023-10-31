function solution(sides) {
  let toiletries = sides.sort((a, b) => b - a);
  if(toiletries[0] < toiletries[1] + toiletries[2]){
      return 1
  } 
  return 2;
}