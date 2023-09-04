function solution(my_string, n) {
    var answer = '';
    my_string.split('').map((s) => {
        for(let i=0; i<n; i++){
            answer += s;
        }
    })
    return answer;
}