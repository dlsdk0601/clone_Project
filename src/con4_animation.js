const con4_title = document.querySelector(".con4 .con4_frame h2");
const con4 = document.querySelector(".con4");
const con4_left_content = document.querySelector("#left_sticky");;
const con4_right_contents = document.querySelectorAll("#news li")

const contentsSettime = (item) => {
    for(let i = 0; i < item.length; i++){
        setTimeout( () => {
            item[i].classList.add("on");
        }, 100*(i+1));
    }
}
window.addEventListener("scroll", () => {

    if( scrollY > con4.offsetTop - 200){
        con4_title.classList.add("on");
    }else if( scrollY > con4.offsetTop - 600){
        con4_left_content.classList.add("on");
        contentsSettime(con4_right_contents);
    }
    
})