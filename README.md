# [伪]林克的大冒险
## 简介
游戏角色使用W\A\S\D上下左右移动，使用K攻击。
## 素材
背景贴图
武器贴图：剑
角色贴图：
* 林克正面贴图a、林克正面贴图b
* 林克侧面贴图a（左）、林克侧面贴图b（左）
* 林克侧面贴图a（右）、林克侧面贴图b（右）
* 林克背面贴图a、林克背面贴图b
* 林克正面挥剑贴图
* 林克侧面挥剑（左）
* 林克侧面挥剑（右）
* 林克背面挥剑

## 代码
### 画布
```html
<canvas id="viewing"></canvas>
```
```javascript
var canvas = document.getElementById('viewing');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
```
### 背景
载入背景贴图；且声明一个布尔值表示背景贴图是否载入完成
```javascript
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'bg.png';
```
### 游戏对象
载入武器与角色贴图；声明一个二维数组，数组的每一项的第一项
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