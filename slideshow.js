// 实训7 制作轮播图定时器
// 每隔 1 秒切换一张图片，同时切换下方文字；最后一张播完后重新循环

// 1. 获取轮播图容器与文字元素
var slideshow = document.getElementById('slideshow');
var slideImg = document.getElementById('slideImg');
var caption = document.getElementById('caption');
var dotsBox = document.getElementById('dots');

// 2. 图片与对应文字数组（可替换为本地图片或在线图片链接）
var images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
];

var titles = [
    '图片1',
    '图片2',
    '图片3',
    '图片4'
];

var currentIndex = 0;
var timer = null;
var interval = 1000; // 每隔 1 秒切换一张

// 3. 生成指示点
var dots = [];
for (var i = 0; i < images.length; i++) {
    var dot = document.createElement('span');
    dot.className = 'dot';
    dotsBox.appendChild(dot);
    dots.push(dot);
}

// 4. 切换到下一张图片的函数
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // 最后一张播放完成后重新开始
    }
    showImage();
}

// 5. 显示当前图片、文字和指示点状态
function showImage() {
    slideImg.src = images[currentIndex];
    caption.textContent = titles[currentIndex];
    for (var i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].className = 'dot active';
        } else {
            dots[i].className = 'dot';
        }
    }
}

// 6. 鼠标悬停暂停播放，鼠标离开重新开始
slideshow.addEventListener('mouseenter', function () {
    clearInterval(timer);
    timer = null;
});

slideshow.addEventListener('mouseleave', function () {
    if (timer === null) {
        timer = setInterval(nextImage, interval);
    }
});

// 7. 网页加载完成后先显示第一张图片
showImage();

// 8. 启动定时器，每隔 1 秒自动切换
timer = setInterval(nextImage, interval);
