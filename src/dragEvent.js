'use strict';

const con2 = document.querySelector("#con2");
const con2_list = document.querySelectorAll(".con2 .flex_img figure");
const con2_title = document.querySelector("#con2 h2");
const con2_cursor = document.querySelector("#con2_cursor");
const con2_cursor_img = con2_cursor.querySelector(".r");
const back_color_adress = ["#9c2925", "#6ca646", "#0e6460", "#b089d1", "#6ca646", "#ae885b", "#e0b14c", "#600c1d", "#d37f74" ];
const back_img = document.querySelectorAll("#swiper-wrapper figure .back_img img");
const back_color = document.querySelectorAll("#swiper-wrapper figure .back_color");
const link_box = document.querySelector("#main .sec3_link");


// funciton--------------------------------------------------------
function figureTransform(list, x, y, transition){
    for(let i = 0; i < list.length; i++){
        list[i].style.transition = `${i*transition}s`;
        list[i].style.transform = `translate3d( -${x*i}px, ${y}px, 0px)`;
    }
}

//애미네이션 효과--------------------------------------------------
figureTransform(con2_list, 500, 500, 0);
window.addEventListener("scroll", () => {
    
    if(scrollY > (link_box.offsetTop - 650)){
        link_box.classList.add("active");
    }

    if( scrollY > (con2.offsetTop - 600) ){
        if(con2_title.classList.contains("active")) return;
        setTimeout(() => {
            con2_title.classList.add("active");
        }, 3000);

        figureTransform(con2_list, 500, 0, 0.3);
        setTimeout( () => {
            for(let i = 0; i < con2_list.length; i++){
                con2_list[i].style.transition = `${i*0.3}s`;
                con2_list[i].style.transform = `translate3d( -${0}px, ${0}px, 0px)`;
            }
        } , 2000);
    }

    

});

//호버 넣기-------------------------------------------------------------------

for(let i = 0; i < back_color.length; i++){
    back_color[i].style.background = `${back_color_adress[i]}`
}
for(let i = 0; i < back_color.length; i++){
    back_color[i].addEventListener("mouseenter", () => {
        back_color[i].classList.add("active");
        back_img[i].style.opacity = "1";
        back_img[i].style.transform = "translateY(-100%) scale(1)";
    })
}
for(let i = 0; i < back_color.length; i++){
    back_color[i].addEventListener("mouseleave", () => {
        back_color[i].classList.remove("active");
        back_img[i].style.opacity = "0";
        back_img[i].style.transform = "translateY(-100%) scale(1.2)";
    })
}



//마우스 모양 바꾸기 및 클릭이벤트----------------------------------------------------------
con2.addEventListener("mouseenter", function(e){
    con2_cursor.classList.add("on");
    con2_cursor.style.left = "0px";
    con2_cursor.style.top = "0px";
});
con2.addEventListener("mouseleave", function(e){
    con2_cursor.classList.remove("on");
    con2_cursor.style.left = "50%";
    con2_cursor.style.top = "50%";
});
con2.addEventListener("mousemove", (e) => {
    con2_cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
})
con2.addEventListener("mousedown", () => {
    con2_cursor_img.classList.add("active");
    for(let i = 0; i < con2_list.length; i++){
        con2_list[i].classList.add("drag");
    }
})
con2.addEventListener("mouseup", () => {
    con2_cursor_img.classList.remove("active");
    for(let i = 0; i < con2_list.length; i++){
        con2_list[i].classList.remove("drag");
    }
})


//스와이퍼 ---------------------------------------------------------------------
let swiper = new Swiper(".con2", {

    speed: 1000,
    freeMode: true,
    spaceBetween: 0,
    slidesPerView:1,
    slidesPerView: "auto",
    freeModeMomentum: true,
    freeModeMomentumRatio: 2,
    freeModeMomentumVelocityRatio: 2,
    
});

