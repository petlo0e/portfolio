$(document).ready(function(){//시작
  $("#fullpage").fullpage({
        //메뉴에 대한 옵션 설정 - li에 active가 추가됨
        menu: '.gnb',
        anchors:['menu1', 'menu2', 'menu3', 'menu4','menu5','menu6','menu7','menu8','menu9','menu10'],
    
        // 네비게이션 보이기
        navigation: true,
        navigationTooltips: ['', 'About', 'Contents', 'Redesign', 'Branding', 'Responsive', 'UI/UX App', 'Graphic', 'Shopping mall'],
        navigationPosition: 'left',
        showActiveTooltip: true,
    
        //반응형 - 1024 이하에서는 동작 안함
        responsiveWidth: 1024,
    
        onLeave: function(index, nextIndex, direction){
          if(nextIndex == 10){
            $("#fp-nav").fadeOut(300);
          }
          else{$("#fp-nav").fadeIn(300);
          }
        }
  });

  //슬라이드
  var cardlist = new Swiper(".cardlist", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },

    loop:true,
    flipEffect: {
      slideShadows: false, // 슬라이드 그림자 비활성화
    },
    autoplay: {
      delay: 2500, // 1000=1초
      disableOnInteraction: false,
    }, 
    observer: true,
observeParents: true,
  });



  $(".tab_btn li").eq(0).addClass("active");
  $(".tab_con > ul > li").eq(1).hide();
  
  $(".tab_btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var indexNum = $(this).index();
    $(".tab_con > ul > li").eq(indexNum).fadeIn().siblings().fadeOut();
  });

  

  //탭

 $(".tab-cont li").hide();
  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-cont li").eq(0).show();

  /*
  tab-btn li 클릭하면 다음과 같은 일이 일어남
  1. 사용자가 선택한 tab-btn li 에만 active 클래스가 추가되고,
  나머지는, active 클래스가 지워져야함
  2. 사용자가 선택한 li의 순번(변수에 담겨 있어야함)과 동일한 순번의 tab-cont li만 보이고,
  나머지는 숨겨야함
  */

  $(".tab-btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    
    var Num = $(this).index();
    $(".tab-cont li").eq(Num).show().siblings().hide();        
  });





});//끝


//다운로드프로그레스
const btn = document.querySelector('.btn');
const progress = document.querySelector('.progress');
btn.addEventListener('click',function(event){
  progress.classList.add('on');
});