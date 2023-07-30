---
title: java简介
---

### 语言定位

java介于编译型语言和解释型语言之间。

* 编译型语言：C、C++  代码直接编译成机器码执行，但是不同的平台（x86、ARM等）cpu的指令集不同，因此，需要编译出每一种平台对应的机器码。
* 解释型语言：python、ruby可以直接由解释器加载源码然后运行，代价是运行效率太低。
* Java：将源代码编译成一种 **字节码** 它类似于cpu指令，然后针对不同的平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，这样就实现了**一次编写，处处运行**。

:::info
一次编写，处处运行是对java的开发者而言的，对于java虚拟机的开发，则需要为每个平台分别开发😝。 **为了保证不同平台、不同公司开发的虚拟机都能正确执行java字节码，sun公司制定了一系列的虚拟机规范**
:::


### java版本

* JavaSE: 标准版，包含标准的JVM和标准库。✅
* JavaEE: 企业版，在JavaSE的基础上加入了大量的API和库，方便开发，用的虚拟机和JavaSE一样。
* JavaME: 瘦身版，针对嵌入式设备，无法使用JavaSE的标准库哦～❌，用的虚拟机也是 `瘦身版` 🥱

#### 名词解释

* JDK： Java Development Kit
* JRE: Java Runtime Environment

简单的说，JRE就是运行java字节码的虚拟机，但是如果只有java源码，要编译成字节码，就需要JDK，因为JDK除了包含JRE，还提供了编译器、调试器等开发工具。

#### JDK bin目录可执行文件📃

* java: 这就是虚拟机JVM，运行Java程序就是启动JVM，然后让JVM执行指定的编译后的代码;
* javac: 这是java的编译器，用于把我们写的Java源代码（.java）编译成java字节码（.class）;
* jar: 用于把一组.class文件打包📦成一个.jar文件，便于发布;
* javadoc: 用于从java源码中自动提取注释并生成文档;
* jdb: java调试器，用于开发阶段的运行调试;

### 第一个java程序

```Java
public class Hello {
    public static void main(String[], args) {
        System.out.println('hello, world!')
    }
}
```

:::info
Hello是类的名字，按照惯例，首字母H大写。花括号 `{}` 中间是类的定义。在Hello类中我们定义了一个 `main` 方法。
一个方法除了方法名之外，还有用 () 括起来的方法参数，这里的 `main` 方法有一个参数其类型是 `Stirng[]`，参数名是 `args`
`public` `static` 都是用来修饰方法的，这里表示它是一个公开的静态方法， `void` 是方法的返回类型，花括号中间的就是方法的代码了。方法的代码每一行用 `;` 结束
:::

:::tip
Java规定，每个类定义的 `public static void main(String[] args)` 是Java程序的固定入口方法，因此，Java程序总是从 main 方法开始执行。
:::


java源码本质是一种文本文件，需要先用javac把Hello.java编译成字节码文件Hello.clas然后用java命令执行这个字节码文件：

![jvm](/img/jvm.png)




























