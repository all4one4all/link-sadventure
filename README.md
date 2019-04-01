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
背景：
```javascript
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'bg.png';
```
角色贴图：
```javascript
function arrImage(arr) {
    var arrImage = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        arrImage[i] = [];
        arrImage[i][0] = false;
        arrImage[i][1] = new Image();
        arrImage[i][1].onload = function() {
            arrImage[i][0] = true;
        };
        arrImage[i][1].src = arr[i];
    }
    return arrImage;
}
var imageSrc = [];
imageSrc.push('img/link01.png');
//...
imageSrc.push('img/link10.png');

var arrObject = arrImage(imageSrc);
```



