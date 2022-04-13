function getClosestEl(sortedArr, number) {
    let start = 0;
    let end = sortedArr.length - 1;
    let middle;

    //   Immediately returning start or end of array in case of number is out of array's range
    if (number <= sortedArr[0]) return sortedArr[0];
    if (number >= sortedArr[end]) return sortedArr[end];

    //   Finding between which exact two elements our number is. Immediate return if we suddenly found exact match
    while (start < end - 1) {
        middle = Math.floor((start + end) / 2);
        if (number < sortedArr[middle]) {
            end = middle;
        } else if (number > sortedArr[middle]) {
            start = middle;
        } else return number;
    }

    //   Returning element which is closer to our number
    if (number - sortedArr[start] < sortedArr[end] - number) {
        return sortedArr[start];
    } else {
        return sortedArr[end];
    }
}
