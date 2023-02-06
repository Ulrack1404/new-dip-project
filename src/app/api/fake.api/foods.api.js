import { categories } from "./categories.api";
import { badge } from "./badge.api";

const foods = [
    {
        _id: "93743bc2f3e7475cbb665b288930230a",
        name: "Маргарита",
        category: categories.pizza,
        price: 320,
        description: "помидоры, моцарелла, базилик",
        imageUrl: "pizza/pizza-margarita",
        // imageUrl: require("../../../img/categories/pizza/pizza-margarita.jpg"),
        badge: badge.bestseller,
        inBasket: false
    },
    {
        _id: "6e4d327939b741cb93abdcecf6ef0be7",
        name: "Детская",
        category: categories.pizza,
        price: 330,
        description: "ветчина, помидоры, сыр",
        imageUrl: "pizza/pizza-detskaya",
        badge: badge.new,
        inBasket: false
    },
    {
        _id: "aeb0d4aceff043ae8dbafd8a42df85da",
        name: "Ветчина с ананасом",
        category: categories.pizza,
        price: 360,
        description: "ветчина, ананас, перец болгарский, майонез",
        imageUrl: "pizza/pizza-vetchina-s-ananasom",
        badge: null,
        inBasket: false
    },
    {
        _id: "30ea3ed6ad794f80b134e787a592ee85",
        name: "Ветчина с грибами",
        category: categories.pizza,
        price: 400,
        description: "ветчина, грибы, помидоры, сыр, лук",
        imageUrl: "pizza/pizza-vetchina-s-gribami",
        badge: null,
        inBasket: false
    },
    {
        _id: "acdc79551ee6447699391fb7012adece",
        name: "Аромат Италии",
        category: categories.pizza,
        price: 500,
        description: "помидоры, брынза, оливки, перец, сыр",
        imageUrl: "pizza/pizza-aromat-italii",
        badge: null,
        inBasket: false
    },
    {
        _id: "3055958544084b5a8b94a319fa4c2ef9",
        name: "Корсиканский",
        category: categories.coldSalads,
        price: 225,
        description: "помидоры, оливки, фета, огурец, перец болгарский",
        imageUrl: "salats/salat-korsikanskiy",
        badge: null,
        inBasket: false
    },
    {
        _id: "6818f858955949bea9b7760e142a31ba",
        name: "Салат из авокадо с фетой",
        category: categories.coldSalads,
        price: 230,
        description: "лист салата, помидор, сыр фета, авокадо, огурец, оливки",
        imageUrl: "salats/salat_s_avokado_i_sirom_feta",
        badge: null,
        inBasket: false
    },
    {
        _id: "6b615a47bed344d59d9d5d9caae139e8",
        name: "Сырная корзиночка",
        category: categories.coldSalads,
        price: 175,
        description: "кальмары, яйцо, грибы, лук, морковь, майонез",
        imageUrl: "salats/salat-syrnaya-korzinochka",
        badge: null,
        inBasket: false
    },
    {
        _id: "e90ab1c32cc2417c811fc4241a49ad2e",
        name: "Нежный",
        category: categories.coldSalads,
        price: 165,
        description: "кальмары, яйцо, сыр",
        imageUrl: "salats/nejniy",
        badge: null,
        inBasket: false
    },
    {
        _id: "d972ac6215304aabb3dcc59cb09db86f",
        name: "Оливье с сёмгой",
        category: categories.coldSalads,
        price: 265,
        description: "семга с картофель, яйцо, морковь, огурец, майонез",
        imageUrl: "salats/salat-olivie-s-semgoy",
        badge: null,
        inBasket: false
    },
    {
        _id: "afce28d2954e4a9eb144f591799aaa6f",
        name: "Coca-cola",
        category: categories.beverages,
        price: 105,
        description: "0,5 л",
        imageUrl: "drinks/koka-kolla2",
        badge: null,
        inBasket: false
    },
    {
        _id: "054cf515e0cf4893bf0bc60c4ca4ff8b",
        name: "Bonaqua",
        category: categories.beverages,
        price: 75,
        description: "0,5 л",
        imageUrl: "drinks/BONAKVA",
        badge: null,
        inBasket: false
    },
    {
        _id: "f71d0f609f1c4b199225e9d0007d29a5",
        name: "Sprite",
        category: categories.beverages,
        price: 105,
        description: "0,5 л",
        imageUrl: "drinks/SPRITE2",
        badge: null,
        inBasket: false
    },
    {
        _id: "e714167d3e3f46b9a8241e521aa52f00",
        name: "Коктейль Фруктовый Микс",
        category: categories.beverages,
        price: 150,
        description:
            "Соки: персиковый, вишневый, ананасовый, мороженое, взбитые сливки, банан",
        imageUrl: "drinks/fruktovyi_mix",
        badge: null,
        inBasket: false
    },
    {
        _id: "3065aee237f243a4a2ff183155210a8b",
        name: "Коктейль «Паук Черная вдова»",
        category: categories.beverages,
        price: 100,
        description: "пепси, мороженое, шоколад",
        imageUrl: "drinks/pauk",
        badge: null,
        inBasket: false
    },
    {
        _id: "54c1d202c1814f9d87e1e3d3d968b705",
        name: "Банан",
        category: categories.fruits,
        price: 30,
        description: "",
        imageUrl: "fruits/banan1",
        badge: null,
        inBasket: false
    },
    {
        _id: "632b1b9b280a4d658044bbe877a98b3c",
        name: "Лимон",
        category: categories.fruits,
        price: 50,
        description: "",
        imageUrl: "fruits/lemon1",
        badge: null,
        inBasket: false
    },
    {
        _id: "6c0a3b43d8f0406381f57275211c2cd8",
        name: "Виноград",
        category: categories.fruits,
        price: 55,
        description: "",
        imageUrl: "fruits/vinograd1",
        badge: null,
        inBasket: false
    },
    {
        _id: "2a0143215d53408e9cd5f40802f36238",
        name: "Киви",
        category: categories.fruits,
        price: 60,
        description: "",
        imageUrl: "fruits/kivi1",
        badge: null,
        inBasket: false
    },
    {
        _id: "c67cc4388c8440e583015691b4bc1500",
        name: "Апельсин",
        category: categories.fruits,
        price: 75,
        description: "",
        imageUrl: "fruits/apelsin1",
        badge: null,
        inBasket: false
    },
    {
        _id: "3bd93aa735f94d72a10de5bbdb6f73f3",
        name: "Запечённый с лососем",
        category: categories.rolls,
        price: 255,
        description: "Лосось, сливочный сыр, соус унаги, соус лав",
        imageUrl: "rolls/sushi_zapechenie_s_lososem",
        badge: null,
        inBasket: false
    },
    {
        _id: "58723d0924c44a88b3eec9762209aa74",
        name: "Филадельфия",
        category: categories.rolls,
        price: 270,
        description: "Лосось с/с, сливочный сыр, огурец",
        imageUrl: "rolls/sushi_filadelphiya",
        badge: null,
        inBasket: false
    },
    {
        _id: "4167746dae1f42eaaaea198a153899be",
        name: "Запеченный краб",
        category: categories.rolls,
        price: 255,
        description:
            "Лосось, сливочный сыр, тобико, кунжут, соус унаги, соус лав со снежным крабом",
        imageUrl: "rolls/sushi_zapechenie_s_krabom",
        badge: null,
        inBasket: false
    },
    {
        _id: "908909e710a545ac8cf6d7a0b3620858",
        name: "Каппа маки",
        category: categories.rolls,
        price: 65,
        description: "С огурцом",
        imageUrl: "rolls/shushi_kappa_maki",
        badge: null,
        inBasket: false
    },
    {
        _id: "89af98b7b7c74f88b475c3d0d7c98282",
        name: "Унаги маки",
        category: categories.rolls,
        price: 170,
        description: "С угрем",
        imageUrl: "rolls/shushi_unagi_maki",
        badge: null,
        inBasket: false
    },
    {
        _id: "ccdc6db7d0044140b4a0630460617f45",
        name: "Пирожное Медовое",
        category: categories.deserts,
        price: 90,
        description: "",
        imageUrl: "deserts/pirojenoe_medovoe",
        badge: null,
        inBasket: false
    },
    {
        _id: "7c164d280c1641c6b8a84767128e0ece",
        name: "Пирожное «Чизкейк»",
        category: categories.deserts,
        price: 100,
        description: "",
        imageUrl: "deserts/chizckake",
        badge: null,
        inBasket: false
    },
    {
        _id: "d986148ff5c34649a63478c252aa24d3",
        name: "Мороженое «Мулатка»",
        category: categories.deserts,
        price: 120,
        description:
            "шоколадный пломбир, вафельные трубочки, орехи, шоколадный сироп",
        imageUrl: "deserts/morojenoe_mulatka1",
        badge: null,
        inBasket: false
    },
    {
        _id: "c4904bf42c2a47bd9509972e86aab31f",
        name: "Десерт фруктовый «Лакомка»",
        category: categories.deserts,
        price: 130,
        description: "банан, апельсин, зефир, йогурт, шоколад",
        imageUrl: "deserts/fruktovyi_salat1",
        badge: null,
        inBasket: false
    },
    {
        _id: "29bc0863f0bd40f1adc0b506693fb006",
        name: "Мороженое «Лесная сказка»",
        category: categories.deserts,
        price: 145,
        description: "фрукты, джем, сливки, орех",
        imageUrl: "deserts/moroj_lesnaya_skazka1",
        badge: null,
        inBasket: false
    }
];

if (!localStorage.getItem("foods")) {
    localStorage.setItem("foods", JSON.stringify(foods));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("foods")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(foods.find((food) => food._id === id));
        }, 1000);
    });
export default {
    fetchAll,
    getById
};
