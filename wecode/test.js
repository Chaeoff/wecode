function getEvenNumbers() {
    let numArr = [];   
    for (let i = 1; i < 51; i ++) {
        if (i % 2 == 0) {
            numArr.push(i)
        }
    }
    return numArr;
}
