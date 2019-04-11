# [伪]林克的大冒险
使用html5新API——canvas与requestAnimationFrame开发游戏。游戏可以理解为一种动画形式，以一帧一帧连续播放图像产生动作效果，以不同的动作效果反馈用户的操作来实现交互。
## 基础构成
地图、武器、角色
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
### 背景载入
载入背景贴图：且声明一个布尔值判断背景贴图是否载入完成
```javascript
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'bg.png';
```
### 游戏对象载入
载入武器与角色贴图：声明一个二维数组，二维数组每一项的第一项为判断对象贴图是否载入完成的布尔值。
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
### 游戏对象状态
hero.stats = 1 林克正面a
hero.stats = 2 林克正面b
hero.stats = -1 林克背面a
hero.stats = -2 林克背面a
hero.stats = 6 林克右侧a
hero.stats = 9 林克右侧b
hero.stats = -6 林克左侧a
hero.stats = -9 林克左侧a

hero.killState = 0 未拾取武器
hero.killState = 14 林克正面挥剑
hero.killState = -14 林克背面挥剑
hero.killState = 64 林克右侧挥剑
hero.killState = -64 林克左侧挥剑
```javascript
var hero = {
    state: 1,  //角色未拾取武器前状态（正面or侧面or背面）
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
### 处理按键
声明一个对象，存储玩家的输入
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
### 根据按键更新对象状态
```javascript
var update = function(delta) {
    if (87 in keysDown) { //用户按下了w键
        if (hero.state === -1) { 
            hero.state = -2;
        } else {
            hero.state = -1;
        }
        hero.y -= hero.speed * modifier;
        if (hero.y <= 0) {
            hero.y = 0;
        }
    }
}
```