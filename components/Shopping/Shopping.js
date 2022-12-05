class Shopping {

    handleRemoveBook(index) {
        localStorageUtil.removeProducts(index);
        shoppingPage.render();
    };

    render() {
        let htmlBooks = '';
        let index = 0;
        TOTAL = 0;
        localStorageUtil.getProducts().forEach((elem) => {
            CATALOG.forEach(({ author, imageLink, title, price }) => {
                if (elem === author) {
                    TOTAL += price;
                    htmlBooks += `
                <li class="shopping-element">
                <img class="shopping-element__img" src="${imageLink}" draggable = "false"/>
                <div class="shopping-element__description">
                <span class="shopping-element__author">${author}</span>
                <span class="shopping-element__title">${title}</span>
                <span class="shopping-element__price">Price:
                ${price.toLocaleString()} USD
                </span>
                <div class="shopping-element__close-btn" onclick="shoppingPage.handleRemoveBook(${index})"></div>
                </div>
                </li>
                `;
                    index += 1;
                }
            });
        })


        const html = `
                        <div class = "shopping">
                            <div class = "shopping-contayner">
                                <div class="shopping-counter">
                                    <span class="shopping-counter__books">Books ${index} </span>
                                    <span class="shopping-counter__total">Total ${TOTAL} USD </span>
                                    <button class="shopping-counter__btn">Confirm order</button>
                                </div>
                                <ul class = "shopping-bag js-bag">${htmlBooks}</ul>
                            </div>
                        </div>
                    `;

        ROOT_SHOPPING.innerHTML = html;
        dragAndDrop();
    }
};

const shoppingPage = new Shopping();






