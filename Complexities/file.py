# reverse all the elemtents in an array
def reverse1(array):
    new_arr = []
    for i in array: # O(n)
        new_arr.insert(0,i) # here the runtime will be O(n)
    return new_arr
arr = [1,2,3,4,5]
print(reverse1(arr))
# O(n) * O(n) = O(n^2)

