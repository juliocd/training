function solution(inputArray) {
    const permutations = [];
    permute(inputArray, 0, inputArray.length - 1, permutations);
    
    console.log(permutations)
}

function permute(arr, left, right, result) {
    if(left == right) {
        result.push([...arr])
        return;
    }
    
    for (let i = left; i <= right; i++) {
        swap(arr, left, i);
        permute(arr, left + 1, right, result);
        swap(arr, left, i);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
