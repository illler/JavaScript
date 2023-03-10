'use strict';

const user = {
    4: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function (){
        console.log(`${this.name} ${this.surname}`)
    }
}
const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);


const shops =[
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 1500, 230]

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) =>{
    map.set(shop, budget[i]);
});
console.log(map);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));

for (const mapElement of map.entries()) {
    console.log(Object.keys(mapElement[0]));
}