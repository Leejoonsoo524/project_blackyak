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
/***********메인 BEST ITEM 카테고리 버튼**********/
const bestProductBtn = document.querySelectorAll('.category_btn .product_category button');
const bestProductItem = document.querySelectorAll('.best_item');

bestProductItem.forEach((s, i) => {
    s.style.display = i === 0 ? 'block' : 'none';
});

bestProductBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        bestProductBtn.forEach((i) => i.classList.remove('active'));
        btn.classList.add('active');

        bestProductItem.forEach(s => s.style.display = 'none');
        bestProductItem[index].style.display = 'flex';
    });
});
/***********메인 BEST ITEM Color 버튼**********/
const productId = ['all', 'public', 'men', 'women'];

const productColorImg = {
    all: [
        {
            skyblue: './best_product_img/bestproduct1.png',
            brown: './best_product_img/bestproduct1_2.png',
            orange: './best_product_img/bestproduct1_3.png',
            green: './best_product_img/bestproduct1_4.png'
        },
        {
            white: './best_product_img/bestproduct2.png',
            brown: './best_product_img/bestproduct2_2.png',
            black: './best_product_img/bestproduct2_3.png',
            L_beige: './best_product_img/bestproduct2_4.png',
        },
        {
            white: './best_product_img/bestproduct3.png',
            black: './best_product_img/bestproduct3_2.png',
            gray: './best_product_img/bestproduct3_3.png',
            navy: './best_product_img/bestproduct3_4.png',
        },
        {
            white: './best_product_img/bestproduct4_2.png',
            black: './best_product_img/bestproduct4_3.png',
            taupegray: './best_product_img/bestproduct4.png',
        },
        {
            white: './best_product_img/bestproduct5.png',
            navy: './best_product_img/bestproduct5_2.png',
            taupe: './best_product_img/bestproduct5_3.png',
        },
        { black: './best_product_img/bestproduct6.png',},
        { black: './best_product_img/bestproduct7.png',},
        { black: './best_product_img/bestproduct8.png',},
        { black: './best_product_img/bestproduct9.png',},
        { black: './best_product_img/bestproduct10.png',},
        {
            white: './best_product_img/bestproduct11.png',
            black: './best_product_img/bestproduct11_2.png',
            beige: './best_product_img/bestproduct11_3.png',
        },
        {
            white: './best_product_img/bestproduct12_3.png',
            black: './best_product_img/bestproduct12_2.png',
            astro: './best_product_img/bestproduct12.png',
        },
        {
            khaki: './best_product_img/bestproduct13_4.png',
            slate: './best_product_img/bestproduct13.png',
            black: './best_product_img/bestproduct13_3.png',
            gray: './best_product_img/bestproduct13_2.png',
        },
        {
            black: './best_product_img/bestproduct14.png',
            taupegray: './best_product_img/bestproduct14_2.png',
        },
        {
            black: './best_product_img/bestproduct15_3.png',
            white: './best_product_img/bestproduct15_2.png',
            taupegray: './best_product_img/bestproduct15.png',
        },
        {
            black: './best_product_img/bestproduct16.png',
            taupegray: './best_product_img/bestproduct16_2.png',
        },
        {
            black: './best_product_img/bestproduct17_2.png',
            khaki: './best_product_img/bestproduct17.png',
        },
        {
            navy: './best_product_img/bestproduct18.png',
            gray: './best_product_img/bestproduct18_2.png',
        },
        {
            black: './best_product_img/bestproduct19.png',
            beige: './best_product_img/bestproduct19_2.png',
            gray: './best_product_img/bestproduct19_3.png',
        },
        {
            silver_beige: './best_product_img/bestproduct20.png',
            black: './best_product_img/bestproduct20_2.png',
            d_orange: './best_product_img/bestproduct20_3.png',
            t_blue: './best_product_img/bestproduct20_4.png',
        },
        {
            navy: './best_product_img/bestproduct21.png',
            khaki: './best_product_img/bestproduct21_2.png',
            black: './best_product_img/bestproduct21_3.png',
            beige: './best_product_img/bestproduct21_4.png',
        },
        {
            silver_beige: './best_product_img/bestproduct22.png',
            t_blue: './best_product_img/bestproduct22_2.png',
        },
        {
            k_gray: './best_product_img/bestproduct23.png',
            black: './best_product_img/bestproduct23_2.png',
        },
        {
            d_gray: './best_product_img/bestproduct24.png',
            black: './best_product_img/bestproduct24_2.png',
            beige: './best_product_img/bestproduct24_3.png',
        },
        {
            black: './best_product_img/bestproduct25.png',
            skyblue: './best_product_img/bestproduct25_2.png',
        },
        {
            black: './best_product_img/bestproduct26_2.png',
            d_brown: './best_product_img/bestproduct26.png',
            k_gray: './best_product_img/bestproduct26_3.png',
        },
        {
            black: './best_product_img/bestproduct27_2.png',
            charcoal: './best_product_img/bestproduct27_3.png',
            khaki: './best_product_img/bestproduct27.png',
        },
        {
            black: './best_product_img/bestproduct28_2.png',
            white: './best_product_img/bestproduct28.png',
            skyblue: './best_product_img/bestproduct28_3.png',
            navy: './best_product_img/bestproduct28_4.png',
        },
        {
            black: './best_product_img/bestproduct29_2.png',
            L_beige: './best_product_img/bestproduct29_3.png',
            L_blue: './best_product_img/bestproduct29.png',
        },
        {
            black: './best_product_img/bestproduct30_2.png',
            navy: './best_product_img/bestproduct30_3.png',
            taupegray: './best_product_img/bestproduct30.png',
        },
        {
            black: './best_product_img/bestproduct31.png',
            charcoal: './best_product_img/bestproduct31_2.png',
        },
        {
            khaki: './best_product_img/bestproduct32_2.png',
            black: './best_product_img/bestproduct32.png',
        },
        {
            k_gray: './best_product_img/bestproduct33_3.png',
            black: './best_product_img/bestproduct33_2.png',
            astro: './best_product_img/bestproduct33.png',
        },
        {
            white: './best_product_img/bestproduct34_2.png',
            skyblue: './best_product_img/bestproduct34_3.png',
            beige: './best_product_img/bestproduct34_4.png',
            purple: './best_product_img/bestproduct34.png',
        },
        {
            black: './best_product_img/bestproduct35_2.png',
            skyblue: './best_product_img/bestproduct35.png',
            L_beige: './best_product_img/bestproduct35_3.png',
        },
        {
            orange: './best_product_img/bestproduct36_3.png',
            taupe: './best_product_img/bestproduct36.png',
            black: './best_product_img/bestproduct36_2.png',
            navy: './best_product_img/bestproduct36_4.png',
        },
        {
            black: './best_product_img/bestproduct37.png',
            astro: './best_product_img/bestproduct37_2.png',
        },
    ],
    public: [
        {
            skyblue: './best_product_img/bestproduct1.png',
            brown: './best_product_img/bestproduct1_2.png',
            orange: './best_product_img/bestproduct1_3.png',
            green: './best_product_img/bestproduct1_4.png'
        },
        {
            white: './best_product_img/bestproduct34_2.png',
            skyblue: './best_product_img/bestproduct34_3.png',
            beige: './best_product_img/bestproduct34_4.png',
            purple: './best_product_img/bestproduct34.png',
        },
        {
            black: './best_product_img/bestproduct26_2.png',
            d_brown: './best_product_img/bestproduct26.png',
            k_gray: './best_product_img/bestproduct26_3.png',
        },    
        {
            white: './best_product_img/bestproduct11.png',
            black: './best_product_img/bestproduct11_2.png',
            beige: './best_product_img/bestproduct11_3.png',
        },    
        {
            black: './best_product_img/bestproduct37.png',
            astro: './best_product_img/bestproduct37_2.png',
        },
        { black: './best_product_img/bestproduct6.png',},
        { black: './best_product_img/bestproduct7.png',},
        { black: './best_product_img/bestproduct8.png',},
        { black: './best_product_img/bestproduct9.png',},
        { black: './best_product_img/bestproduct10.png',},
        {
            black: './best_product_img/bestproduct31.png',
            charcoal: './best_product_img/bestproduct31_2.png',
        },
    ],
    men: [
        {
            black: './best_product_img/bestproduct17_2.png',
            khaki: './best_product_img/bestproduct17.png',
        },
        {
            white: './best_product_img/bestproduct3.png',
            black: './best_product_img/bestproduct3_2.png',
            gray: './best_product_img/bestproduct3_3.png',
            navy: './best_product_img/bestproduct3_4.png',
        },
        {
            white: './best_product_img/bestproduct12_3.png',
            black: './best_product_img/bestproduct12_2.png',
            astro: './best_product_img/bestproduct12.png',
        },
        {
            khaki: './best_product_img/bestproduct13_4.png',
            slate: './best_product_img/bestproduct13.png',
            black: './best_product_img/bestproduct13_3.png',
            gray: './best_product_img/bestproduct13_2.png',
        },
        {
            silver_beige: './best_product_img/bestproduct20.png',
            black: './best_product_img/bestproduct20_2.png',
            d_orange: './best_product_img/bestproduct20_3.png',
            t_blue: './best_product_img/bestproduct20_4.png',
        },
        {
            navy: './best_product_img/bestproduct21.png',
            khaki: './best_product_img/bestproduct21_2.png',
            black: './best_product_img/bestproduct21_3.png',
            beige: './best_product_img/bestproduct21_4.png',
        },
        {
            silver_beige: './best_product_img/bestproduct22.png',
            t_blue: './best_product_img/bestproduct22_2.png',
        },
        {
            k_gray: './best_product_img/bestproduct23.png',
            black: './best_product_img/bestproduct23_2.png',
        },
        {
            d_gray: './best_product_img/bestproduct24.png',
            black: './best_product_img/bestproduct24_2.png',
            beige: './best_product_img/bestproduct24_3.png',
        },
        {
            black: './best_product_img/bestproduct25.png',
            skyblue: './best_product_img/bestproduct25_2.png',
        },
        {
            navy: './best_product_img/bestproduct18.png',
            gray: './best_product_img/bestproduct18_2.png',
        },
        {
            black: './best_product_img/bestproduct27_2.png',
            charcoal: './best_product_img/bestproduct27_3.png',
            khaki: './best_product_img/bestproduct27.png',
        },
        {
            black: './best_product_img/bestproduct28_2.png',
            white: './best_product_img/bestproduct28.png',
            skyblue: './best_product_img/bestproduct28_3.png',
            navy: './best_product_img/bestproduct28_4.png',
        },
        {
            black: './best_product_img/bestproduct29_2.png',
            L_beige: './best_product_img/bestproduct29_3.png',
            L_blue: './best_product_img/bestproduct29.png',
        },
        {
            black: './best_product_img/bestproduct30_2.png',
            navy: './best_product_img/bestproduct30_3.png',
            taupegray: './best_product_img/bestproduct30.png',
        },
        {
            khaki: './best_product_img/bestproduct32_2.png',
            black: './best_product_img/bestproduct32.png',
        },
        {
            k_gray: './best_product_img/bestproduct33_3.png',
            black: './best_product_img/bestproduct33_2.png',
            astro: './best_product_img/bestproduct33.png',
        },
        {
            orange: './best_product_img/bestproduct36_3.png',
            taupe: './best_product_img/bestproduct36.png',
            black: './best_product_img/bestproduct36_2.png',
            navy: './best_product_img/bestproduct36_4.png',
        },
    ],
    women: [
        {
            white: './best_product_img/bestproduct2.png',
            brown: './best_product_img/bestproduct2_2.png',
            black: './best_product_img/bestproduct2_3.png',
            L_beige: './best_product_img/bestproduct2_4.png',
        },
        {
            white: './best_product_img/bestproduct4_2.png',
            black: './best_product_img/bestproduct4_3.png',
            taupegray: './best_product_img/bestproduct4.png',
        },
        {
            white: './best_product_img/bestproduct5.png',
            navy: './best_product_img/bestproduct5_2.png',
            taupe: './best_product_img/bestproduct5_3.png',
        },
        {
            black: './best_product_img/bestproduct14.png',
            taupegray: './best_product_img/bestproduct14_2.png',
        },
        {
            black: './best_product_img/bestproduct15_3.png',
            white: './best_product_img/bestproduct15_2.png',
            taupegray: './best_product_img/bestproduct15.png',
        },
        {
            black: './best_product_img/bestproduct16.png',
            taupegray: './best_product_img/bestproduct16_2.png',
        },
        {
            black: './best_product_img/bestproduct19.png',
            beige: './best_product_img/bestproduct19_2.png',
            gray: './best_product_img/bestproduct19_3.png',
        },
        {
            black: './best_product_img/bestproduct35_2.png',
            skyblue: './best_product_img/bestproduct35.png',
            L_beige: './best_product_img/bestproduct35_3.png',
        },
    ]
};

productId.forEach(id => {
    const section = document.querySelector(`#${id}`);
    if (!section) return;

    const products = section.querySelectorAll('.product > li');
    const productSet = productColorImg[id];

    // 상품별 순회
    products.forEach((product, index) => {
        const imgTag = product.querySelector('a img');
        const colorBtns = product.querySelectorAll('.color_box .color');
        const colorMap = productSet[index];

        if (!colorMap) return;

        colorBtns.forEach(btn => {
            const colorName = [...btn.classList].find(cls => cls !== 'color');
            const originalSrc = imgTag.src; // 원래 이미지

            const newSrc = colorMap[colorName];

            if (!newSrc) return;

            btn.addEventListener('mouseenter', () => {
                imgTag.src = newSrc;
            });
            btn.addEventListener('mouseleave', () => {
                imgTag.src = originalSrc;
            });

        });
    });
});