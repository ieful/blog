---
title: 跨域携带cookies
---





### 总结

服务端需要设置

```bash
    Access-Control-Allow-Credentials: true
    Access-Control-Allow-Origin: [特定域名] // 不可以是*
```

客户端

```bash
    XMLHttpRequest发请求需要设置withCredentials=true, fetch 发请求需要设置 credentials = include
```