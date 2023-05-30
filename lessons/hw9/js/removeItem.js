function removeElementByIndex(array, position) {
    if (position > array.length || position < 0) {
        throw new Error(`Index is out of range for array. Expected index from 0 to ${array.length - 1}`)
    }
    array.splice(position, 1)
}

function removeElementWithFault(array, item) {
    if (item > array.length || item <= 0) {
        throw new Error(`Index is out of range for array. Expected index from 1 to ${array.at(-1)}`)
    }
    let beforeIndex = array.slice(0, item - 1)
    let afterIndex = array.slice(item, array.at(-1))
    return beforeIndex.concat(afterIndex)
}

const arrayToRemoveByIndex = [1, 2, 3, 4, 5, 6, 7];
removeElementByIndex(arrayToRemoveByIndex, 5)
console.log(arrayToRemoveByIndex);
// Expected Result: [1, 2, 3, 4, 5, 7]

const arrayToRemoveByIndexWithFault = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElementWithFault(arrayToRemoveByIndexWithFault, 5));
// Expected Result: [1, 2, 3, 4, 6, 7]