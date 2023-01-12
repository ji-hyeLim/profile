// 반응형 중단점
let moblieWidth = window.matchMedia("screen and (max-width: 767px)");
// let medium_tabletWidth = window.matchMedia("screen and (min-width: 900px)");
let tabletWidth = window.matchMedia("screen and (max-width: 1023px)");
let largeTabletWidth = window.matchMedia("screen and (min-width: 1024px)"); //
let tablet_pcWidth = window.matchMedia("screen and (max-width: 1800px)");


// =============== header =============== //
// 모바일 메뉴 버튼
function mobile_menu() {
    const nav_menu = document.querySelector(".nav_menu");
    nav_menu.classList.toggle("on");
}

//** 메뉴 마우스오버 이벤트 **//
const lnb = document.querySelector(".lnb");
const gnb = document.querySelector(".gnb_pf");
const gnb_a = document.querySelector(".gnb_pf a");

if(moblieWidth.matches) {
    // 모바일
    gnb.addEventListener("mouseover", function(e) {
        e.preventDefault();
        lnb.style.display = 'block';
    });

    gnb.addEventListener("mouseout", function() {
        lnb.style.display = 'none';
    });

} else if(tablet_pcWidth.matches) {
    // 태블릿 & pc
    gnb.addEventListener("mouseover", function() {
        lnb.style.display = 'block';
    });
    
    gnb.addEventListener("mouseout", function() {
        lnb.style.display = 'none';
    });
} else {
    // desktop
    gnb.addEventListener("mouseover", function() {
        lnb.style.display = 'block';
    });
    
    gnb.addEventListener("mouseout", function() {
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
        const cloud_top = document.getElementById("cloud_top");
        
        if (currentSection == "protfolio_list") {
            document.body.style.background= "#5a7cb1";
            title_p.style.display = "block";
            mini_title.style.opacity = 0;
            constelacao.style.opacity = 0;
            gnb.classList.replace("gnb", "gnb_change");
            cloud_top.classList.replace("cloud_top", "cloud_top_white");
            
        } else if(currentSection == "js_re_protfolio" || currentSection == "reactProtfolio") {
            document.body.style.background = "-webkit-linear-gradient(top,rgb(43, 32, 72)50%, rgb(0, 0, 0))25%";
            constelacao.style.opacity = 1;
            mini_title.style.opacity = 1;
            cloud_top.classList.replace("cloud_top_white", "cloud_top");
        } else {
            document.body.style.background = "#ffffff";
            title_p.style.display = "none";
            gnb.classList.replace("gnb_change", "gnb");
            cloud_top.classList.replace("cloud_top_white", "cloud_top");
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
                protfolio01.style.opacity = 1;
                as_c_b.style.animation = "moon_open_as 1s";
                title_h2_1.style.animation = "highlighter_1 1s";
                
            } else {
                protfolio01.style.opacity = 0;
                // as_c_b.style.animation = "none";
                // title_h2_1.style.animation = "none";
            }
            
            if (pro_02 == "protfolio02") {
                protfolio02.style.opacity = 1;
                bs_c_b.style.animation = "moon_open_bs 1s";
                title_h2_2.style.animation = "highlighter_2 1s";
                
            } else {
                protfolio02.style.opacity = 0;
                // bs_c_b.style.animation = "none";
                // title_h2_2.style.animation = "none";
            }
            
            if (pro_03 == "protfolio03") {
                protfolio03.style.opacity = 1;
                pro_c_b.style.animation = "moon_open_pro 1s";
                title_h2_3.style.animation = "highlighter_3 1s";
                
            } else {
                protfolio03.style.opacity = 0;
                // pro_c_b.style.animation = "none";
                // title_h2_3.style.animation = "none";
            }
        });
    });
}



const js_protfolio = document.querySelectorAll(".js_protfolio");


window.addEventListener("scroll", () => {
    let jr_con = "";

    js_protfolio.forEach(list => {
    const jr_Top = window.scrollY + list.getBoundingClientRect().top - 1;
    if(window.scrollY >= jr_Top) {
        jr_con = list.getAttribute("id");
    }

    if(jr_con == "javascriptProtfolio") {
        document.body.style.background = "-webkit-linear-gradient(top,rgb(43, 32, 72) 15%, rgb(25, 19, 39)82%, rgb(0, 0, 0))";
    //  constelacao.removeAttribute("class");
    } else {
        document.body.style.backgroundColor = "#5a7cb1";
    }
    });
});

const js_list = document.querySelectorAll(".js_list");

window.addEventListener("scroll", () => {
    let js_01 = "";
    let js_02 = "";
    
    js_list.forEach(jsList => {
        const js_listTop = window.scrollY + jsList.getBoundingClientRect().top - 1;
        if(window.scrollY >= js_listTop) {
            js_01 = jsList.getAttribute("id");
            js_02 = jsList.getAttribute("id");
        }
        
        const gomusin = document.getElementById("gomusin");
        const gomusin_text = document.getElementById("gomusin_text");
        
        if (js_01 == "gomusin") {
            // console.log("동작");
            // console.log(gomusin_text);
            gomusin.style.opacity = 1;
            gomusin.style.transition = "3s";
            
            // if(js_01 == "gomusin_text") {
            // }
        }  else {
            gomusin.style.opacity = 0;
        }

        console.log(js_02);
        if(js_02 == "gomusin_text") {
            console.log("고무신");
            gomusin_text.style.opacity = 0;
            half_circle_right.style.animation = "moon_move_to_left 3s linear";
        }
    });

});

// (function() {
    // const gomusin = document.getElementById("gomusin");
    // const gomusin_text = document.getElementById("gomusin_text");
    // const half_circle_right = document.querySelector(".half_circle_right");
    
    // function gomusin_move() {
    //     let posY = gomusin_text.getBoundingClientRect().top;
	// 	gomusin.innerHTML = posY;

	// 	if (posY < window.innerHeight * 0.2) {
	// 		// gomusin_text.style.opacity = 0;
    //         half_circle_right.style.animation = "moon_move_to_left 3s linear";
	// 	} else {
	// 		gomusin_text.style.opacity = 1;
    //         // half_circle_right.style.animation = "moon_move_to_left 3s linear";
	// 	}
	// }

	// window.addEventListener('scroll', function() {
	// 	gomusin_move();
	// });
// })








// $( function(){
//     // a클릭시 부드럽게 이동
//     $('a').click(function() {
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 500);
//         return false;
//     });

//     // 퀵메뉴
//     $('.quick_menu li a').click(function() {
//         // 버튼 hover 이벤트
//         return false
//         $(this).parent().addClass('on');
//         $(this).parent().siblings().removeClass('on');
//     });
//     // target 위치 표시와, 이동  
//     var sections = $('.target'),
//         nav = $('.quick_menu'),
//         nav_height = nav.outerHeight();

//     $(window).on('scroll', function() {
//         var cur_pos = $(this).scrollTop();

//         sections.each(function() {
//             var top = $(this).offset().top - nav_height,
//                 bottom = top + $(this).outerHeight();

//             if (cur_pos >= top && cur_pos <= bottom) {
//                 nav.find('a').parent().removeClass('on');
//                 sections.removeClass('active');

//                 $(this).parent().addClass('on');
//                 nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
//             }
//         });
//     });

//     nav.find('a').on('click', function() {
//         var $el = $(this),
//             id = $el.attr('href');

//         $('html, body').animate({
//             scrollTop: $(id).offset().top 
//         }, 500);

//         return false;
// });


// 원하는 위치에서 스크롤 이벤트
// $(window).on('scroll', function() {
//     if ($(window).scrollTop() > 520) {
//         $('.quick_menu').addClass("fixed");
//     } else {
//         $('.quick_menu').removeClass("fixed");
//     }
// })



// $(window).on('scroll', function() {
//     if ($(window).scrollTop() > 520) {
//         $('.quick_menu').addClass("fixed");
//     } else {
//         $('.quick_menu').removeClass("fixed");
//     }
// })


