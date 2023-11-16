---
title: Websocket怎么建立连接的？
---


WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，它与 HTTP/HTTPS 具有较低的开销，可以在客户端和服务器之间建立实时的双向通信。以下是建立 WebSocket 连接的基本步骤：

##### 握手（Handshake）：

客户端发起 WebSocket 连接时，首先发送一个 HTTP 请求，其中包含一个特殊的 Upgrade 头字段，表明客户端希望升级连接协议为 WebSocket。

服务器收到这个请求后，如果支持 WebSocket，会回应一个状态码 101 Switching Protocols，以及一些额外的头字段，表示成功切换到 WebSocket 协议。

握手过程类似于以下的 HTTP 请求和响应：

```bash
    # 请求
    http
    Copy code
    GET /chat HTTP/1.1
    Host: example.com
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
    Sec-WebSocket-Version: 13
```



```bash
    # 响应
    http
    Copy code
    HTTP/1.1 101 Switching Protocols
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

##### 保持连接：

一旦握手成功，连接将保持打开状态，允许客户端和服务器之间进行实时通信。
WebSocket 连接是全双工的，客户端和服务器都可以发送消息，并且可以异步地接收对方发送的消息。

##### 数据传输：

WebSocket 连接允许通过帧（frame）进行数据传输。每个帧可以包含文本、二进制数据或控制信息。
数据传输是基于事件的，通过监听 message 事件可以接收从服务器传来的消息。
在浏览器中，可以使用 JavaScript 来创建 WebSocket 连接：

```ecmascript 6
    const socket = new WebSocket('ws://example.com/chat');

    // 监听连接打开事件
    socket.addEventListener('open', event => {
        console.log('WebSocket connection opened:', event);
    
        // 发送消息
        socket.send('Hello, server!');
    });
    
    // 监听接收消息事件
    socket.addEventListener('message', event => {
        console.log('Received message:', event.data);
    });
    
    // 监听连接关闭事件
    socket.addEventListener('close', event => {
        console.log('WebSocket connection closed:', event);
    });
    
    // 监听连接错误事件
    socket.addEventListener('error', event => {
        console.error('WebSocket connection error:', event);
    });
```

在以上👆示例中，WebSocket 构造函数接受一个表示服务器地址的 URL，并创建了一个 WebSocket 连接。通过添加事件监听器，可以处理连接打开、接收消息、连接关闭和连接错误等事件。