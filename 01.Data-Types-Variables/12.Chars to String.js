function charToStr(ch1,ch2,ch3) {
    let result = '';

    for(let i = 0; i < ch1.length; i ++) {
        result += ch1[i];
        for(let j = 0; j < ch2.length; j ++) {
            result+= ch2[j];
        }
        for (let k = 0; k < ch3.length; k ++) {
            result += ch3[k];
        }
    }
    console.log(result);

}
charToStr('1',
'5',
'p')
