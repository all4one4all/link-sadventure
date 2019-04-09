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
正面（左），正面（右）
背面（左），背面（右）
侧面（站立）x2
侧面（迈步）x2

剑

正面挥剑
侧面挥剑x2
背面挥剑
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
游戏对象状态：
```javascript
var hero = {
    state: 1,  //角色未拾取武器前状态（正面or侧面or背面），当拾取后改状态转变为0
    killState: 0,  //角色拾取武器后状态（正面or侧面or背面）
    speed: 80,
    x: 0,
    y: 0,
    weapon: false  //角色是否拾取武器
};
var weapon = {
    x: canvas.width / 2, //武器横坐标
    y: canvas.width / 2, //武器纵坐标
    type: sward  //武器类型
	state: 1 //武器违背拾取，当拾取后改状态转变为0
};
```
处理按键
```javascript
var keysDown = {};
addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
}, false);
```
```javascript
if (!hero.weapon) {
    delete keysDown[75]; //攻击键“k”键，如果角色还未拾取武器，则“k”键无效
}
```
根据按键更新对象状态
```
var update = function (delta) {

}
```