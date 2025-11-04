/****************헤더 스크롤 배경변경**************/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0)       header.classList.add('scroll');
    else                          header.classList.remove('scroll');
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
/**************헤더 nav hover 배경변경************/
const navHover = document.querySelectorAll('nav [class*="lnb"]');
const itemHover = document.querySelectorAll('nav .item li a');

function addBg() {
    return header.style.backgroundColor = '#0A0F14';
}

function removeBg() {
    return header.style.backgroundColor = '';
}
navHover.forEach(menu => {
    const lnbHover = menu.querySelector('.lnb');    

    menu.addEventListener('mouseover', addBg);
    menu.addEventListener('mouseout', removeBg);

    if (lnbHover) {
        lnbHover.addEventListener('mouseover', addBg);
        lnbHover.addEventListener('mouseout', removeBg);
    }   
})
itemHover.forEach(item => {
    item.addEventListener('mouseover', () => {
                        // ‘a’ → li(item)  → ul.item     → li(카테고리)
        const itemTitle = item.parentElement.parentElement.parentElement;   //대분류->ex) 상의를 가지고있는 li를 선택함
        const titleFont = itemTitle.firstElementChild;
    
        if (titleFont){
            titleFont.style.textDecoration = 'underline';
            titleFont.style.textDecorationThickness = '1px'; // 밑줄 두께 조절 가능
            titleFont.style.textUnderlineOffset = '5px'; // 밑줄과 글자 간격
        }
    })

    item.addEventListener('mouseout', () => {
        const itemTitle = item.parentElement.parentElement.parentElement;   //대분류->ex) 상의를 가지고있는 li를 선택함
        const titleFont = itemTitle.firstElementChild;

    if (titleFont)    titleFont.style.textDecoration = 'none';       
})
})

/***********메인 BEST ITEM 카테고리 버튼**********/
const bestCatagory = document.querySelectorAll('.category .best_product button');
const bestControl = document.querySelectorAll('.best_item_controls .controls');
const bestSlider = document.querySelectorAll('.best_product_list .swiper');

// 첫번째 슬라이드 보이게
bestSlider.forEach((s, i) => {
    s.style.display = i === 0 ? 'block' : 'none';
});
// 첫번째 컨트롤 보이게
bestControl.forEach((c, i) => {
    c.style.display = i === 0 ? 'flex' : 'none';
});

bestCatagory.forEach((btn, index) => { 
    btn.addEventListener('click', () => {    
        bestCatagory.forEach((i) => i.classList.remove('active'));    
        btn.classList.add('active');

        bestSlider.forEach(s => s.style.display = 'none');        
        bestSlider[index].style.display = 'block';
        bestControl.forEach(c => c.style.display = 'none');
        bestControl[index].style.display = 'flex';
    });
});

/***********메인 BEST ITEM 상품 호버*************/
const bestSwiperId = [
    'best_item_slide',
    'top_item_slide',
    'pants_item_slide',
    'outer_item_slide',
    'down_item_slide'
    ];
const bestHoverImg = {
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
bestSwiperId.forEach(id => {    
    const imgHover = document.querySelectorAll(`#${id} .swiper-slide img`);
    const hoverSet = bestHoverImg[id]; 

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

/***********메인 BEST ITEM 슬라이드***************/
const bestSwiperSet = [
    { swiperId: 'best_item_slide' , conId: 'ctrl-best' },
    { swiperId: 'top_item_slide'  , conId: 'ctrl-top' },
    { swiperId: 'pants_item_slide', conId: 'ctrl-pants' },
    { swiperId: 'outer_item_slide', conId: 'ctrl-outer' },
    { swiperId: 'down_item_slide' , conId: 'ctrl-down' },
];

bestSwiperSet.forEach(set => {
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

/***********메인 NEW ITEM 카테고리 버튼***********/
const newCatagory = document.querySelectorAll('.category .new_product button');
const newControl = document.querySelectorAll('.new_item_controls .controls');
const newSlider = document.querySelectorAll('.new_product_list .swiper');

// 첫번째 슬라이드 보이게
newSlider.forEach((s, i) => {
    s.style.display = i === 0 ? 'block' : 'none';
});
// 첫번째 컨트롤 보이게
newControl.forEach((c, i) => {
    c.style.display = i === 0 ? 'flex' : 'none';
});

newCatagory.forEach((btn, index) => { 
    btn.addEventListener('click', () => {    
        newCatagory.forEach((i) => i.classList.remove('active'));    
        btn.classList.add('active');

        newSlider.forEach(s => s.style.display = 'none');        
        newSlider[index].style.display = 'block';
        newControl.forEach(c => c.style.display = 'none');
        newControl[index].style.display = 'flex';
    });
});

/***********메인 NEW ITEM 상품 호버**************/
const newSwiperId = [
    'all_item_slide',
    'men_item_slide',
    'women_item_slide',
    'dns_item_slide'    
    ];

const newHoverImg = {
    all_item_slide: [
        './new_item/women_item2_hover.png',
        './new_item/men_item1_hover.png',
        './new_item/women_item3_hover.png',
        './new_item/men_item3_hover.png',
        './new_item/men_item5_hover.png',
    ],
    men_item_slide: [
        './new_item/men_item1_hover.png',
        './new_item/men_item2_hover.png',
        './new_item/men_item3_hover.png',
        './new_item/men_item4_hover.png',
        './new_item/men_item5_hover.png',
    ],
    women_item_slide: [
        './new_item/women_item1_hover.png',
        './new_item/women_item2_hover.png',
        './new_item/women_item3_hover.png',
        './new_item/women_item4_hover.png',
        './new_item/women_item5_hover.png',
    ],
    dns_item_slide: [
        './new_item/dns_item1_hover.png',
        './new_item/dns_item2_hover.png',
        './new_item/dns_item3_hover.png',
        './new_item/dns_item4_hover.png',
        './new_item/dns_item5_hover.png',
    ]    
};

newSwiperId.forEach(id => {    
    const imgHover = document.querySelectorAll(`#${id} .swiper-slide img`);
    const hoverSet = newHoverImg[id]; 

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

/***********메인 NEW ITEM 슬라이드****************/
const newSwiperSet = [
    { swiperId: 'all_item_slide'  , conId: 'ctrl-all' },
    { swiperId: 'men_item_slide'  , conId: 'ctrl-men' },
    { swiperId: 'women_item_slide', conId: 'ctrl-women' },
    { swiperId: 'dns_item_slide'  , conId: 'ctrl-dns' },    
];

newSwiperSet.forEach(set => {
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




/***********메인 CAMP ITEM 카테고리 버튼**********/
const campCatagory = document.querySelectorAll('.category .camp_product button');
const campProduct = document.querySelectorAll('.camp_product_list .camp_product');

// 첫번째 슬라이드 보이게
campProduct.forEach((s, i) => {
    s.style.display = i === 0 ? 'flex' : 'none';
});

campCatagory.forEach((btn, index) => { 
    btn.addEventListener('click', () => {    
        campCatagory.forEach((i) => i.classList.remove('active'));    
        btn.classList.add('active');

        campProduct.forEach(s => s.style.display = 'none');        
        campProduct[index].style.display = 'flex';        
    });
});

/***********메인 NEW ITEM 상품 호버**************/
const campProductId = [
    'camp_all',
    'camp_tent',
    'camp_item',     
    ];

const campHoverImg = {
    camp_all: [
        './camping_item/all_product1_hover.png',
        './camping_item/sup_product1_hover.png',
        './camping_item/all_product3_hover.png',
        './camping_item/all_product4_hover.png',        
    ],
    camp_tent: [
        './camping_item/tent_product1_hover.png',
        './camping_item/tent_product2_hover.png',        
    ],
    camp_item: [
        './camping_item/sup_product1_hover.png',
        './camping_item/sup_product2_hover.png',
        './camping_item/sup_product3_hover.png',
        './camping_item/sup_product4_hover.png',        
    ]    
};

campProductId.forEach(id => {    
    const imgHover = document.querySelectorAll(`#${id} img`);
    
    const hoverSet = campHoverImg[id]; 

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

/***********메인 NEW ITEM 슬라이드****************/
/*const newSwiperSet = [
    { swiperId: 'all_item_slide'  , conId: 'ctrl-all' },
    { swiperId: 'men_item_slide'  , conId: 'ctrl-men' },
    { swiperId: 'women_item_slide', conId: 'ctrl-women' },
    { swiperId: 'dns_item_slide'  , conId: 'ctrl-dns' },    
];*/
