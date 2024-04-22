function sumDigits(num) {
    let result = 0;
    let numString = num.toString()

    for(let i = 0; i < numString.length; i++) {
        result += Number(numString[i]);
        
    }
    console.log(result);
}
sumDigits(245678)