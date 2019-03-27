var canvas = document.getElementById('viewing');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
/*document.body.appendChild(canvas);*/
var keyFrame = true;

//背景图片
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;

};
bgImage.src = 'img/bg.png';
//人物图片
//1
var linkReady01 = false;
var linkImage01 = new Image();
linkImage01.onload = function () {
    linkReady01 = true;

};
linkImage01.src = 'img/1.png';
//2
var linkReady02 = false;
var linkImage02 = new Image();
linkImage02.onload = function () {
    linkReady02 = true;

};
linkImage02.src = 'img/2.png';
//6
var linkReady03 = false;
var linkImage03 = new Image();
linkImage03.onload = function () {
    linkReady03 = true;

};
linkImage03.src = 'img/6.png';
//9
var linkReady04 = false;
var linkImage04 = new Image();
linkImage04.onload = function () {
    linkReady04 = true;

};
linkImage04.src = 'img/9.png';
//-1
var linkReady05 = false;
var linkImage05 = new Image();
linkImage05.onload = function () {
    linkReady05 = true;

};
linkImage05.src = 'img/-1.png';
//-2
var linkReady06 = false;
var linkImage06 = new Image();
linkImage06.onload = function () {
    linkReady06 = true;

};
linkImage06.src = 'img/-2.png';
//-6
var linkReady07 = false;
var linkImage07 = new Image();
linkImage07.onload = function () {
    linkReady07 = true;

};
linkImage07.src = 'img/-6.png';
//-9
var linkReady08 = false;
var linkImage08 = new Image();
linkImage08.onload = function () {
    linkReady08 = true;

};
linkImage08.src = 'img/-9.png';
//剑
var swardReady = false;
var swardImage = new Image();
swardImage.onload = function () {
    swardReady = true;
};
swardImage.src = 'img/sward.png';
//获得剑
var linkReady09 = false;
var linkImage09 = new Image();
linkImage09.onload = function () {
    linkReady09 = true;

};
linkImage09.src = 'img/4.png';
//14
var linkReady10 = false;
var linkImage10 = new Image();
linkImage10.onload = function () {
    linkReady10 = true;

};
linkImage10.src = 'img/14.png';
//-14
var linkReady11 = false;
var linkImage11 = new Image();
linkImage11.onload = function () {
    linkReady11 = true;

};
linkImage11.src = 'img/-14.png';
//64
var linkReady12 = false;
var linkImage12 = new Image();
linkImage12.onload = function () {
    linkReady12 = true;

};
linkImage12.src = 'img/64.PNG';
//-64
var linkReady13 = false;
var linkImage13 = new Image();
linkImage13.onload = function () {
    linkReady13 = true;

};
linkImage13.src = 'img/-64.PNG';
//游戏对象
var hero = {
    state: 1,
    killState: 0,
    speed: 80,
    x: 0,
    y: 0,
    weapon: false
};
var sward = {
    x: canvas.width / 2,
    y: canvas.width /2,
    state: 1
};

//处理按键
var keysDown = {};
addEventListener('keydown',function (e) {
    keysDown[e.keyCode] = true;
    },false);
addEventListener('keyup',function (e) {
    delete keysDown[e.keyCode];
    },false);

//更新对象
var update = function (modifier) {
        if (87 in keysDown) {//up38 w87

            if (hero.state === -1) {
                hero.state = -2;
            }else {
                hero.state = -1;
            }
            if(hero.y > 0){
                hero.y -= hero.speed * modifier;
            }
        } else if (83 in keysDown) {//down40 s83

            if (hero.state === 1) {
                hero.state = 2;
            }else {
                hero.state = 1;
            }
            if ( hero.y < (canvas.height-40)) {
                hero.y += hero.speed * modifier;
            }
        } else if (65 in keysDown) {//left37 a65
            if (hero.state === -6) {
                hero.state = -9;
            }else {
                hero.state = -6;
            }
            if (hero.x >0){
                hero.x -= hero.speed * modifier;
            }
        } else if (68 in keysDown) {//right39 d68
            if (hero.state ===6) {
                hero.state = 9;
            }else {
                hero.state = 6;
            }
            if( hero.x < (canvas.width-40)){
                hero.x += hero.speed * modifier;
            }
        }

        if(75 in keysDown){
            if(hero.state === 1 || hero.state===2){
                hero.killState = 14;
            }else if (hero.state === -1 || hero.state===-2){
                hero.killState = -14;
            }else if (hero.state === 6 || hero.state===9){
                hero.killState = 64;
            }else if (hero.state === -6 || hero.state===-9){
                hero.killState = -64;
            }
        }

        var swardDeltaX = Math.abs(hero.x-sward.x);
        var swardDeltaY = Math.abs(hero.y-sward.y);
        if(sward.state === 1){
            if(swardDeltaX <= 40 && swardDeltaX >= 0 && swardDeltaY <= 18 && swardDeltaY >= 0){
                hero.weapon = true;
                sward.state = 0;
                hero.state = 4;
            }
        }

};
var render = function () {
    if(bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if(linkImage09 && hero.state ===4){
        ctx.drawImage(linkImage09, hero.x, hero.y-40);
        keyFrame = false;
        window.setTimeout(function () {
            keyFrame = true;
        },500);
    }
    if(swardReady && sward.state===1){
        ctx.drawImage(swardImage, sward.x, sward.y);
    }
    if(hero.killState === 0){
        if(linkReady01 && hero.state ===1){
            ctx.drawImage(linkImage01, hero.x, hero.y);
        }else if(linkReady02 && hero.state ===2){
            ctx.drawImage(linkImage02, hero.x, hero.y);
        }else if(linkReady03 && hero.state ===6){
            ctx.drawImage(linkImage03, hero.x, hero.y);
        }else if(linkReady04 && hero.state ===9){
            ctx.drawImage(linkImage04, hero.x, hero.y);
        }else if(linkReady05 && hero.state ===-1){
            ctx.drawImage(linkImage05, hero.x, hero.y);
        }else if(linkReady06 && hero.state ===-2){
            ctx.drawImage(linkImage06, hero.x, hero.y);
        }else if(linkReady07 && hero.state ===-6){
            ctx.drawImage(linkImage07, hero.x, hero.y);
        }else if(linkReady08 && hero.state ===-9){
            ctx.drawImage(linkImage08, hero.x, hero.y);
        }
    }
    if(hero.weapon){
        if(linkReady10 && hero.killState === 14){
            ctx.drawImage(linkImage10, hero.x, hero.y);
            hero.killState = 0;
            delete keysDown[75];
        }else if(linkReady11 && hero.killState === -14){
            ctx.drawImage(linkImage11, hero.x, hero.y -40);
            hero.killState = 0;
            delete keysDown[75];
        }else if(linkReady12 && hero.killState === 64){
            ctx.drawImage(linkImage12, hero.x, hero.y);
            hero.killState = 0;
            delete keysDown[75];
        }else if(linkReady13 && hero.killState === -64){
            ctx.drawImage(linkImage13, hero.x-40, hero.y);
            hero.killState = 0;
            delete keysDown[75];
        }
    }else {
        if(linkReady01 && hero.state ===1){
            ctx.drawImage(linkImage01, hero.x, hero.y);
        }else if(linkReady02 && hero.state ===2){
            ctx.drawImage(linkImage02, hero.x, hero.y);
        }else if(linkReady03 && hero.state ===6){
            ctx.drawImage(linkImage03, hero.x, hero.y);
        }else if(linkReady04 && hero.state ===9){
            ctx.drawImage(linkImage04, hero.x, hero.y);
        }else if(linkReady05 && hero.state ===-1){
            ctx.drawImage(linkImage05, hero.x, hero.y);
        }else if(linkReady06 && hero.state ===-2){
            ctx.drawImage(linkImage06, hero.x, hero.y);
        }else if(linkReady07 && hero.state ===-6){
            ctx.drawImage(linkImage07, hero.x, hero.y);
        }else if(linkReady08 && hero.state ===-9){
            ctx.drawImage(linkImage08, hero.x, hero.y);
        }
    }

};


var ftp = 10;
var main = function () {
    var now = Date.now();
    var delta = now - then;

    if(keyFrame){
        update( delta/1000 );
        render();
    }

    then = now;

    window.setTimeout(function () {
        requestAnimationFrame(main);
    },1000/ftp);
};
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame ;

var then = Date.now();
