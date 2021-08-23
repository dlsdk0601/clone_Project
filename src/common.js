'use strict';
fetch("inc.html")
.then(res => res.text())
.then(data => init(data) )

function init(data){
    //header, footer create
    const header_footer = data.split("^");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header.innerHTML = header_footer[0];
    footer.innerHTML = header_footer[1];

    //header Event
    const dimmed = document.querySelector("#head .dimmed");
    const head = document.querySelector("header");
    const header_logo = document.querySelectorAll("#logo_svg .logo-txt");
    const header_menu = document.querySelectorAll("#head .menu ul li a");
    const serch_icon = document.querySelector("#head .header_right a");
    const middle_nav = document.querySelector("#head .middle_menu");
    const small_nav = document.querySelector("#head .small_menu");
    const menus = document.querySelectorAll("#head .middle_menu ul li");
    const menu_arrow = document.querySelectorAll("#head .middle_menu ul li span");
    const menu_small_arrow = document.querySelectorAll("#head .small_menu ul li span");
    const menu_Close_btn = document.querySelector("#head .small_menu .close_btn");
    const middle_nav_ul = document.querySelectorAll("#head .middle_menu ul");
    const small_nav_ul = document.querySelectorAll("#head .small_menu ul");
    let visible_middle_ul ="";




    //function------------------------------------------------
    function headerColorChange (hasActive){
        if(hasActive){
            //black
            for( let i = 0; i < header_logo.length; i++){
                header_logo[i].classList.add("svg_color");
            }
            for( let i = 0; i < header_menu.length; i++){
                header_menu[i].classList.add("active");
            }
            serch_icon.classList.add("active");
        }else{
            //white
            for( let i = 0; i < header_logo.length; i++){
                header_logo[i].classList.remove("svg_color");
            }
            for( let i = 0; i < header_menu.length; i++){
                header_menu[i].classList.remove("active");
            }
            serch_icon.classList.remove("active");
        }
    }
    function matchMenu(item, value){
        for(let i = 0; i < item.length; i++){
            item[i].classList.add("hidden");
            if( (item[i].classList.contains(value) ) ) {
                item[i].classList.remove("hidden");
                visible_middle_ul = item[i];
            }
        }
    }
    function textAnimation(item, value){
        if(item == "") {
            return;
        }
    
        const item_li = item.querySelectorAll("li");
        if(value){

            for(let i = 0; i < item_li.length; i++ ){
                setTimeout(function(){
                    item_li[i].classList.add("active_cre");
                }, i*150);
            }

            for(let i = 0; i < item_li.length; i++ ){
                setTimeout(function(){
                    item_li[i].classList.remove("active_hide");
                }, i*150);
            }

        }else{

            for(let i = 0; i < item_li.length; i++ ){
                setTimeout(function(){
                    item_li[i].classList.remove("active_cre");
                }, i*150);
            }
            for(let i = 0; i < item_li.length; i++ ){
                setTimeout(function(){
                    item_li[i].classList.add("active_hide");
                }, i*150);
            }
        }
        
    }


    // headerColorChange
    let scrollDefault = scrollY;
    window.addEventListener("scroll", () => {
        let scrSenond = scrollY;

        //text color change
        if( scrollY > 300 ){
            headerColorChange(true);
        }else{
            headerColorChange(false);
        }

        //header hide
        if( middle_nav.classList.contains("active") ) return;
        if(scrollDefault < scrSenond){
            head.classList.add("hide");
        }else{
            head.classList.remove("hide");
            head.classList.add("background");
            if(scrollY == 0) head.classList.remove("background");
        }
        scrollDefault = scrSenond;
    });


    //Navigation Event--------------------------------------------

    //middle create
    let num;
    for(let i = 0; i < 5; i++){
        header_menu[i].addEventListener("mouseenter", function(e){
            e.preventDefault();
            dimmed.classList.add("active");

            //mouseenter menu color change
            this.classList.add("enter_active");
            small_nav.classList.remove("active");
            if(num != null){
                header_menu[num].classList.remove("enter_active");
                this.classList.add("enter_active");
                menus[num].classList.add("active_hide");
            } 
            
            middle_nav.classList.add("active");
            small_nav.classList.remove("left_hidden");
            head.classList.add("whiteground");
            num = i;

            //middle_nav_list select
            textAnimation(visible_middle_ul, 0);

            const middle_nav_number = this.dataset.menunumber;
            matchMenu(middle_nav_ul, middle_nav_number);

            //li text animation
            textAnimation(visible_middle_ul, 1);
        });
    }

    //dimmed click
    dimmed.addEventListener("click", () => {
        middle_nav.classList.remove("active");
        small_nav.classList.remove("active");
        small_nav.classList.add("left_hidden");
        dimmed.classList.remove("active");
    })
    //navigation close
    menu_Close_btn.addEventListener("click", (e) => {
        e.preventDefault();
        middle_nav.classList.remove("active");
        small_nav.classList.remove("active");
        small_nav.classList.add("left_hidden");
        head.classList.remove("whiteground");
        dimmed.classList.remove("active");
        for(let i = 0; i < 5; i++){
            header_menu[i].classList.remove("enter_active");
        }
    });
    
    //small_nav create
    for(let i = 0; i < menus.length; i++){
        menus[i].addEventListener("mouseenter", function(){
            const dataset = this.dataset.value;
            const menu = this.dataset.menu;
            visible_middle_ul = "";
            textAnimation(visible_middle_ul, 0);
            if(dataset == "true"){
                small_nav.classList.add("active");
                matchMenu(small_nav_ul, menu);
            }else{
                small_nav.classList.remove("active");
                menu_arrow[i].classList.add("active");
            }
            textAnimation(visible_middle_ul, 1);
        });

        menus[i].addEventListener("mouseleave", function(){
            menu_arrow[i].classList.remove("active");
        })
    }

    //small_nav Arrow event
        for(let i = 0; i < menu_small_arrow.length; i++){
        menu_small_arrow[i].addEventListener("mouseenter", function(){
            this.classList.add("active");
        });
        menu_small_arrow[i].addEventListener("mouseleave", function(){
            this.classList.remove("active");
        });
    }
    
    //footer site_list
    const family_site_box = document.querySelector(".container .footer_menu .contact .site_menu");
    const site_list = document.querySelector(".container .footer_menu .contact ul");
    
    family_site_box.addEventListener("click", () => {
        site_list.classList.toggle("open");
    })




}




