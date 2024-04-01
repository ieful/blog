---
slug: type & interface
title: TS中type和interface的区别
---

#### type

*type* 用于定义*类型别名*、*联合类型*、*交叉类型* 等复杂类型的声明

```typescript
// 类型别名（Type Aliases）：类型别名是给一个类型起一个新名字，例如
type Name = string;
// 类型别名常用于联合类型

// 联合类型（Union Types）：联合类型表示一个值可以是多个类型中的一种。例如：
type StringOrNumber = string | number;

// 交叉类型（Intersection Types）：交叉类型表示一个值必须满足多个类型的要求。例如：
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
```

#### interface

主要用于定义对象的类型和形状。它支持继承和实现，因此非常适合创建复杂的对象类型

```typescript
interface Animal {
  name: string;
  speak(): void;
}

interface Dog extends Animal {
  breed: string;
}

class Labrador implements Dog {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} says woof!`);
  }
}

```

:::tip
总结：用interface描述**数据结构**，用type描述**类型关系**
:::


