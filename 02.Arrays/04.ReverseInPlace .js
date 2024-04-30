function reverseArr(arr) {
//     let result = arr.reverse().join(" ")
//     console.log(result);
// }
// for(let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
for(let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    let j = arr.length - 1 - i;
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(arr.join(" "));

}

reverseArr(['a', 'b', 'c', 'd', 'e'])