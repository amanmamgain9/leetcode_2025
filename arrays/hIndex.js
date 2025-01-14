/**
 * https://leetcode.com/problems/h-index/?source=submission-ac
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort(function(a, b){return a-b});

    let len = citations.length;
    let hIndex = 0;
    for(let i=0;i<len;i++){
        let citValue = citations[i];
        let numPapersGreaterThanEqualCitValue = len - i;
        hIndex = Math.min(numPapersGreaterThanEqualCitValue, citValue);
        if(citValue >= numPapersGreaterThanEqualCitValue){
            break
        }
    }
    return hIndex;
};

