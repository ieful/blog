---
slug: linked-list
title: 链表
---

### 链表

```javascript
function LinkedList() {
    
    // node 类
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    
    let length = 0;
    let head = null;
    
    this.append = function (element) {
        let node = new Node(element);
        let current
        if (head === null) {
            head = node
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++
    }
}
```


```javascript
// 用类的方式实现

// 首先要有一个node类
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    
    // 实现append方法
    append(node) {
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head;
            if (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
}
```

```javascript
// 翻转单链表
function reverseLinkedList(head) {
    let current = head;
    let pre = null;
    while(current) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}
```