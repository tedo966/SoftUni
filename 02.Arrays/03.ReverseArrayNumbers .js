function reverse(num,arr) {
    let result = [];
    for(let i = 1; i <= num; i ++) {
        result.push(arr[i - 1]);
    }
    console.log(result.reverse().join(' '));
}
reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])