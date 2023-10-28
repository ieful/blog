---
slug: redux
title: Redux
---


### 是什么
Redux是一个js*状态容器*，以集中式的Store的方式存储整个应用的状态，然后使用action事件对象来管理和更新应用的状态。

### 为什么
使得我们更容易理解应用程序中的状态何时何地为什么以及如何发生了改变更新。


### Demo

计时器

```jsx
function Counter() {
  // State: counter 值
  const [counter, setCounter] = useState(0)

  // Action: 当事件发生后，触发状态更新的代码
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: 视图定义
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```
### 单向数据流（one-way data flow）

* state描述应用程序在特定时间点的状况
* 基于state来渲染View
* 当触发事件时，state根据发生的事情，进行更新生成新的state
* 基于新的state渲染新的View

![flow](/img/flow.png)


















