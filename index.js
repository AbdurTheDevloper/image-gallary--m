let fullImgBox = document.getElementById('fullImgBox');
let fullImg = document.getElementById('fullImg');

function openImg(pic){
   fullImgBox.style.display = 'flex';
   fullImg.src = pic;
}

function closeBtn(){
   fullImgBox.style.display = 'none';
}