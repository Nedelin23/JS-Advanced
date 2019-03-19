function solve() {

    let milkButton = document.getElementsByTagName('button')[0];
    let breadButton = document.getElementsByTagName('button')[1];
    let tomatoesButton = document.getElementsByTagName('button')[2];
    let buyButton = document.getElementsByTagName('button')[3];

    let products = [];
    let totalPrice = +0;


    let textarea = document.getElementsByTagName('textarea')[0];
    for (let i = 0; i < 3; i++) {
        let element = document.getElementsByClassName('product')[i];
        let name = element.children[1].innerHTML;
        let price = +element.children[2].innerHTML.split(' ')[1];

        document.getElementsByTagName('button')[i].addEventListener('click', () => {
            products.push({name, price});
            totalPrice+= price;
            textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        })
    }

    buyButton.addEventListener('click', () => {
        let list = products.map(p => p.name).filter((el, index, arr) => {
            if (arr.indexOf(el) === index) {
                return el;
            }
        });

        textarea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`
    })


}