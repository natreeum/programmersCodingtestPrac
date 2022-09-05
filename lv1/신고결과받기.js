function solution(id_list, report, k){
    let idLen = id_list.length;
    let reportLen = report.length;
    let reports = [...new Set(report)].map(a=>a.split(' '));
    let answer = Array.from({length: idLen}, () =>0);
    let reported = Array.from({length: idLen}, () =>0);
    let myMap = new Map();

    for(let i=0; i<idLen; i++){
        myMap.set(id_list[i],i);
    }

    for(let i of reports){
        reported[myMap.get(i[1])] ++;
    }
    for(let i of reports){
        if(reported[myMap.get(i[1])] >= k){
            answer[myMap.get(i[0])]++;
        }
    }
    return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report= ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const num = 2;

console.log(solution(id_list, report, num));