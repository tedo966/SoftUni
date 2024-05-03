function addSubstract(nums) {
    
    let modifNums = [];
    for(let i = 0; i < nums.length; i ++){
        if(Number(nums[i]) % 2 == 0){
            modifNums.push(Number(nums[i]) + Number([i]))
        }
        else{
            modifNums.push(Number(nums[i]) - Number([i]))
        }
    }
    let sumOldNums = 0;
    let sumModiNums = 0;
    for(let i = 0; i < nums.length; i ++) {
        sumOldNums += Number(nums[i]);
        sumModiNums += Number(modifNums[i]);

    }   
    console.log(modifNums);
    console.log(`${sumOldNums}\n${sumModiNums}`);
}
addSubstract([5, 15, 23, 56, 35])