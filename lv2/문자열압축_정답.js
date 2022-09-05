function solution(s){
    let arr = [];
    let str = "";
    let answer =Number.MAX_SAFE_INTEGER;
    let n=s.length;
    for(let i=1; i<=n; i++){
        for(let j=0; j<n; j=j+i){
            let tmp ="";
            for(let k=j; k<j+i; k++){
                if(k<n) tmp+=s[k];
            }
            arr.push(tmp);
        }
        let cnt = 1;
        for(let j=0; j<arr.length; j++){
            if(j!==arr.length-1){
                if(arr[j]===arr[j+1]){
                    cnt++;
                }
                else {
                    if(cnt>1) str+=cnt;
                    str+=arr[j];
                    cnt=1;
                }
            }
            else {
                if(arr[arr.length-2]===arr[arr.length-1]){
                    str+=cnt;
                    str+=arr[arr.length-1];
                }
                else str+=arr[arr.length-1];
            }
        }
        if(str.length < answer) answer = str.length;
        arr=[];
        str="";
    }
    return answer;
}

const str = "ababcdcdababcdcd"
//console.log(solution(str));
solution(str);