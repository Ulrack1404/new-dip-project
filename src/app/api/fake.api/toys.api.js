import { categories } from "./categories.api";
import { badge } from "./badge.api";

const toys = [
    {
        _id: "93743bc2f3e7475cbb665b288930230a",
        name: "Собачка",
        category: categories.animals,
        price: 500,
        imageUrl: "./img",
        badge: badge.bestseller
    },
    {
        _id: "6e4d327939b741cb93abdcecf6ef0be7",
        name: "Лисичка",
        category: categories.animals,
        price: 700,
        imageUrl: "./img",
        badge: badge.new
    },
    {
        _id: "aeb0d4aceff043ae8dbafd8a42df85da",
        name: "Мышка",
        category: categories.animals,
        price: 400,
        imageUrl: "./img",
        badge: null
    },
    {
        _id: "30ea3ed6ad794f80b134e787a592ee85",
        name: "Набор елочных шаров",
        category: categories.christmasBalls,
        price: 100,
        imageUrl: "./img",
        badge: null
    },
    {
        _id: "acdc79551ee6447699391fb7012adece",
        name: "Набор елочных шаров 'Лампочки'",
        category: categories.christmasBalls,
        price: 500,
        imageUrl: "./img",
        badge: null
    }
];

export function fetchAll() {
    return toys;
}
