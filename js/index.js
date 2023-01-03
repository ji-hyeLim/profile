// 메뉴 버튼
function mobile_menu() {
    const nav_menu = document.querySelector(".nav_menu");
    console.log(nav_menu);
    nav_menu.classList.toggle("on");
}

// 태블릿 메뉴 마우스오버 이벤트
const lnb = document.querySelectorAll(".lnb li");
const gnb = document.querySelector(".gnb_pf");

console.log(lnb);


gnb.addEventListener("mouseover", function() {
    console.log("열기");
    lnb.style.display = 'block';
});

gnb.addEventListener("mouseout", function() {
    console.log("숨김");
    lnb.style.display = 'none';
});




// 스킬 마우스오버 이벤트
const skills = document.querySelectorAll(".lists");
const skills_a = document.querySelectorAll(".lists .btn");
const area_con = document.querySelectorAll(".area_con");
let activeCont = '';
console.log(skills);


skills_a.forEach(function(skill) {
    skill.addEventListener("mouseover", function(){
        console.log("적용");
        
        area_con.forEach(function(area_c) {
            area_c.style.display = "none";
        });

        activeCont = this.getAttribute('href');
        console.log(activeCont);
        document.querySelector(activeCont).style.display = "block";
	});
});

