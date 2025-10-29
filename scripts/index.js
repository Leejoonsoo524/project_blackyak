/****************헤더 스크롤 배경변경**************/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0)       header.classList.add('scroll');
    else                          header.classList.remove('scroll');
});  
/**********************************************/
/****************헤더 베너 슬라이드***************/
const yakMainBnr = new Swiper('#banner_slide',{
    autoplay:{delay:3000},
    loop:true,
    slidesPerView: 1,
    initialSlide:1,        
    navigation:{
        nextEl:'.controls .swiper-button-next',
        prevEl:'.controls .swiper-button-prev',
    },
})
/***********메인 BEST ITEM 슬라이드***************/
const yakMainBest = new Swiper('#best_item_slide',{
    loop:true,
    slidesPerView: 4,
    spaceBetween:15,
    navigation:{
        nextEl:'.best_item_controls .swiper-button-next',
        prevEl:'.best_item_controls .swiper-button-prev',
    },
})
/**********************************************/