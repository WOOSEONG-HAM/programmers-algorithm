function solution(n)
{
    var answer = 0;
    
    let array = String(n).split("");
    
    answer = array.reduce((result, num) => {
        result += Number(num);
        return result;
    }, 0)

    return answer;
}