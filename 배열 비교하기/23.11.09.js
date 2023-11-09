function solution(arr1, arr2) {
  if(arr1.length > arr2.length) return 1;
  if(arr1.length < arr2.length) return -1;
  
  let sum1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue,
      0,
  );
  let sum2 = arr2.reduce((accumulator, currentValue) => accumulator + currentValue,
      0,
  )
  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1 ;
}