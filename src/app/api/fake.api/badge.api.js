export const badge = {
    new: {
        _id: "51b5f8f95f92442ca6d6441bfae8ff31",
        name: "Новинка"
    },
    bestseller: {
        _id: "2b9ccf301d29459c8701ba74364ae74c",
        name: "Хит продаж"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(badge);
        }, 2000);
    });

export default {
    fetchAll
};
// export const fetchAll = () => {
//     return badge;
// };
