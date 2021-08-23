const con3_prev_btn = document.querySelector(".con3 .swiper-button-prev");
const con3_next_btn = document.querySelector(".con3 .swiper-button-next");
const con3_cursor = document.querySelector("#con3_cursor");
const con3_arr_left = document.querySelector("#con3_cursor .con3_arr_left");
const con3_arr_right = document.querySelector("#con3_cursor .con3_arr_right");
const sub_title_el = document.querySelector(".con3 .right_content .subs h2");
const sub_text_el = document.querySelector(".con3 .right_content .subs .subs_text");
const sub_color_text_el = document.querySelector(".con3 .right_content .color_font");
const timer_name = ["제품", "효능", "분석", "화장품", "글로벌"];
const sub_text_arr = ["최고를 향해 바른길을 걷기 위하여",
    "인류의 건강한 삶을 위하여", "끊임없는 도전과 혁신의 여정", 
    "홍삼의 힘을 피부에 전달하는 독자적 기술", "세계적 명품의 자리를 지키기 위하여"];
const sub_color_text = ["차별화된 제품개발 기술과 신소재 발굴로 혁신을 이룹니다.",
"홍삼 및 천연물 효능과 원료 안전성 연구로 건강한 미래를 만듭니다.",
"인삼 재배기술, 품종개발 등의 분석연구로 R&D기술을 선도합니다.",
"홍삼의 피부효능 연구와 차별화된 제품개발로 뷰티시장을 이끕니다.",
"해외 수출제품 개발과 현지연구로 명품의 가치를 세계에 전파합니다."];
const color_className = ["#B97924", "#438DB0", "#7C9E46", "#D15C3F", "#D15C3F"];
let text_loop_num = 0


//text animation
// sub_title_el.classList.add("up");
// sub_text_el.classList.add("up");
// sub_color_text_el.classList.add("up");
const sub_text_Change = () => {
    sub_title_el.classList.remove("up");
    sub_text_el.classList.remove("up");
    sub_color_text_el.classList.remove("up");

    sub_title_el.textContent = timer_name[text_loop_num] + "분야";
    sub_text_el.textContent = sub_text_arr[text_loop_num];
    sub_color_text_el.textContent = sub_color_text[text_loop_num];
    sub_color_text_el.style.color = color_className[text_loop_num];

    sub_title_el.classList.add("up");
    sub_text_el.classList.add("up");
    sub_color_text_el.classList.add("up");
    text_loop_num++;
    if(text_loop_num == 6) text_loop_num = 0;
}
let text_loop = setInterval(sub_text_Change, 7000);


//swiper Event-----------------------------------------------------------------------------
let con3_swiper = new Swiper("#con3_left_content", {
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
let con3_swiper_right = new Swiper("#right_content", {
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
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//swiper timbar Text put in
const timer_spans = document.querySelectorAll(".con3 .swiper-pagination .swiper-pagination-bullet"); 
//이거 여기 이 행 아닌곳에 쓰면 안잡힘.
for(let i = 0; i < timer_spans.length; i++){
    timer_spans[i].textContent = timer_name[i];
}
console.log(timer_spans);


//arrow image
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


// window.addEventListener('DOMContentLoaded', function(){});
