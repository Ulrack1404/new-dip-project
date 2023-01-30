import { categories } from "./categories.api";
import { badge } from "./badge.api";

const toys = [
    {
        _id: "93743bc2f3e7475cbb665b288930230a",
        name: "Собачка",
        category: categories.animals,
        price: 500,
        imageUrl: "../../../img/animals/1.jpg",
        badge: badge.bestseller,
        inBasket: false

    },
    {
        _id: "6e4d327939b741cb93abdcecf6ef0be7",
        name: "Лисичка",
        category: categories.animals,
        price: 700,
        imageUrl: "./img",
        badge: badge.new,
        inBasket: false
    },
    {
        _id: "aeb0d4aceff043ae8dbafd8a42df85da",
        name: "Мышка",
        category: categories.animals,
        price: 400,
        imageUrl: "./img",
        badge: null,
        inBasket: false
    },
    {
        _id: "30ea3ed6ad794f80b134e787a592ee85",
        name: "Набор елочных шаров",
        category: categories.christmasBalls,
        price: 100,
        imageUrl: "./img",
        badge: null,
        inBasket: false
    },
    {
        _id: "acdc79551ee6447699391fb7012adece",
        name: "Набор елочных шаров 'Лампочки'",
        category: categories.christmasBalls,
        price: 500,
        imageUrl: "./img",
        badge: null,
        inBasket: false
    }
];

// export const fetchAll = () => {
//     return toys;
// };

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(toys);
//         }, 1000);
//     });

// export default {
//     fetchAll
// };

if (!localStorage.getItem("toys")) {
    localStorage.setItem("toys", JSON.stringify(toys));
}
export const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("toys")));
        }, 2000);
    });

// export default {
//     fetchAll
// };
