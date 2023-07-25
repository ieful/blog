---
slug: ts
title: TypeScript
---

### 什么是TS

TypeScript 是带有编译时类型检查器的 JavaScript 运行时.
TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层： TypeScript 的类型系统.

### TypeScript 中一般使用的语法和工具的简要概述

#### 类型推断

TypeScript 可以识别 JavaScript 语言，在许多情况下可以推断类型。例如，在创建变量并将其赋值给特定值时， TypeScript 将使用该值作为其类型。（例如在给变量赋值为原始类型值时）

```bash
let helloWorld = "Hello World"; 
// 这样写时ts可以直接推断出 `helloWorld` 变量是 string类型，而不用额外的备注说明
```

#### 定义类型

当我们用到非原始类型的时候(大多数时候都是🤷‍♀️)，我们就需要自己 `定义类型` 以告诉ts如何去推断类型了.

例如，要创建具有推断类型的**对象**，该类型包括 name: string 和 id: number，可以像下面👇这么写:

```bash
const user = {
  name: "Hayes",
  id: 0,
};
```
此时就可以使用 interface 关键字声明显式地描述此对象的内部数据的类型：

```bash
interface User {
  name: string;
  id: number;
}
```

然后就可以声明一个符合此接口（interface）的 JavaScript 对象，在变量声明后使用像 : **TypeName** 这样的语法：

```bash
interface User {
  name: string;
  id: number;
}
// ---分割线---
const user: User = {
  name: "Hayes",
  id: 0,
};
```
这样你就成功的告诉TS如何去推断你的变量类型啦🎉！

经过这样的操作，后面如果你提供的对象，跟定义的接口结构不一致，ts就能及时地给出你警告了～(从而避免你出错😯)

```bash
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

#### 类型扩展

JavaScript 中已经有一些基本类型可用：boolean、 bigint、 null、number、 string、 symbol 和 undefined，它们都可以在接口中使用。TypeScript 将此列表扩展为更多的内容，例如 any （允许任何类型）、unknown （确保使用此类型的人声明类型是什么）、 never （这种类型不可能发生）和 void （返回 undefined 或没有返回值的函数）。
另外，由于 JavaScript 支持类和面向对象编程，TypeScript 也支持。你可以将接口声明与类一起使用：

```bash
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
```

#### 组合类型

使用 TypeScript，可以通过组合简单类型来创建复杂类型。有两种流行的方法可以做到这一点：**联合**和**泛型**。 (_泛型_很重要哦‼️)

##### 1、联合

使用联合，可以声明类型可以是许多类型中的一种，联合类型的一个流行用法是描述 string 或者 number 的字面量的合法值：

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

联合也提供了一种处理不同类型的方法。例如，可能有一个函数处理 array 或者 string：

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}

// 可以使函数根据传递的是字符串还是数组返回不同的值：
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];

        (parameter) obj: string
    }
    return obj;
}
```

##### 2、泛型

泛型为类型提供变量。一个常见的例子是数组。没有泛型的数组可以包含任何内容。带有泛型的数组可以描述数组包含的值。

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

可以声明自己使用泛型的类型：

```ts
interface Backpack<Type> {
  add: (obj: Type) => void; // 接受一个Type类型的参数
  get: () => Type; // 返回一个Type类型的参数
}
 
// 这一行是一个简写，可以告诉 TypeScript 有一个常量，叫做`backpack`，并且不用担心它是从哪
// 里来的。
declare const backpack: Backpack<string>; // <string> Type类型是string
 
// 对象是一个字符串，因为我们在上面声明了它作为 Backpack 的变量部分。
const object = backpack.get(); // 那么这里返回的object就是string类型了
 
// 因为 backpack 变量是一个字符串，不能将数字传递给 add 函数。
backpack.add(23);
Argument of type 'number' is not assignable to parameter of type 'string'.
```

#### 结构化的类型系统

TypeScript 的一个核心原则是类型检查基于对象的属性和行为（type checking focuses on the shape that values have）。这有时被叫做“鸭子类型”或“结构类型”（structural typing）。

在结构化的类型系统当中，如果两个对象具有相同的结构，则认为它们是相同类型的。

```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// 打印 "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```
👆上面的point 变量从未声明为 Point 类型。 但是，在类型检查中，TypeScript 将 point 的结构与 Point的结构进行比较。它们的结构相同，所以代码通过了✅。

结构匹配只需要匹配对象字段的子集

```ts
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // 打印 "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // 打印 "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```
类和对象确定结构的方式没有区别,如果对象或类具有所有必需的属性，则 TypeScript 将表示是它们匹配的，而不关注其实现细节:

```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
// ---分割线---
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // 打印 "13, 56"
```
#### 类型别名和接口之间的区别
类型别名和接口非常相似，在大多数情况下你可以在它们之间自由选择。 几乎所有的 interface 功能都可以在 type 中使用，关键区别在于不能重新开放类型以添加新的属性，而接口始终是可扩展的。
