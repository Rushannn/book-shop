function render() {


    productsPage.render();
    shoppingPage.render();

}

let CATALOG = [];

const removers = [];


fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });