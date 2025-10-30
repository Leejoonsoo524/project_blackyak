/****************헤더 스크롤 배경변경**************/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0)       header.classList.add('scroll');
    else                          header.classList.remove('scroll');
});  
/***********메인 BEST ITEM 카테고리 버튼**********/
const bestCatagory = document.querySelectorAll('.category .best_product button');
const controlSets = document.querySelectorAll('.best_item_controls .controls');
const sliders = document.querySelectorAll('.best_product_list .swiper');

// 첫번째 슬라이드 보이게
sliders.forEach((s, i) => {
    s.style.display = i === 0 ? 'block' : 'none';
});
// 첫번째 컨트롤 보이게
controlSets.forEach((c, i) => {
    c.style.display = i === 0 ? 'flex' : 'none'; // ❗기존에는 없었음 (초기 컨트롤 안보임 문제 해결)
});

bestCatagory.forEach((btn, index) => { 
    btn.addEventListener('click', () => {    
        bestCatagory.forEach((i) => i.classList.remove('active'));    
        btn.classList.add('active');

        sliders.forEach(s => s.style.display = 'none');        
        sliders[index].style.display = 'block';
        controlSets.forEach(c => c.style.display = 'none');
        controlSets[index].style.display = 'flex';
    });
});

/***********메인 BEST ITEM 상품 호버*************/
const swiperId = [
    'best_item_slide',
    'top_item_slide',
    'pants_item_slide',
    'outer_item_slide',
    'down_item_slide'
    ];
const hoverImg = {
    best_item_slide: [
        './best_item/md_product1_hover.png',
        './best_item/md_product2_hover.png',
        './best_item/md_product3_hover.png',
        './best_item/md_product4_hover.png',
        './best_item/md_product5_hover.png',
    ],
    top_item_slide: [
        './best_item/top_product1_hover.png',
        './best_item/top_product2_hover.png',
        './best_item/top_product3_hover.png',
        './best_item/top_product4_hover.png',
        './best_item/top_product5_hover.png',
    ],
    pants_item_slide: [
        './best_item/pants_product1_hover.png',
        './best_item/pants_product2_hover.png',
        './best_item/pants_product3_hover.png',
        './best_item/pants_product4_hover.png',
        './best_item/pants_product5_hover.png',
    ],
    outer_item_slide: [
        './best_item/outer_product1_hover.png',
        './best_item/outer_product2_hover.png',
        './best_item/outer_product3_hover.png',
        './best_item/outer_product4_hover.png',
        './best_item/outer_product5_hover.png',
    ],
    down_item_slide: [
        './best_item/down_product1_hover.png',
        './best_item/down_product2_hover.png',
        './best_item/down_product3_hover.png',
        './best_item/down_product4_hover.png',
        './best_item/down_product5_hover.png',
    ],
};
swiperId.forEach(id => {    
    const imgHover = document.querySelectorAll(`#${id} .swiper-slide img`);
    const hoverSet = hoverImg[id]; 

    imgHover.forEach((img, index) => {
        const originalSrc = img.src; // 원래 이미지
        const hoverSrc = hoverSet[index]; // hover용 이미지

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });

        img.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });
});
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
const swiperSets = [
    { swiperId: 'best_item_slide' , conId: 'ctrl-best' },
    { swiperId: 'top_item_slide'  , conId: 'ctrl-top' },
    { swiperId: 'pants_item_slide', conId: 'ctrl-pants' },
    { swiperId: 'outer_item_slide', conId: 'ctrl-outer' },
    { swiperId: 'down_item_slide' , conId: 'ctrl-down' },
];

swiperSets.forEach(set => {
    new Swiper(`#${set.swiperId}`, {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
            nextEl: `#${set.conId} .swiper-button-next`,
            prevEl: `#${set.conId} .swiper-button-prev`,
        },
    });
});  
/**********************************************/