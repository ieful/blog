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