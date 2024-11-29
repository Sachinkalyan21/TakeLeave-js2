// Implementing map
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array)); // Apply callback to each element
    }
    return result;
}

// Implementing reduce
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array); // Apply callback
    }
    return accumulator;
}

// Implementing filter
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) { // Include element if callback returns true
            result.push(array[i]);
        }
    }
    return result;
}

// Implementing flatMap
function customFlatMap(array, callback) {
    const mappedArray = customMap(array, callback); // Apply map function
    const flattenedArray = [];
    for (let i = 0; i < mappedArray.length; i++) {
        if (Array.isArray(mappedArray[i])) {
            flattenedArray.push(...mappedArray[i]); // Flatten arrays
        } else {
            flattenedArray.push(mappedArray[i]);
        }
    }
    return flattenedArray;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Using customMap
console.log("customMap:", customMap(numbers, (num) => num * 2));

// Using customReduce
console.log(
    "customReduce:",
    customReduce(numbers, (acc, num) => acc + num, 0)
);

// Using customFilter
console.log(
    "customFilter:",
    customFilter(numbers, (num) => num % 2 === 0)
);

// Using customFlatMap
console.log(
    "customFlatMap:",
    customFlatMap(numbers, (num) => [num, num * 2])
);
