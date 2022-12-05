class Products {


    handleSetLocationStorage(author) {
        localStorageUtil.putProducts(author);

        shoppingPage.render();
    }

    handlerSeeMore(index) {
        let popupTitle = document.querySelector('.popup__title');
        let popupText = document.querySelector('.popup__text');
        if (popupTitle.textContent === '') {
            popupTitle.textContent = CATALOG[index].title;
            popupText.textContent = CATALOG[index].description;
            document.querySelector('.popup').classList.add('open')
            console.log(true)
        } else {
            popupTitle.textContent = '';
            popupText.textContent = '';
            document.querySelector('.popup').classList.remove('open')
            console.log(false)
        };

    }


    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let popupTitle = '';
        let popupText = '';

        CATALOG.forEach(({ author, imageLink, title, price, description }, index) => {


            htmlCatalog += `
            <li class="products-element js-book" draggable = "true" data-author = "${author}">
                <span class="products-element__author">${author}</span>
                <img class="products-element__img" src="${imageLink}" draggable = "false"/>
                <span class="products-element__title">${title}</span>
                <span class="products-element__price">Price:
                ${price.toLocaleString()} USD
                </span>
                <div class="products-element__see-more" onclick="productsPage.handlerSeeMore(${index})">See more</div>
                <button class="products-element__btn" onclick="productsPage.handleSetLocationStorage('${author}')">
                Add to bag
                </button>
            </li>
            `;

        })

        const html = `
        <div class="popup">
            <div class="popup__body" onclick="productsPage.handlerSeeMore('')">
                <div class="popup__content">
                    <div class="popup__close" onclick="productsPage.handlerSeeMore('')">X</div>
                    <div class="popup__title">${popupTitle}</div>
                    <div class="popup__text">${popupText}</div>
                </div>
            </div>
        </div>
        <ul class="products-container">
            ${htmlCatalog}
        </ul>`;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
