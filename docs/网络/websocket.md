---
title: websocket
---

### 概念

websocket是html5新增的协议，目的是在浏览器和服务器之间建立一个不受限制的**双向**通信的通道。让服务器可以在任意时刻发送消息给浏览器。

### 协议

websocket不是全新的协议，二是利用http协议来建立连接的：
```BASH
GET ws://localhost:3000/ws/chat HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Origin: http://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

为什么websocket连接可以实现全双工通信而HTTP连接不能呢？实际上http协议是建立在Tcp协议之上的，**而Tcp协议本身已经实现了全双工通信**，但是http协议的请求-应答机制限制了全双工通信。
websocket连接建立以后，其实只是**简单的规定了一下**：接下来，咱们就**不用HTTP协议了，直接互相发送消息吧**！

安全的websocket连接机制和https类似，首先浏览器用wss://xxx创建websocket连接时，会先通过https创建安全的连接，然后，该https连接升级为websocket连接，底层通信走的还是安全的ssl/tls协议。






















