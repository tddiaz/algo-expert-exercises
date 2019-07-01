/**
Linked List Construction

Write a class for a Doubly Linked List. The class should have a "head" and "tail" properties, both of
which should point to either the None (null) value or to a Linked List node. Every node will have a
"value" property as well as "next" and "prev" properties, both of which can point to either the None
(null) value or another node. The class should support setting the head and tail of the linked list,
inserting nodes before and after other nodes as well as at certain positions, removing given nodes
and removing nodes with specic values, and searching for nodes with values. Only the searching
method should return a value: specically, a boolean.
 */

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    setHead(node) {
        if (this._isEmpty()) {
            this._setNodeAsHeadAndTail(node);
        } else {
            this.insertBefore(this.head, node);
        }
    }

    setTail(node) {
        if (this._isEmpty()) {
            this._setNodeAsHeadAndTail(node);
        } else {
            this.insertAfter(this.tail, node);
            this.tail = node;
        }
    }

    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this._remove(nodeToInsert, true);
				
        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;

        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }

        node.prev = nodeToInsert;
				
        this.size++;
    }

    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this._remove(nodeToInsert, true);

        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }

        node.next = nodeToInsert;
        this.size++;
    }

    insertAtPosition(position, nodeToInsert) {

        if (this._isEmpty()) {
            this._setNodeAsHeadAndTail(nodeToInsert);
            return;
        }

        // if position is 1 set as head
        if (position === 1) {
            this.head.prev = nodeToInsert;
            nodeToInsert.next = this.head;
            this.head = nodeToInsert;
						this.size++;
        } else {
            let index = 1;
            let node = this.head;
    
            while (index !== position - 1) {
                node = node.next;
                index++;
            }
            this.insertAfter(node, nodeToInsert);
        }
    }

    removeNodesWithValue(value) {
        const nodes = this._findNodeWithValueOf(value);
        if (nodes !== null) {
            for (const node of nodes) {
                this.remove(node);
            }
        }
    }

    remove(node) {
        this._remove(node, false);
    }

    containsNodeWithValue(value) {
        return this._findNodeWithValueOf(value) === null ? false : true;
    }

    _isEmpty() {
        return this.size === 0;
    }

    _setNodeAsHeadAndTail(node) {
        this.head = node;
        this.tail = node;
        this.size++;
    }

    _findNodeWithValueOf(value = null) {
        if (value === null) {
            return null;
        }

        let currentNode = this.head;
        let foundNodes = [];

        while (currentNode !== null) {
            if (currentNode.value === value) {
                foundNodes.push(currentNode);
            }
            currentNode = currentNode.next;
        }

        return foundNodes.length == 0 ? null : foundNodes;
    }

    _remove(node, forInsert) {
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        this._removeNodeBindings(node);
        if (!forInsert) {
            this.size--;
        }
    }

    _removeNodeBindings(node) {
        if (node.prev !== null) {
            node.prev.next = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
}
