function mergeArr(arr1,arr2) {
    let modifArr = [];
    for(let i = 0; i < arr1.length; i ++) {
        let number = Number([i])
        if(number % 2 == 0){ 
            modifArr.push(Number(arr1[i]) + Number(arr2[i]))
        }else {
            modifArr.push(arr1[i] + arr2[i])
        }
    }
    console.log(modifArr.join(" - "));
}
mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)