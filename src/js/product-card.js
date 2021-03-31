window.addEventListener('load', () => {

    // Добавление каиточек продуктов на страницы
    try {
        let cardList = document.querySelector('.products_cards');
        if (location.href.match(/index\.html$/) || location.href.match(/localhost:4000$/)) {
            for (let i = 0; i < 6; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 16)]);
                cardList.append(cardItem);  
            }; 
        } else if (location.href.match(/catalog\.html$/)) {
            for (let i = 0; i < 9; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 16)]);
                cardList.prepend(cardItem);  
            };
        } else if (location.href.match(/product\.html$/)) {
            for (let i = 0; i < 3; i++) {
                let cardItem = createCard(cardsData[randomInteger(0, 16)]);
                cardList.append(cardItem);  
            };
        }
    
    } catch (error) {}; 

    
    // Функция для создания карточки продукта
    function createCard(product) {
        let listItem = makeElement('div', 'product_card');
    
        let pictureBox = makeElement('div',);
    
        let picture = makeElement('img', 'product_card-img');
        picture.src = product.imgUrl;
        picture.alt = product.title + ' picture';
        picture.width = 360;
        picture.height = 420;
        listItem.appendChild(picture);
    
        let textBox = makeElement('div', 'product_card-text');
      
        let title = makeElement('a', 'box_title', product.title);
        title.href = 'product.html';
        textBox.appendChild(title);
      
        let text = makeElement('p', 'box_text', product.text);
        textBox.appendChild(text);
    
        listItem.appendChild(textBox);

        let price = makeElement('p', 'box_price', product.price);
        listItem.appendChild(price);
    
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
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function makeElement(tagName, className, text) {
    let element = document.createElement(tagName);

    if (className) element.classList.add(className);
    
    if (text) element.textContent = text;

    return element;
};

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
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. Ellery teams up with Moda Operandi.',
        price: '$150.00'
    },
    {
        imgUrl: 'img/box_img-3.jpg',
        title: 'ELLERY X O CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. Known for her sculptural takes on traditional tailoring. Known for her sculptural takes on traditional tailoring',
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
        text: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$900.00'
    }, 
    {
        imgUrl: 'img/box_img-6.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Ellery teams up with Moda Operandi.',
        price: '$490.00'
    },
    {
        imgUrl: 'img/box_img-7.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. Known for her sculptural takes on traditional tailoring, Known for her sculptural takes on traditional tailoring,',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-8.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-9.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. Known for her sculptural takes.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-10.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. Known for her sculptural takes on traditional tailoring,',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-11.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-12.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$49,.00'
    },
    {
        imgUrl: 'img/box_img-13.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    },
    {
        imgUrl: 'img/box_img-14.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    },
    {
        imgUrl: 'img/box_img-15.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    },
    {
        imgUrl: 'img/box_img-16.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    },
    {
        imgUrl: 'img/box_img-17.jpg',
        title: 'ELLERY X M CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$149,.00'
    }
];