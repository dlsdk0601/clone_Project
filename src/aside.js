'use strict';

const quickMenu = document.querySelector("#quickMenu");
const btn_open = document.querySelector("#quickMenu .btn-open");


btn_open.addEventListener("click", function(e){
    e.preventDefault();
    quickMenu.classList.toggle("open");
    
});