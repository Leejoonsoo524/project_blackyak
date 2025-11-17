const aTag = document.querySelectorAll('a[href="#"]');
aTag.forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault(); // ← 기본 동작(맨 위로 이동) 막기
    });
});
/****************헤더 검색 지움******************/
const searchInput = document.querySelector('.search_input input');
const clearBtn = document.querySelector('.search_del');

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
});
/**************헤더 nav 카테고리 밑줄************/
const itemHover = document.querySelectorAll('nav .item li a');
itemHover.forEach(item => {
    item.addEventListener('mouseover', () => {
        // ‘a’ → li(item)  → ul.item     → li(카테고리)
        const itemTitle = item.parentElement.parentElement.parentElement;   //대분류->ex) 상의를 가지고있는 li를 선택함
        const titleFont = itemTitle.firstElementChild;

        if (titleFont) {
            titleFont.style.textDecoration = 'underline';
            titleFont.style.textDecorationThickness = '1px'; // 밑줄 두께 조절 가능
            titleFont.style.textUnderlineOffset = '5px'; // 밑줄과 글자 간격
        }
    })

    item.addEventListener('mouseout', () => {
        const itemTitle = item.parentElement.parentElement.parentElement;   //대분류->ex) 상의를 가지고있는 li를 선택함
        const titleFont = itemTitle.firstElementChild;

        if (titleFont) titleFont.style.textDecoration = 'none';
    })
})
/**************메인 컬러선택 테투리+이름**********/
const colorSelcet = document.querySelectorAll('.color_img button');
const colorTag = document.querySelectorAll('.color_tag span');
const orderColor = document.querySelector('.order_color_size .order_color');
const orderSize = document.querySelector('.order_color_size .order_size');
const imgSelect = document.querySelectorAll('#product_info .main_img img');
console.log(imgSelect);

colorSelcet.forEach((btn) => {
    btn.addEventListener('click', () =>{
        colorSelcet.forEach((i) => i.classList.remove('active'));  
        colorTag.forEach((i) => i.classList.remove('active'));   

        btn.classList.add('active');

        colorTag.forEach((color) => {
            if (btn.classList.contains('blue') && color.classList.contains('blue')) 
            {                   //contains는 클래스 이름중에 해당 이름이 있으면 1을 반환 없으면 0을반환
                color.classList.add('active');
                orderColor.textContent = color.textContent;
                imgSelect[0].src = './product_detail/detail1.png';
                imgSelect[1].src = './product_detail/detail1_front.png';

            } 
            else if (btn.classList.contains('gold') && color.classList.contains('gold')) {
                color.classList.add('active');
                orderColor.textContent = color.textContent;
                imgSelect[0].src = './product_detail/detail2.png';
                imgSelect[1].src = './product_detail/detail2_front.png';
            } 
            else if (btn.classList.contains('brown') && color.classList.contains('brown')) {
                color.classList.add('active');
                orderColor.textContent = color.textContent;
                imgSelect[0].src = './product_detail/detail3.png';
                imgSelect[1].src = './product_detail/detail3_front.png';
            } 
            else if (btn.classList.contains('khaki') && color.classList.contains('khaki')) {
                color.classList.add('active');
                orderColor.textContent = color.textContent;
                imgSelect[0].src = './product_detail/detail4.png';
                imgSelect[1].src = './product_detail/detail4_front.png';
            }
        });
    });
});

/**************메인 사이즈선택 active************/
const sizeSelcet = document.querySelectorAll('.size_btn button');
const orderInfo = document.querySelector('.order_info');
sizeSelcet.forEach((btn) => {
    btn.addEventListener('click', () =>{
        sizeSelcet.forEach((i) => i.classList.remove('active'));  
        btn.classList.add('active');       
        orderSize.textContent = btn.textContent; 
        
        if (btn.classList.contains('active'))   orderInfo.style.display = 'flex';        
        else                                    orderInfo.style.display = 'none';

    });
});


/**************리뷰 상세정보 반품정보 선택 active************/
const tapBtn = document.querySelectorAll('#tap .tap_btn button');
const targets = [
    '#product_document',
    '#review',
    '#exchang'
];

tapBtn.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        tapBtn.forEach((i) => i.classList.remove('active'));  
        btn.classList.add('active');                       

        const target = document.querySelector(targets[index]);

        // 부드럽게 이동 (헤더 fixed 고려해서 조금 위로 올림)
        const headerHeight = document.querySelector("header").offsetHeight;

        window.scrollTo({
            top: target.offsetTop - (headerHeight + 60), // 여유 10  px
            behavior: "smooth",
        });
    });    
});

window.addEventListener('scroll', () =>{
    const headerHeight = document.querySelector("header").offsetHeight; //헤더높이
    const scrollY = window.pageYOffset + headerHeight + 60; //스크롤한값+헤더높이+상세정보탭높이

    targets.forEach((selector, index) => {
        const section = document.querySelector(selector);

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // 현재 스크롤 위치가 해당 영역 범위라면 active 처리
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            tapBtn.forEach(i => i.classList.remove('active'));
            tapBtn[index].classList.add('active');
        }
    });
});