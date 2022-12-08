"""
Big O Notation

Stack methods are push, pop, peek (i.e) top element, size, empty, search...
Queue methods are enqueue, dequeue, front element, rear element, size, empty, 
"""

list = [12, 33]
print("Initial list: ", list)
list.append(5) # O(1)
print("After pushing a element :",list)

list.extend([9,6]) # O(n)
print("After extending a stack using another stack :",list)

print("Popped element: ",list.pop()) # O(1)
print("After popping element :",list)


# replace for peek() in numpy
# peek the last element in stack using python index -1
print("Top element in the stack: ",list[-1]) # O(1)

# replacement for size() in numpy
# size of the stack using python len method
print("Size: ",len(list))

# replacement for empty() in numpy
# checking the stack is empty or not... using len
def custom_empty_function(listt):
    length = len(listt) # O(1)
    if length == 0:
        return True
    else:
        return False
print("Empty: ",custom_empty_function(list)) # O(1)

# searching a element in a stack 
# if we know the index then its
# O(1)
# if we know the element not the index means 
# O(n)
sample_list = [22,33,44,55,66,77,88]
# search using index
print("Search by knowing index: ",sample_list[2]) # O(1)

# search using element
print("Search using the element: ", sample_list.index(55)) # O(n)
# the above index will loop through the list to find the index of the element so it's O(n)

'''Using push and pop to reduce the time complexity'''
a = [1,2,3,4,5,6,7,8,9,11]
stack_odd = []
stack_even = []
for i in range(len(a)):
    if a[i]%2 == 0:
        stack_even.append(a[i])
    else:
        stack_odd.append(a[i])

j = 0
while len(stack_odd) > 0:
    a[j] = stack_odd.pop()
    j = j+1

while len(stack_even) > 0:
    a[j] = stack_even.pop()
    j = j+1
print("METHOD 1:",a)

c = [1,2,3,4,5,6,7,8,9,11]
# odd = -1
odd = len(c)//2
even = 0
for i in range(len(c),0,-1): # start, stop, step
    if i%2 != 0:
        element = even
        even += 1
    else:
        element = odd
        odd += 1
    c[element] = i
print('METHOD 2:',c)

b = [1,2,3,4,5,6,7,8,9,11]
# odd = -1
odd = len(b)//2
even = 0
for i in range(len(b),0,-1): # start, stop, step
    if i%2 == 0:
        element = even
        even += 1
    else:
        element = odd
        odd += 1
    b[element] = i
print('METHOD 3 - Even First:',b)

# queue example

queue_array = []
def queue(queue):
    print("ENQUEUE: ")
    queue.append('name')
    queue.append('age')
    queue.append('city')
    print('after enqueue: ',queue)

    print("DEQUEUE: ")
    print("dequeued element: ",queue.pop(0))
    print("dequeued element: ",queue.pop(0))
    print("dequeued element: ",queue.pop(0))
    print("after dequeue: ", queue)

queue(queue_array)

front_rear_array = [5,6,7,8]
def front_rear(arr):
    front_element = None
    rear_element = None
    try:
        for i in arr:
            front_element = i
            break
        rear_element = arr[-1]
    except:
        print("Queue is empty...")
    return [front_element, rear_element]
ans = front_rear(front_rear_array)
print(f"FRONT ELEMENT: {ans[0]}, REAR ELEMENT: {ans[1]}")

