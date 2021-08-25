'use strict';

const con3 = document.querySelector(".con3");
const con3_prev_btn = document.querySelector(".con3 .swiper-button-prev");
const con3_next_btn = document.querySelector(".con3 .swiper-button-next");
const con3_cursor = document.querySelector("#con3_cursor");
const con3_arr_left = document.querySelector("#con3_cursor .con3_arr_left");
const con3_arr_right = document.querySelector("#con3_cursor .con3_arr_right");
let text_loop_num = 0;
const timer_name = ["제품", "효능", "분석", "화장품", "글로벌"];
const txt = document.querySelectorAll(".con3 .right_content .subs .txt");
const con3_left_content = document.querySelector(".con3 .left_content");
const con3_right_content = document.querySelector(".con3 .right_content");



// function
const sub_text_hide = () => {

    const txt_h2_prev = txt[text_loop_num].querySelector("h2");
    const txt_subs_text_prev = txt[text_loop_num].querySelector(".subs_text");
    const txt_color_font_prev = txt[text_loop_num].querySelector(".color_font");
    const sub =[];

    sub.push(txt_h2_prev);
    sub.push(txt_subs_text_prev);
    sub.push(txt_color_font_prev);

    
    for(let i = 0; i < 3; i++){
        setTimeout( () => {
            sub[i].style.opacity = 0;
            sub[i].style.transform = "translate(0, 0)";
        }, 300*i);
    }

}
const sub_text_animation = () => {

    const txt_h2 = txt[text_loop_num].querySelector("h2");
    const txt_subs_text = txt[text_loop_num].querySelector(".subs_text");
    const txt_color_font = txt[text_loop_num].querySelector(".color_font");
    const sub =[];

    sub.push(txt_h2);
    sub.push(txt_subs_text);
    sub.push(txt_color_font);
    
    if( sub[0].style.opacity == 1 ) return;
    for(let i = 0; i < 3; i++){
        setTimeout( () => {
            sub[i].style.opacity = 1;
            sub[i].style.transform = "translate(0, -20px)";
        }, 300*(i+1));
    }
}

function con3_init(){
    //swiper Event-----------------------------------------------------------------------------
    sub_text_animation();
    let con3_swiper = new Swiper("#con3_left_content", {
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        controller: {
            inverse: true,
        },
    });

    con3_swiper.on("slideChange", function(){
        sub_text_hide();
        text_loop_num = con3_swiper.realIndex;
        sub_text_animation();
    })

    let con3_swiper_right = new Swiper("#right_content", {
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        direction: "vertical",
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //swiper timbar Text put in--------------------------------------------------
    const timer_spans = document.querySelectorAll(".con3 .swiper-pagination .swiper-pagination-bullet"); 
    //이거 여기 이 행 아닌곳에 쓰면 안잡힘.
    for(let i = 0; i < timer_spans.length; i++){
        timer_spans[i].textContent = timer_name[i];
    }
}



//arrow image Event
con3_prev_btn.addEventListener("mouseenter", () => {
    con3_cursor.classList.add("on");
    con3_cursor.style.left = "0px";
    con3_cursor.style.top = "0px";
});
con3_prev_btn.addEventListener("mouseleave", () => {
    con3_cursor.classList.remove("on");
    con3_cursor.style.left = "50%";
    con3_cursor.style.top = "50%";
    con3_arr_left.classList.remove("active");
});
con3_next_btn.addEventListener("mouseenter", () => {
    con3_cursor.classList.add("on");
    con3_cursor.style.left = "0px";
    con3_cursor.style.top = "0px";
});
con3_next_btn.addEventListener("mouseleave", () => {
    con3_cursor.classList.remove("on");
    con3_cursor.style.left = "50%";
    con3_cursor.style.top = "50%";
    con3_arr_right.classList.remove("active");
});
con3_next_btn.addEventListener("mousemove", (e) => {
    con3_arr_right.classList.add("active");
    con3_arr_right.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(-45deg) `;
});
con3_prev_btn.addEventListener("mousemove", (e) => {
    con3_arr_left.classList.add("active");
    con3_arr_left.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(-45deg) `;
});


//active
con3_init();
window.addEventListener("scroll", () => {
    const con3_Top = con3.offsetTop;
    if( con3_Top - 500 < scrollY){
        con3_left_content.classList.add("active");
        con3_right_content.classList.add("active");
        
    }
})
