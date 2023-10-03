function solution(arr, delete_list) {
    
  delete_list.forEach((deleteNumber) => {
      let findIndex = arr.indexOf(deleteNumber);
      if(findIndex > -1) {
          arr.splice(findIndex, 1);
      }
  })
  
  return arr;
}