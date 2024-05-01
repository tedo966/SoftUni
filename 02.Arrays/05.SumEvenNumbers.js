function sumEvensNums(nums) {
    let sum = 0;
    for(let i = 0; i <= nums.length; i ++) {
        let num = Number(nums[i])
        if(num % 2 == 0) {
            sum += num;
        }
        
    }
    console.log(sum);
}
sumEvensNums(['1','2','3','4','5','6'])