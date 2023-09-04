function solution(array, height) {
    var answer = 0;
    array.forEach((k) => {
        if(k > height) answer += 1;
    })
    return answer;
}