function subtraction(nums) {
    let evenSumm = 0;
    let oddSum = 0;

    for(let i = 0; i <= nums.length - 1; i ++) {
        if(Number(nums[i]) % 2 == 0) {
            evenSumm += Number(nums[i]);
        } else {
            oddSum += Number(nums[i])
        }
    }
    console.log(evenSumm - oddSum);
}
subtraction([1,2,3,4,5,6])
