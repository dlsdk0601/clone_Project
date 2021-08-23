const video_frame = document.querySelector(".con5");
const slideList = document.querySelector('.con5 .slide_wrap .slide_box .slide_list'); 
const slideContents = document.querySelectorAll('.con5 .slide_wrap .slide_box .slide_list .slide_content'); 
const slideBtnNext = document.querySelector('.con5 .slide_wrap .slide_box .slide_btn_next'); 
const slideBtnPrev = document.querySelector('.con5 .slide_wrap .slide_box .slide_btn_prev'); 
const slideLen = slideContents.length; 
const slide_width_tag = document.querySelector('.con5 .slide_wrap .slide_box');
const slideWidth  = slide_width_tag.offsetWidth; 
const slideSpeed = 300; 
const startNum = 0; 
const title1 = document.querySelectorAll(".con5 .con5_frame .video_frame .title1");
const title2 = document.querySelectorAll(".con5 .con5_frame .video_frame .title2");
const indigate_bar = document.querySelectorAll(".con5 .con5_frame .video_frame .indigate div");
const con5 = document.querySelector('.con5 .con5_frame'); 
const con5_cursor = document.querySelector('#con5_cursor'); 
const con5_left = document.querySelector(".con5 .con5_frame .video_frame .slide_btn_prev");
const con5_right = document.querySelector(".con5 .con5_frame .video_frame .slide_btn_next");
const con5_cursor_img_left = document.querySelector('#con5_cursor .arr_left'); 
const con5_cursor_img_right = document.querySelector('#con5_cursor .arr_right'); 
const con5_href_box = document.querySelectorAll('.con5 .con5_frame .video_frame .href_box div');
const con5_title =  document.querySelector(".con5 h2");
const hide_box = document.querySelector(".con5 .con5_frame .video_frame .hide_box");
slideList.style.width = slideWidth * (slideLen + 2) + "px";
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add('slide_active');

// default animation
window.addEventListener("scroll", () => {
    if( scrollY > con5.offsetTop - 500){
        hide_box.classList.add("hide");
        con5_title.classList.add("active");
    }
    
})


/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
if (curIndex <= slideLen - 1) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
}
if (curIndex === slideLen - 1) {
setTimeout(function() {
slideList.style.transition = "0ms";
slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
}, slideSpeed);
curIndex = -1;
}
curSlide.classList.remove('slide_active');
curSlide = slideContents[++curIndex];
curSlide.classList.add('slide_active');

// title animation----
for(let i = 0; i < title1.length; i++){
    title1[i].classList.toggle("current");
    title1[i].classList.toggle("prev");
    title2[i].classList.toggle("current");
    title2[i].classList.toggle("prev");
    indigate_bar[i].classList.toggle("active");
}
});
/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
if (curIndex >= 0) {
slideList.style.transition = slideSpeed + "ms";
slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
}
if (curIndex === 0) {
setTimeout(function() {
slideList.style.transition = "0ms";
slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
}, slideSpeed);
curIndex = slideLen;
}
curSlide.classList.remove('slide_active');
curSlide = slideContents[--curIndex];
curSlide.classList.add('slide_active');

// title animation----
for(let i = 0; i < title1.length; i++){
    title1[i].classList.toggle("current");
    title1[i].classList.toggle("prev");
    title2[i].classList.toggle("current");
    title2[i].classList.toggle("prev");
    indigate_bar[i].classList.toggle("active");
}
});

// mouse img change------------------------------------------
con5.addEventListener("mouseenter", () => {
    con5_cursor.classList.add("on");
    con5_cursor.style.left = "0px";
    con5_cursor.style.top = "0px";
});
con5.addEventListener("mouseleave", () => {
    con5_cursor.classList.remove("on");
    con5_cursor.style.left = "50%";
    con5_cursor.style.top = "50%";
});
con5.addEventListener("mousemove", (e) => {
    // con5_cursor_img.classList.toggle("right");
    if( e.clientX > (con5.offsetWidth / 2)){
        con5_cursor_img_right.classList.add("active");
        con5_cursor_img_left.classList.remove("active");
        con5_cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(-45deg) `;
    }else{
        con5_cursor_img_right.classList.remove("active");
        con5_cursor_img_left.classList.add("active");
        con5_cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(-45deg) `;
    }
    
});
for(let i = 0; i < con5_href_box.length; i++){
    con5_href_box[i].addEventListener("mouseenter", () => {
        con5_cursor.classList.remove("on");
    })
    con5_href_box[i].addEventListener("mouseleave", () => {
        con5_cursor.classList.add("on");
    })
}


