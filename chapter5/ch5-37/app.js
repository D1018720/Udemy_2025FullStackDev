function findBigggest(arr) {
    let tempMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > tempMax) {
            tempMax = arr[i];
        }
    }
    return tempMax;
}

console.log(findBigggest([1, 2, 3, 4, 5])); // 5