var fullImgContainer = document.getElementById('imgcontainer');
var mainImg = document.getElementById('mainImg');

function openImg(picPath) {

    fullImgContainer.style.display = 'flex';
    mainImg.src = picPath;

}

function closeImg() {
    fullImgContainer.style.display = 'none';

}