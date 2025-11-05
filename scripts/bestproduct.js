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