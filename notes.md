---
title: canvas笔记
date: 2021.5.18
---
## 概述

长久以来，web上的动画是flash,缺点需要安装Adobe Flash Player,漏洞多，重量大，卡顿和不流畅

canvas是一个轻量级画布，使用canvas进行Javascript的编程，不卡顿

### 1.1 Hello World

在页面中设置一个canvas标签

```html
<canvas width="600" height="300">
    当前的浏览器版本不支持，请升级浏览器(高版本浏览器不显示这行字)
</canvas>
```

canvas的标签属性只有两个，width和height

`注：以上两个属性不能用css样式设置 画布会失帧`

script1标签中绘制矩形

```js
 var canvas = document.getElementById('myCanvas')

// 得到画布的上下文，2D和3D
var ctx = canvas.getContext('2d')
console.log( ctx );//所有的图像绘制都是通过ctx的属性和方法绘制，和canvas标签无关

// 绘制矩形,得先设置颜色 不然不生效
ctx.fillStyle='green'
ctx.fillRect(100,100,200,50)
```

通过以上代码，需要知道重要的API

> 获取上下文：var ctx = canvas.getContext( )
>
> 设置颜色：ctx.fillStyle
>
> 绘制矩形： ctx.fillRect(x,y,c,d)，xy表示位置，cd表宽高

canvas本质上利用代码在浏览器的页面上画画