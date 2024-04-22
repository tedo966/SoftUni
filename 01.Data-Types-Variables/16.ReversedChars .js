function reversed(p1,p2,p3) {
    let p123 = p1 + p2 + p3;
    let result = "";
    for(let i = p123.length -1; i >= 0; i--) {
        result += p123[i] + " ";
    }
    console.log(result);
}
reversed('1',
'L',
'&'
)