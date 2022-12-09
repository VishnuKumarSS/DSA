/*
Stack methods are push, pop, peek (i.e) top element, size, empty, search
Stack in big O notation
*/

// function to reverse an array with push method
function reverseArray(arr) {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) { // looping through with arr.length then...O(n)
        newArray.push(arr[i]) // push will be O(1)
    }
    return newArray // O(1)
}
const rev1 = reverseArray([1, 2, 3]) 
const rev2 = reverseArray([5,6,7,8,9,3])
console.log("Reverse array using push: ")
console.log(rev1)
console.log(rev2)
// then O(n) + O(1) + O(1) => O(n)

// insert at the end using push()
const testArray = [1,2,3,4,5,6,7,8,9]
console.log("BEFORE PUSH: ", testArray)
const insert = (arr) => {
    console.log('Pushed element: ',arr.push(10)) // O(1)
    return arr
}
console.log("AFTER PUSH: ",insert(testArray))

// remove the last element in array by pop
const popArr = [1,2,3,4,5]
console.log("BEFORE POP: ", popArr)
const remove = (arr) => {
    console.log('Popped element: ',arr.pop()) // O(1)
    return arr
}
console.log("AFTER POP: ",remove(popArr))

// queue
// add element at the beginning
const arr1 = [7,8,9]
console.log("BEFORE UNSHIFT: ", arr1)
const unshiftFunc = (arr) => {
    arr.unshift(10)
    return arr
}
console.log("AFTER UNSHIFT: ",unshiftFunc(arr1))
// when using unshift it adds a element to the beginning of the array so it will change the address of all the elements...
// then its O(n)

// queue
// remove the first element in an array
const arr2 = [1,2,3]
console.log("BEFORE SHIFT: ", arr2)
const shiftFunc = (arr) => {
    arr2.shift()
    return arr2
}
console.log("AFTER SHIFT: ",shiftFunc(arr2))
// shift method removes the first element in an array. so the remaining elements have to be re addressed
// so, O(n)

let sampleArr = [30, 20, 40, 10, 70]
// empty
const empty = (arr) => {
    let len = arr.length // O(1)
    if ( len === 0 ) {
        return true
    }
    else {
        return false
    }
}
// returns true if the stack is empty
console.log("EMPTY : ", empty(sampleArr)) // O(1)

// peek implementation
const peek = (arr) => {
    if (arr.length !== 0){
        return arr[arr.length - 1]
    }
    return "Empty stack!"
}
console.log("Top element in stack: ", peek(sampleArr))

// size of stack
console.log("SIZE of stack:",sampleArr.length)

// Example
let a = [1,2,3,4,5,6,7,8,9,10]
let even = []
let odd = []
for (let i=0; i<a.length; i++){
    if (a[i]%2===0){
        even.push(a[i])
    }
    else{
        odd.push(a[i])
    }
}
console.log(even, odd)
