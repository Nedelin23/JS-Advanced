function solve() {

    document.getElementsByTagName('button')[0].addEventListener('click', () =>{
        let furnitureList = document.getElementsByTagName('textarea')[0];
        for (let furniture of furnitureList){
            let div =document.createElement('div');
            div.setAttribute('class', 'furniture');
            let name = document.createElement('p');
            name.innerHTML = `Name: ${furniture.name}`;
            let img = document.createElement('img');
            img.setAttribute('src', furniture.img);
            let price = document.createElement('p');
            price.innerHTML = `Price: ${furniture.price}`;
            let factor = document.createElement('p');
            factor.innerHTML = `Decoration factor: ${furniture.decFactor}`;
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', checkbox);

            div.appendChild(name);
            div.appendChild(img);
            div.appendChild(price);
            div.appendChild(factor);
            div.appendChild(checkbox);

            document.getElementById('furniture-list').appendChild(div);
        }
    })

}