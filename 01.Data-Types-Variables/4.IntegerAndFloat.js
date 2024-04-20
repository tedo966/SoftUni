function intfloat(n1,n2,n3) {
    let sum = n1 + n2 + n3;
    sum % 1 === 0 ? sum += ' - Integer': sum += ' - Float'; // proverka cqlo ili drobno
    console.log(sum);

}
intfloat(9,100,1.1)