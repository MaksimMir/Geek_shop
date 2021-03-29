window.addEventListener("load", () => {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu_close');
    const items = document.querySelectorAll('.subscrabe_comments .item');
    
    let i = 0;
    let index = 0;
    
    // Меню
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // Слайдер комментармев в subscrabe
    setInterval(() => {
        items[i].classList.remove('showed');
        i++;
        if(i >= items.length) i = 0;
        
        items[i].classList.add('showed');
    }, 5000);

    // Сладер нв странице продукта
    try {
        const slides = document.querySelectorAll('.preview_slider-box img');
        const line = document.querySelector('.preview_slider-line');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        let width = window.getComputedStyle(line.parentNode).width;

        for (const slide of slides) {
            slide.style.width = width;
        };

        let pos = 0;
        line.style.width = 100 * slides.length + '%';

        
        prev.addEventListener('click', (evt) => {
            evt.preventDefault();

            if(index < slides.length - 1) index++;                       
            slideShow(width, pos);
        });

        next.addEventListener('click', (evt) => { 
            evt.preventDefault();
    
            if(index > 0) index--;              
            slideShow(width, pos); 
        });

        function slideShow(w, p) {
            p = w.replace(/px/g, '') * index; 
            line.style.transition = 'all 1s'; 
            line.style.marginLeft = -p + 'px';
        }
    } catch (error) {};

    // Добавление каиточек продуктов на страницы
    try {
        let cardList = document.querySelector('.products_cards');
        if (location.href.match(/index\.html$/) || location.href.match(/localhost:4000$/)) {
            for (let i = 0; i < 6; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 12)]);
                cardList.append(cardItem);  
            }; 
        } else if (location.href.match(/catalog\.html$/)) {
            for (let i = 0; i < 9; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 12)]);
                cardList.prepend(cardItem);  
            };
        } else if (location.href.match(/product\.html$/)) {
            for (let i = 0; i < 3; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 12)]);
                cardList.append(cardItem);  
            };
        }
 
    } catch (error) {}; 
});

// Массив продуктов
let cardsData = [
    {
        imgUrl: 'img/box_img-1.jpg',
        title: 'ELLERYO CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$200.00'
    },
    {
        imgUrl: 'img/box_img-2.jpg',
        title: 'ELLERY X CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$150.00'
    },
    {
        imgUrl: 'img/box_img-3.jpg',
        title: 'ELLERY X O CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$250.00'
    },
    {
        imgUrl: 'img/box_img-4.jpg',
        title: 'ELLERY X M',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$490.00'
    },
    {
        imgUrl: 'img/box_img-5.jpg',
        title: 'ELLERY X MO CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$900.00'
    }, 
    {
        imgUrl: 'img/box_img-6.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$490.00'
    },
    {
        imgUrl: 'img/box_img-7.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-8.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-9.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-10.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-11.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-12.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-13.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    }
];


function makeElement(tagName, className, text) {
    let element = document.createElement(tagName);

    if (className) element.classList.add(className);
    
    if (text) element.textContent = text;

    return element;
};

// Функция для создания карточки продукта
function createCard(product) {
    let listItem = makeElement('div', 'product_card');

    let pictureBox = makeElement('div', 'product_card-img');

    let picture = makeElement('img');
    picture.src = product.imgUrl;
    picture.alt = product.title + ' picture';
    pictureBox.appendChild(picture);
    listItem.appendChild(pictureBox);

    let textBox = makeElement('div', 'product_card-text');
  
    let title = makeElement('a', 'box_title', product.title);
    title.href = 'product.html';
    textBox.appendChild(title);
  
    let text = makeElement('p', 'box_text', product.text);
    textBox.appendChild(text);
  
    let price = makeElement('p', 'box_price', product.price);
    textBox.appendChild(price);

    listItem.appendChild(textBox);

    const black = makeElement('div', 'black');
    const black_link = makeElement('p', 'black_link');
    black_link.innerHTML = '<i class="fa fa-shopping-cart"></i>Add to Cart';
    black.append(black_link);
    listItem.append(black);
  
    listItem.addEventListener('mouseenter', () => {
        black.style.opacity = 1;
    });

    listItem.addEventListener('mouseleave', () => {
        black.style.opacity = 0;
    });
  
    return listItem;
};


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}