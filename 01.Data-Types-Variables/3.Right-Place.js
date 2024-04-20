function rightPlace(missingChar,char,string) {
    let result = missingChar.replace('_',char); // Zamestvane 
    let output = result === string? "Matched": "Not Matched"; // Proverka vqrno ili greshno
    console.log(output);
}
rightPlace('Str_ng', 'I', 'Strong')