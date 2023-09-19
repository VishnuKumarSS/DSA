//insert a element in an array
// push or append runtime will be O(1) - constant
function ins(arr, element) {
    arr.push(element);
    return arr;
}
const arr = [1, 2, 3];
console.log(ins(arr, 4));

//insert a element in an array
// unshift runtime will be O(n) - 
function ins2(arr2, element) {
    arr2.unshift(element);
    return arr2;
}
const arr2 = [1, 2, 3];
console.log(ins2(arr2, 5));

// accessing element 
// accessing runtime will be O(1) - constant
function accesss(arr, index){
    return arr[index]
}
const arr3 = [5,6,7,8,9]
accesss(arr3, 3)

// searching element in a array - finding the index of a element in an array
// we have to loop through the array once...so the runtime will be O(n)
function search(arr4, element) {
    for (let index = 0; index < arr4.length; index++) {
        if(element === arr4[index]) {
            return index;
        }
    }
}
const arr4 = [1, 'vishnu', 10, "kumar"];
console.log(search(arr4, 'kumar'))
console.log(search(arr4, 10))

// deleting element in a array
// below O(n) + O(n) = O(2n) => O(n) ---- Removed constant, because its small compared to n...
function remove(arr5, element) {
    const index = search(arr5, element); // here we are using our search function to search...which means O(n)
    arr5.splice(index, 1); // O(n)
    return arr5;
}
const arr5 = [0, 1, 2, 3];
console.log(remove(arr5, 1)); // => [ 0, 2, 3 ]

// poping a element in an array
// the run time will be O(1) -- we are gonna pop the last element only so none of the other elements index are gonna be affected.
function pop_element(arr){
    arr.pop()
}
const arr6 = [1,2,3,4,5]
pop_element(arr6)
console.log(arr6)


