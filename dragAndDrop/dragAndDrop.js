const dragAndDrop = () => {
    const books = document.querySelectorAll('.js-book');
    const bag = document.querySelector('.js-bag');

    const dragStart = function () {
        currentBook = this;
    };

    let currentBook;
    const dragDrop = function () {
        localStorageUtil.putProducts(currentBook.dataset.author);
        shoppingPage.render();
    };
    const dragOver = function (evt) {
        evt.preventDefault();
    };

    books.forEach((book) => {
        book.addEventListener('dragstart', dragStart)
    });
    bag.addEventListener('drop', dragDrop);
    bag.addEventListener('dragover', dragOver);
};


