---
slug: tree
title: 二叉搜索树
---

### 概念定义

*树* 是一种非顺序的数据结构，对于存储需要快速查找的数据非常有用。树是一种分层的数据抽象模型，例如家谱、公司组织架构图。
树的结构包含一系列存在父子关系的节点。位于树顶部的----根节点，没有子节点的节点----叶子节点。
*节点深度*： 取决于它的祖先节点的数量。
*树的高度*： 取决于所有节点深度的最大值。
*二叉树*： 节点最多有两个子节点，一个左节点，一个右节点
*二叉搜索树（BST）*：是二叉树的一种，只允许左侧存储比父节点小的值，右侧存储比父节点大的值。


#### 创建一个二叉搜索树
```javascript
// 节点类
function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}
// 二叉搜索树
function BinarySearchTree() {
    let rootNode = new Node(null);
    let root = rootNode;
}

// 向树中插入一个节点
this.insert = function(key) {
    let newNode = new Node(key);
    if (root === null) {
        root = newNode;
    } else {
        insertNewNode(root, newNode)
    }
}

// 递归函数
function insertNewNode(node, newNode) {
    if (newNode.key < node.key) {
        if(node.left === null) {
            node.left = newNode
        } else {
            insertNewNode(node.left, newNode)
        }
    }
    if (newNode.key > node.key) {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNewNode(node.right, newNode)
        }
    }
}
// 👆上面的insertNewNode函数会帮我们找到新的节点应该插入的正确位置
```
