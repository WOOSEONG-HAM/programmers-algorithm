function solution(s){
  let pCount = 0;
  let yCount = 0;

  s.toUpperCase().split('').forEach((value, index) => {
      if(value === "P"){
          pCount += 1;
      } else if(value === "Y") {
          yCount += 1;
      }
  })

  return pCount === yCount ? true : false;
}