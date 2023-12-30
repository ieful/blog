---
title: AppData
---

AppData 文件夹包含 Windows PC 上的应用程序独有的应用程序设置、文件和数据。该文件夹在 Windows 文件资源管理器中默认隐藏，并具有三个隐藏的子文件夹：Local、LocalLow 和 Roaming

你不会经常使用此文件夹，但这是你的重要文件所在的位置。例如，你的书签、保存的会话等。

#### 如何查看 AppData 文件夹

通过进入 C 盘中的 Users 文件夹手动查看 AppData 文件夹。在我的例子中，路径是 C:\Users\ADMIN。

接下来，转到顶部的 “View（查看）” 选项卡并选中 “隐藏项目（Hidden items）” 复选框，如下所示：

[//]: # (![AppData]&#40;/img/hidden.png&#41;)


现在你应该能够在你的 User 文件夹中看到 AppData 文件夹.



:::tip
通常，你不必担心 AppData 文件夹中的数据——这就是它默认隐藏的原因。它仅由应用程序开发人员用于存储应用程序所需的必要数据。

如果需要创建应用程序数据的备份，日常 Windows 用户只需访问或查看 AppData 文件夹。
:::



#### 什么是 AppData 文件夹


Windows 中的应用程序通常将其设置和临时数据存储在 AppData 文件夹中。每个 Windows 用户帐户都有自己的 AppData 文件夹。正如我之前提到的，AppData 中有三个文件夹——Local、LocalLow 和 Roaming。


* Local 文件夹: 用于存储 Windows 系统特有的数据，这意味着数据不会在多台 PC 之间同步
* LocalLow 文件夹: 与 Local 文件夹相同，不同之处在于它由具有受限安全设置的低完整性应用程序使用，例如，Mozilla Firefox 在私有模式下运行。
* Roaming 文件夹: 用于存储将在多个 Windows 系统之间同步的数据。这通常用于存储书签、保存的密码等设置.