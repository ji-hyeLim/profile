// 반응형 중단점
let moblieWidth = window.matchMedia("screen and (max-width: 767px)");
let small_tabletWidth = window.matchMedia("screen and (min-width: 768px)");
let tabletWidth = window.matchMedia("screen and (max-width: 1023px)");
let largeTabletWidth = window.matchMedia("screen and (min-width: 1024px)"); //
let tablet_pcWidth = window.matchMedia("screen and (max-width: 1800px)");
let pcWidth = window.matchMedia("screen and (min-width: 1800px)");


// =============== header =============== //
// 모바일 메뉴 버튼
const nav_menu = document.querySelector(".nav_menu");

function mobile_menu() {
    nav_menu.classList.toggle("on");
    nav_menu.classList.remove("off");
}

//** 메뉴 마우스오버 이벤트 **//
const gnb = document.getElementById("gnb");
const gnb_li = document.querySelectorAll(".gnb li");
const lnb = document.querySelector(".lnb");
const gnb_pf = document.querySelector(".gnb_pf");
const gnb_pf_a = document.querySelector(".gnb_pf a");
const lnb_a = document.querySelectorAll(".lnb li a");

gnb_li.forEach(function(gnb_lili) {
    gnb_lili.addEventListener('click', function() {
        // nav_menu.style.display = none;
        nav_menu.classList.add("off");
        nav_menu.classList.remove("on");
    });
});

lnb_a.forEach(function(lnb_aa) {
    lnb_aa.addEventListener('click', function() {
        nav_menu.classList.add("off");
        nav_menu.classList.remove("on");
    });
});





if(moblieWidth.matches) {
    // 모바일
    gnb_pf.addEventListener("mouseover", function(e) {
        e.preventDefault();
        lnb.style.display = 'block';
    });

    gnb_pf.addEventListener("mouseout", function() {
        lnb.style.display = 'none';
    });

} else if(tablet_pcWidth.matches) {
    // 태블릿 & pc
    gnb_pf.addEventListener("mouseover", function() {
        lnb.style.display = 'block';
    });
    
    gnb_pf.addEventListener("mouseout", function() {
        lnb.style.display = 'none';
    });
} else {
    // desktop
    gnb_pf.addEventListener("mouseover", function() {
        lnb.style.display = 'block';
    });
    
    gnb_pf.addEventListener("mouseout", function() {
        lnb.style.display = 'none';
    });
}

// =============== main =============== //

// ==== skills ==== //
const skills = document.querySelectorAll(".lists");
const skills_a = document.querySelectorAll(".lists .btn"); //
const circle_area = document.querySelector(".circle_area");
const area_con = document.querySelectorAll(".area_con");
const area_wrap = document.querySelector(".area_wrap");
const modal = document.querySelector(".modal");
const del = document.querySelector(".delete");
let activeCont = '';


for(let i = 1; i < 12; i++) {
    area_con[i].style.display = "none";
}

skills.forEach(function(lists) {

    //** 스킬 모달 띄우기 **//
    lists.addEventListener("click", function(e) {
        e.preventDefault();

        if(tabletWidth.matches) {
            circle_area.style.display = "block";
            del.style.display = "block";
            area_con.forEach(function(area_c) {
                area_c.style.display = "none";
            });
    
            activeCont = this.getAttribute('href');
            document.querySelector(activeCont).style.display = "block";
        } else {
            del.style.display = "none"; 
        }
    });


    //** 스킬 마우스 오버 이벤트 **//
    lists.addEventListener("mouseover", function() {
        area_wrap.style.display = "block";

        area_con.forEach(function(area_c) {
            area_c.style.display = "none";
        });

        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = "block";
    });
});

//** 스킬 모달 닫기 **//
del.addEventListener("click", function() {
    circle_area.style.display = "none";
    del.style.display = "none";
});



// ==== protfolio ==== //

// protfolio star
function init() {
    
    //estrelas
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var estrela = "";
    var qtdeEstrelas = 2000;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = document.body.scrollHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
        + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
        + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;
}

window.onload = init;


// ==== contact ==== //
let con_arr = ["git", "kakao", "message"];
const contact_icon = document.querySelectorAll(".tablet_icon");


const icon_last = document.querySelectorAll(".icon");

icon_last.forEach(function(con){
    con.addEventListener("mouseover", function() {
        
            if(con.id == "git") {
                git.src = `./image/icon/contact/git_yellow.png`;
            }
            if (con.id == "kakao"){
                kakao.src = `./image/icon/contact/kakao_yellow.png`;
            }
            if (con.id == "message"){
                message.src = `./image/icon/contact/message_yellow.png`;
            }                
    });

    con.addEventListener("mouseout", function() {
        
        if(con.id == "git") {
            git.src = `./image/icon/contact/git.png`;
        }
        if (con.id == "kakao"){
            kakao.src = `./image/icon/contact/kakao.png`;
        }
        if (con.id == "message"){
            message.src = `./image/icon/contact/message.png`;
        }                
    });
});



// ==== 스크롤 이벤트 ==== //
// 스크롤 배경색 이벤트
const pro_bg = document.querySelectorAll(".pro_bg");
const constelacao = document.querySelector(".constelacao");

window.addEventListener("scroll", () => {
    let currentSection = "";
    
    pro_bg.forEach(section => {
        const sectionTop = window.scrollY + section.getBoundingClientRect().top - 1;
        if(window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
        const title_p = document.querySelector(".second p");
        const mini_title = document.getElementById("mini_title")
        const gnb = document.getElementById("gnb");
        // const gnb_a = document.querySelectorAll(".gnb li a");
        const cloud_top = document.getElementById("cloud_top");
        const menu = document.querySelector(".menu");
        const main_btn = document.getElementById("main_btn");
        const menu_btn = document.getElementById("menu_btn");
        
        if (currentSection == "protfolio_list") {
            document.body.style.background= "#5a7cb1";
            // menu.style.background = "#5a7cb1";
            main_btn.src = "./image/icon/button/Moon_btn_white.png";
            menu_btn.src = "./image/icon/button/menu_white.png";
            title_p.style.display = "block";
            mini_title.style.opacity = 0;
            constelacao.style.opacity = 0;
            cloud_top.classList.replace("cloud_top", "cloud_top_white");
            // console.log(gnb_a);
            
            // gnb_a.style.color = "white";

            if(small_tabletWidth.matches) {
            }

            if (pcWidth.matches) {
                gnb.classList.replace("gnb", "gnb_change");
            }

            
        } else if(currentSection == "js_re_protfolio" || currentSection == "reactProtfolio") {
            document.body.style.background = "-webkit-linear-gradient(top,rgb(43, 32, 72)50%, rgb(0, 0, 0))25%";
            main_btn.src = "./image/icon/button/Moon_btn.png";
            menu_btn.src = "./image/icon/button/menu.png";
            menu.style.background = "transparent";
            constelacao.style.opacity = 1;
            mini_title.style.opacity = 1;
            cloud_top.classList.replace("cloud_top_white", "cloud_top");

        } else {
            document.body.style.background = "#ffffff";
            main_btn.src = "./image/icon/button/Moon_btn.png";
            menu_btn.src = "./image/icon/button/menu.png";
            // menu.style.background = "white";
            title_p.style.display = "none";
            cloud_top.classList.replace("cloud_top_white", "cloud_top");

            if(small_tabletWidth.matches) {
                gnb.style.color = "#5a7cb1";
            }
            
            if (pcWidth.matches) {
                gnb.classList.replace("gnb_change", "gnb");
            }
        } 
    }); 
});

// 스크롤 동작 이벤트
if(largeTabletWidth.matches) {
    window.addEventListener("scroll", () => {
        const pro_list = document.querySelectorAll(".pro_list");

        let pro_01 = "";
        let pro_02 = "";
        let pro_03 = "";

        pro_list.forEach(list => {
            const sectionTop = window.scrollY + list.getBoundingClientRect().top;
            
            if(window.scrollY >= sectionTop) {
                pro_01 = list.getAttribute("id");
                pro_02 = list.getAttribute("id");
                pro_03 = list.getAttribute("id");
            }
            
            const protfolio01 = document.getElementById("protfolio01");
            const protfolio02 = document.getElementById("protfolio02");
            const protfolio03 = document.getElementById("protfolio03");
            const as_c_b = document.querySelector(".as_c_b");
            const bs_c_b = document.querySelector(".bs_c_b");
            const pro_c_b = document.querySelector(".pro_c_b");
            const title_h2_1 = document.querySelector(".title_h2_1");
            const title_h2_2 = document.querySelector(".title_h2_2");
            const title_h2_3 = document.querySelector(".title_h2_3");

            if (pro_01 == "protfolio01") {
                // protfolio01.style.opacity = 1;
                as_c_b.style.animation = "moon_open_as 1s";
                title_h2_1.style.animation = "highlighter_1 1s";
                
            } else {
                // protfolio01.style.opacity = 0;
            }
            
            if (pro_02 == "protfolio02") {
                // protfolio02.style.opacity = 1;
                bs_c_b.style.animation = "moon_open_bs 1s";
                title_h2_2.style.animation = "highlighter_2 1s";
                
            } else {
                // protfolio02.style.opacity = 0;
            }
            
            if (pro_03 == "protfolio03") {
                // protfolio03.style.opacity = 1;
                pro_c_b.style.animation = "moon_open_pro 1s";
                title_h2_3.style.animation = "highlighter_3 1s";
                
            } else {
                // protfolio03.style.opacity = 0;
            }
        });
    });
}

const prot01 = document.getElementById("protfolio01");


// 클릭 이벤트
console.log(prot01);
function protfolio01() {
    prot01.style.opacity = 1;
}

// //** 스크롤 이벤트 **//
$( function() {

    // 스크롤 부드럽게
    $('.scroll').click(function(e) {
        e.preventDefault();
        $('html').animate({scrollTop: $(this.hash).offset().top}, 300);
    });

    $(document).ready(function() {
        function checkVisible( element, check = 'above' ) {
            const viewportHeight = $(window).height();
            const scrolltop = $(window).scrollTop();
            const y = $(element).offset().top;
            const elementHeight = $(element).height();   
            

            if (check == "visible") 
                return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
                
            if (check == "above") 
                return ((y < (viewportHeight + scrolltop)));
        }

        let isVisible = false;

        $('.gnb').hide();
        $('#aboutMe_box').hide();
        $('#cloud_top').hide();
        const side_menu = function() {
            if ( checkVisible('.introduce') == true ) {
                $('.gnb').fadeIn('slow');
                $('#aboutMe_box').fadeIn('slow');
                $('#cloud_top').fadeIn('slow');
                $('#intro-main').css('animation','highlighter_main 1s')
                isVisible = true;
            }
        }

        // 스크롤 이벤트
        window.addEventListener('scroll', side_menu );

        $('.as_c_b').hide();
        $('#gomusin_box').hide();
        $('#whac_a_mole_box').hide();
        $('#todolist_box').hide();
        // $('#vibe_box').hide();
        $('.contact').hide();

        $(window).on('scroll',function() {
            
            // if (checkVisible($('#protfolio01').find('.flex-box'))&&!isVisible) {
            //     $('.as_c_b').show();
            // }
            
            if (checkVisible($('#gomusin')) == true) {
                
                $('#gomusin_box').fadeIn("slow");
            }

            if (checkVisible($('#whac_a_mole')) == true) {
                $('#whac_a_mole_box').fadeIn("slow");
            } 

            if (checkVisible($('#todolist')) == true) {
                $('#todolist_box').fadeIn("slow");
            } 

            // if (checkVisible($('#vibe')) == true) {
            //     $('#vibe_box').fadeIn("slow");
            // } 

            if (checkVisible($('.third')) == true) {
                $('.contact').fadeIn("slow");
            } 
        });
    
        function checkVisible( elm, eval ) {
            eval = eval || "object visible";
            var viewportHeight = $(window).height(),
                scrolltop = $(window).scrollTop(),
                y = $(elm).offset().top,
                elementHeight = $(elm).height();   
            
            if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
            if (eval == "above") return ((y < (viewportHeight + scrolltop)));
        }
    });
});

