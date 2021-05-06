
var text,href;
$(".left li > a").hover(function(){
    text = $(this).text()
    href = $(this).attr('data-kor')
    $(this).text(href)
},function(){$(this).text(text)}) 

$(".baner_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',})

$(".md_slide_gruop").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    slidesToShow:3 , //미니 슬라이드 보여지기
    slidesToScroll:1,
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',})





$(".hidden").hover(function(){
    $(this).addClass('on').css({ transition: 'all 0.5s'})
},
function(){
    $(this).removeClass('on')
})



    // $('.right .user2 > li:first-child').on('click',function(e){
    //     e.preventDefault()

    //     $('body').append('<div class="outbox"><div class="inbox"><div class="login"></div></div></div>')

    //     $('.outbox').css({
    //         position:'fixed', top:0, left:0, bottom:0, right:0,
    //     zIndex:'999999',background:'rgba(255,255,255,0.8)'
    //     })

    //     $('.inbox').css({ 
    //         position:'fixed', top:'50%', left:'50%',transform: 'translate(-50%,-50%)', zIndex:'9999999',
    //         background:'#000', width:'500px', height:'300px'})
            
            
    // })