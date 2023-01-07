// 반응형 중단점
let moblieWidth = window.matchMedia("screen and (max-width: 767px)");
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

} else if(tablet_pcWidth) {
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

console.log(skills);
console.log(skills_a);


for(let i = 1; i < 12; i++) {
    area_con[i].style.display = "none";
}

skills.forEach(function(lists) {

    //** 스킬 모달 띄우기 **//
    lists.addEventListener("click", function(e) {
        e.preventDefault();

        if(tabletWidth) {
            circle_area.style.display = "block";
            del.style.display = "block";
            area_con.forEach(function(area_c) {
                area_c.style.display = "none";
            });
    
            activeCont = this.getAttribute('href');
            document.querySelector(activeCont).style.display = "block";
        } else {
            del.style.display = "none"; 
            // largeTablet에서는 클릭할때 del이 안나왔으면 좋겠는데 안된다..
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


// ==== protfolio star ==== // 
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

})






// 스크롤 이벤트
const sections = document.querySelectorAll("section");
const protfolio01 = document.getElementById("protfolio01");

window.addEventListener("scroll", () => {
   let currentSection = "";
   
   sections.forEach(section => {
    const sectionTop = window.scrollY + section.getBoundingClientRect().top - 1;

    if(window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
    }
   });

   const as_c_b = document.querySelector(".as_c_b");
   
   if(currentSection == "protfolio") {
       document.body.style.backgroundColor = "#5a7cb1";
    //    title.style.display = "block";
       
       protfolio01.style.opacity = 1;
       as_c_b.style.animation = "moon_open_as 1s";
   } else {
       document.body.style.backgroundColor = "#ffffff";
    //    title.style.display = "none";
       protfolio01.style.opacity = 0;
       
   }
});










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


// //** 스크롤 배경색 변경 이벤트 **//
function checkVisible( element, check = 'above' ) {
    const viewportHeight = $(window).height(); // Viewport Height
    const scrolltop = $(window).scrollTop(); // Scroll Top
    const y = $(element).offset().top;
    const elementHeight = $(element).height();   
    
    // 반드시 요소가 화면에 보여야 할경우
    if (check == "visible") 
        return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        
    // 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
    if (check == "above") 
        return ((y < (viewportHeight + scrolltop)));
}

// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
let isVisible = false;

// 이벤트에 등록할 함수
$('.gnb').hide();
const side_menu = function() {
    if ( !isVisible && checkVisible('.intro_contents') ) {
        $('.gnb').fadeIn();
        isVisible = true;
    }
    // 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
    // isVisible && window.removeEventListener('scroll', func);

}

// 스크롤 이벤트 등록
window.addEventListener('scroll', side_menu);


// $(function() {
//     $(window).scroll(function() {
//         // $('.title').hide();
//         // 배경색
//         if ($(this).scrollTop() >= Math.ceil($('.protfolio').offset().top)) {
//             // 스크롤이 끝에 도달했을때 실행될 이벤트
//             $('#protfolio').css('background', '#5a7cb1');
//         } else {
//             // 아닐때 이벤트
//             $('#protfolio').css('background', 'white');
//         }
//     });
// });

// const backColor= function() {
    // if ( !isVisible && checkVisible('.pro_text_zone') ) {
    // }
// }
// $('.as_c_b').hide();
// $(window).on('scroll',function() {
//     if (checkVisible($('#protfolio').find('.title'))&&!isVisible) {
//         $('#protfolio').fadeOut(function() {
//             $(this).css('background', '#5a7cb1');
//             $(this).fadeIn();



//         });
//     }
//     isVisible && window.removeEventListener('scroll', func);

    // if (checkVisible($('#protfolio01').find('.flex-box'))&&!isVisible) {
    //     $('.as_c_b').show();
    // }

    
// });

// function checkVisible( elm, eval ) {
//     eval = eval || "object visible";
//     var viewportHeight = $(window).height(),
//         scrolltop = $(window).scrollTop(),
//         y = $(elm).offset().top,
//         elementHeight = $(elm).height();   
    
//     if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
//     if (eval == "above") return ((y < (viewportHeight + scrolltop)));
// }
    
// });


