export const categories = {
    fairyLights: { _id: "191c84f1a8dd4a1a863bfe7dbe1d37bb", name: "Гирлянды" },
    christmasBalls: {
        _id: "6ea5c4dde56f412095012d64171c75e1",
        name: "Ёлочные шары"
    },
    animals: { _id: "5483f29f32424c5988000ca9d2a38711", name: "Животные" },
    newYearCharacters: {
        _id: "7cccc5bc5ded4e95acd33e1b738778df",
        name: "Новогодние персонажи"
    },
    stars: { _id: "a875e06226a443359830436e006a520b", name: "Звёзды" },
    snowflakes: { _id: "01ec45f53e454157a5fbcf7a987556b7", name: "Снежинки" },
    glowingDecor: {
        _id: "4d0bf6ab55bd4b3b9bb1cb41a1213684",
        name: "Светящийся декор"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories);
        }, 2000);
    });

export default {
    fetchAll
};
