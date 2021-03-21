window.addEventListener("load", () => {
    const burger = document.querySelector('.top_right-item:first-child');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu_close');
    const cards = document.querySelectorAll('.product_card');
    const linkOnCart = document.querySelector('.black_link');
    const items = document.querySelectorAll('.subscrabe_comments .item');
    const slides = document.querySelectorAll('.preview_slider-item');
    const page = document.querySelector('.preview_slider-line');
    const prev = document.querySelector('.preview_slider-btn .prev');
    const next = document.querySelector('.preview_slider-btn .next');
    let i = 0;

    const black = document.createElement('div');
    black.classList.add('black');
    black.innerHTML = '<p class="black_link"><i class="fa fa-shopping-cart"></i>Add to Cart</p>';

    burger.addEventListener('mouseenter', () => {
        menu.classList.add('active');
    });
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    for (const card of cards) {
        card.addEventListener('mouseenter', () => {
            card.append(black);
        });

        card.addEventListener('mouseleave', () => {
            card.removeChild(black);
        });
    };

    setInterval(() => {
        items[i].classList.remove('showed');
        i++;
        if(i >= items.length) i = 0;
        
        items[i].classList.add('showed');
    }, 5000);
    
});

