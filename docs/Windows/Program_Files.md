---
title: program files和program files(x86)
---


### 总结

* Program Files - 默认为64位程序的安装路径；
* program files(x86) - 默认为32位程序的安装路径。

### 能删除吗？

 **不可以！！！**


### 介绍

Windows系统分32位和64位，64位系统安装后，在C盘根目录下会生成：program files和program files(x86)两个文件夹。

[//]: # (![programfile]&#40;/img/programfile.png&#41;)


Windows 64位系统能同时支持32位和64位的windows程序；进入64位系统时代后，为了对32位的windows程序和64位的windows程序进行区别管理，所以出现了program files 文件夹（默认为64位程序的安装路径）和program files（x86)文件夹（默认为32位程序的安装路径），该设计是为了防止加载错误版本的DLL，比如用户安装了32位程序，如果错误加载了64位DLL就会导致程序崩溃，因此微软就设置了2个不同的文件夹Program Files和Program Files (x86)来区分x64和x84不同的程序文件，所以使用64位系统的用户可以看到自己电脑上有这两个文件夹

C:\Program Files和C:\Program Files（x86）文件夹都是系统创建的文件夹，在64位系统中，大量的兼容32位的程序会被安装在C:\Program Files（x86），同时也包含一些系统本身的程序，所以该文件夹是不可以删除的。

如果删除了里面的系统软件的重要文件，需要重装系统。