---
title: System32和SysWOW64
---


#### 别管System文件夹了，它不重要。（但你没事儿也别删它啊~）


### 结论

* 在32位操作系统的Windows文件夹中， SYSTEM 和 SYSTEM32 两个文件夹，分别用来存放 16 位和 32 位的DLL文件。
* 在64位操作系统的Windows文件夹中， System32 和 SysWOW64 两个文件夹，分别用来存放 64 位和 32 位的DLL文件。 （平时没注意到 *SysWOW64* 这个文件夹吧~）.


因此 ，与人们想当然的正好相反，

* X64 程序 dll 加载路径为 C:\Windows\System32，

* X86 程序 dll 加载路径为 C:\Windows\SysWOW64。


#### 背景

WOW64的全称是32bit Windows On 64bit Windows，即运行在64位系统上的32位程序。

由于很多应用程序内部写死了C:\Windows\System32的引用路径，所以windows为了保持这些应用程序在64位系统上的兼容性，便将64位的系统库放C:\Windows\System32目录下，同时，将32位的系统库转存到C:\Windows\SysWOW64目录下。而如果应用程序为32位，需要运行在64位系统上时，操作系统会对系统库路径和注册表进行重定向，将动态库引用目录重定向到SysWOW64中。

之所以将64位的系统库仍然存放在C:\Windows\System32中，而将32位的系统库转存到C:\Windows\SysWOW64，是为了更好地保持程序的兼容性。即：64位程序不需要修改代码（例如将代码中写死的C:\Windows\System32修改为C:\Windows\System64）和工程属性（例如将C:\Windows\System32的引用路径修改为C:\Windows\System64），只需要将代码编译为64位程序，仍然引用C:\Windows\System32这个路径，即可在64位系统上运行。

而之所以对64位系统上的32位程序做重定向，而不是对64位程序做重定向，是为了更好地发挥64位系统的效率，使64位系统更好地为64位程序服务。试想，如果不采用这种设计，而是将64位的系统库存放在C:\Windows\System64目录下，那么对于仍然引用C:\Windows\System32的64位应用程序，操作系统需要把所有引用路径重定向到C:\Windows\System64中，同时对注册表进行重定向，那么将一定程度上影响64位程序的运行效率。


:::info
【注意】system不是系统重要文件夹！system32才是。
:::