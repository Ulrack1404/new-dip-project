export const categories = {
    pizza: {
        _id: "191c84f1a8dd4a1a863bfe7dbe1d37bb",
        name: "Пицца",
        imageUrl: "category/pizza"
    },
    coldSalads: {
        _id: "6ea5c4dde56f412095012d64171c75e1",
        name: "Салаты",
        imageUrl: "category/salaty"
    },
    beverages: {
        _id: "5483f29f32424c5988000ca9d2a38711",
        name: "Напитки",
        imageUrl: "category/napitki"
    },
    fruits: {
        _id: "7cccc5bc5ded4e95acd33e1b738778df",
        name: "Фрукты",
        imageUrl: "category/frukts"
    },
    rolls: {
        _id: "a875e06226a443359830436e006a520b",
        name: "Роллы",
        imageUrl: "category/rolly"
    },
    deserts: {
        _id: "01ec45f53e454157a5fbcf7a987556b7",
        name: "Десерты",
        imageUrl: "category/deserty"
    }
};

export const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories);
        }, 3000);
    });

// export const fetchAll = () => {
//     return categories;
// };
