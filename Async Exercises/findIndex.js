function findIndex(arr, callback) {
    let i;
    for(i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}