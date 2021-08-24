'use strict';

const con1 = document.querySelector(".main_video");
const video = document.querySelector("#main .main_video video");
const timer = document.querySelectorAll("#timer");
const banner = document.querySelectorAll("#main .main_video .slides .banner");
const banner_background = document.querySelectorAll("#main .main_video .slides .banner .back");
const little_title = document.querySelectorAll("#little_title");
const sub_text = document.querySelectorAll("#sub_text");
const con1_title = document.querySelectorAll(".main_video .slides .title h2");
const video_Width = 1920;
const video_Height = 1080;
const windowHeight = "100vh";
let num = 0;
let index = 1;
let windowWidth = window.innerWidth;
let left_endpoint;
let right_startpoint;
let xPos1 = 0;
let xpos2 = 0;
video.currentTime = 19;

//Function-----------------------------------------------
function intro(){
    
}
function bannerActiveRemove(num){
    if(num != null) {
        banner_background[num].classList.remove("active");
        timer[num].classList.remove("active");
        little_title[num].classList.remove("active");
        sub_text[num].classList.remove("active");
        con1_title[num].classList.remove("active");
    }
    return;
}
function bannerActiveAdd(index){
    little_title[index].classList.add("active");
    sub_text[index].classList.add("active");
    banner_background[index].classList.add("active");
    timer[index].classList.add("active");
    con1_title[index].classList.add("active");
}
function bannerFunction(){
        bannerActiveRemove(num);
        bannerActiveAdd(index);
        num = index;
        index++;
        xPos1 = 0;
        xpos2 = 0;
        if(index == 4) index = 0;
        switch(index){
            case 0: video.currentTime = 19;
            break;
            case 1: video.currentTime = 113;
            break;
            case 2: video.currentTime = 159;
            break;
            case 3: video.currentTime = 49;
            break;
        }
}
function draw(){
    // ctx.drawImage(image, 
    // sx(원본 x위치), sy(원본 y위치), sWidth(그려지길 원하는 위드값), sHeight(그려지길 원하는 하이트값), 
    // dx(캔버스 x위치), dy(캔버스 y위치), dWidth(그려지는 위드값), dHeight(그려지는 하이트값));
    const canvas_left_prev = document.querySelector(".main_video .next");
    const context = canvas_left_prev.getContext("2d");

    left_endpoint = ( windowWidth / 2 ) + 240 * ( num - 2 );
    right_startpoint = left_endpoint;
    
    context.clearRect(0, 0, canvas_left_prev.width, canvas_left_prev.height );

    context.drawImage(video, 0, 0, xPos1, 1080,  0, 0, xPos1, canvas_left_prev.height);
    context.drawImage(video, left_endpoint, 0, 1920-left_endpoint, video_Height, right_startpoint, 0, xpos2, video_Height);

    if(xPos1 < left_endpoint){
        xPos1 += 40;
    }
    if(xpos2 < canvas_left_prev.width - left_endpoint){
        xpos2 += 40;
    }
    requestAnimationFrame(draw);
}

function drawing(){
    const newCanvas = document.createElement("canvas");
    newCanvas.textContent = "이 브라우저는 캔버스를 지원하지 않습니다";
    newCanvas.id = "cvs";
    newCanvas.classList.add("cvs");
    newCanvas.classList.add("next");
    newCanvas.width = 1920;
    newCanvas.height = 1080;
    con1.prepend(newCanvas);


}

//banner 영상 재생시간 및 타이머 시간 7초!-------------------------
let loop1 = setInterval(bannerFunction, 7000);
bannerActiveAdd(0);
for(let i = 0; i < banner.length; i++){
    banner[i].addEventListener("click", function(){
        clearInterval(loop1);
        index = i;
        bannerFunction();
        loop1 = setInterval(bannerFunction, 7000);
    });
}



// DOMContentLoaded