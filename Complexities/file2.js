// multipling everynumber in first arr with everynumber in second arr
function mul(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return undefined
    }
    let total = 0
    for (let i of arr1) { // O(arr1)
        for (let j of arr2) { // O(arr2)
            total += i * j
        }
    }
    return total
}
let res1 = mul([1, 2], [100, 200]) 
let res2 = mul([10, 20, 30, 40], [10, 20, 30, 40]) 
console.log(`res1 - ${res1}, res2 - ${res2}`)
// O(arr1) * O(arr2) = O(arr1 * arr2) => O(n^2)


// logarithmic
function logarithmic_example(arr) {
    let numberOfLoops = 0
    for (let i = 0; i < arr.length; i += 2) {
        numberOfLoops++
    }
    return numberOfLoops
}
let test1 = logarithmic_example([1]) 
let test2 = logarithmic_example([1, 2]) 
let test3 = logarithmic_example([1, 2, 3, 4]) 
let test4 = logarithmic_example([1, 2, 3, 4, 5, 6, 7, 8])
let test5 = logarithmic_example(Array(16)) 
console.log(test1, test2, test3, test4, test5)


// largest element in an unsorted array
function largest(arr) {
    let max; // 1 operation
    for (let i = 0; i < arr.length; i++) { // loop of size n
        if(max === undefined || max < arr[i]) { // 1 operation -- inside for loop
            max = arr[i]; // 1 operation -- inside for loop
        }
    }
    return max;
}
const arr_1 = [1,2,5,3,9,7,4]
console.log(`largest ${largest(arr_1)}`)
// 1 + 2(n) ---- 2 operations inside for loop so 2(n)
// after removing constants...n --- so, O(n)


// to check duplicates found or not
function duplicate(arr) {
    for (let outer_loop = 0; outer_loop < arr.length; outer_loop++) { // n times
      for (let inner_loop = 0; inner_loop < arr.length; inner_loop++) {  // n times
        if(outer_loop === inner_loop){
            continue; // 1
        }
        if(arr[outer_loop] === arr[inner_loop]) {
            return true; // 1
        }
      }
    }  
    return false;
}
const arr_test = [3,6,3,7]
console.log(duplicate(arr_test))
// 2(n * n) = 2n^2 = n^2 => O(n^2)

