"""
In this example, the Node class represents a node in the linked list.
It has two attributes: data to store the value of the node, and next to store the reference to the next node in the list.

The LinkedList class represents the linked list itself.
It has a head attribute to keep track of the first node in the list.
The class provides methods to manipulate the list, such as 
    * append to add a node to the end of the list,
    * prepend to add a node to the beginning of the list, 
    * insert_after to insert a node after a given node, 
    * delete to remove a node with a specific value, 
    * and search to check if a value exists in the list.
The display method is used to print the elements of the linked list in order.

You can create an instance of the LinkedList class and use its methods to interact with the linked list, as shown in the example usage section.
"""

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def append(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node

    def prepend(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def insert_after(self, prev_node, data):
        if prev_node is None:
            raise ValueError("Previous node cannot be None.")
        new_node = Node(data)
        new_node.next = prev_node.next
        prev_node.next = new_node

    def delete(self, data):
        if self.is_empty():
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next is not None:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search(self, data):
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def display(self):
        elements = []
        current = self.head
        while current is not None:
            elements.append(current.data)
            current = current.next
        print("LinkedList: ", "->".join(map(str, elements)))


# Example usage
linked_list = LinkedList()
linked_list.append(10)
linked_list.append(20)
linked_list.prepend(5)
linked_list.insert_after(linked_list.head.next, 15)
linked_list.display()  # Output: LinkedList:  5->10->15->20
print(linked_list.search(20))  # Output: True
linked_list.delete(15)
linked_list.display()  # Output: LinkedList:  5->10->20
