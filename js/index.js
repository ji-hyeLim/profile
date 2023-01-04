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



// //** 스크롤 배경색 변경 이벤트 **//
// function checkVisible( element, check = 'above' ) {
//     const viewportHeight = $(window).height(); // Viewport Height
//     const scrolltop = $(window).scrollTop(); // Scroll Top
//     const y = $(element).offset().top;
//     const elementHeight = $(element).height();   
    
//     // 반드시 요소가 화면에 보여야 할경우
//     if (check == "visible") 
//         return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        
//     // 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
//     if (check == "above") 
//         return ((y < (viewportHeight + scrolltop)));
// }

// // 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
// let isVisible = false;

// // 이벤트에 등록할 함수
// const func = function () {
//     if ( !isVisible && checkVisible('#second') ) {
//         alert("엘리먼트 보임 !!");
        
//         isVisible = true;
//     }
    
//     // 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
//     isVisible && window.removeEventListener('scroll', func);
// }

// // 스크롤 이벤트 등록
// window.addEventListener('scroll', func);
