class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }



    putProducts(author) {
        let products = this.getProducts();
        // let pushProduct = false;
        // const index = products.indexOf(author);
        products.push(author);

        localStorage.setItem(this.keyName, JSON.stringify(products));

        // return { pushProduct, products }
    }

    removeProducts(index) {
        let products = this.getProducts();
        console.log(products)
        products.splice(index, 1);
        localStorage.setItem(this.keyName, JSON.stringify(products));
    }

}

const localStorageUtil = new LocalStorageUtil();


