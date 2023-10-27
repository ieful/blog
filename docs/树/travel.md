---
slug: travel
title: 树的遍历
---

:::tip
*中序*遍历：先遍历左子节点，再遍历**当前**节点，最后遍历右子节点。
*前序*遍历：先遍历**当前**节点，再遍历左子节点，最后遍历右子节点。
*后序*遍历：先遍历左子节点，再遍历右子节点，最后遍历**当前**节点。
:::

:::caution
注意：只需要记住中序、前序、后序是相对于中间的节点而言的就好记了。
:::

### 中序遍历
```javascript
// 中序遍历
this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root,callback);
}
// inOrderTraverse方法接收一个回调函数参数，这个回调函数用来定义对遍历到的每个节点进行的操作
// inOrderTraverseNode 辅助函数
function inOrderTraverseNode(node, callback){
    if (node !== null) {
        inOrderTraverseNode(node.left, callback); // 先左
        callback(node); // 当前节点中间顺序遍历-----中序
        inOrderTraverseNode(node.right, callback);// 后右
    }
}
```
中序遍历的访问路径图：
![medium](/img/tree/medium.png)

### 前序遍历

```javascript
this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
};
function preOrderTraverseNode(node, callback){
    if (node !== null) {
        callback(node);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}
```
前序遍历的访问路径图：
![medium](/img/tree/pre.png)

### 后序遍历

```javascript
this.postOrderTraverse = function(callback){
  postOrderTraverseNode(root, callback);
};

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node);
    }
}
```

后序遍历的访问路径图：
![medium](/img/tree/post.png)