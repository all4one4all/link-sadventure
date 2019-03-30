# [伪]林克的大冒险
```html
<canvas id="viewing"></canvas>
```
画布：
```javascript
var canvas = document.getElementById('viewing');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
```
关键帧：
```javascript
var keyFrame = true;
```
背景：
```javascript
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'bg.png';
```