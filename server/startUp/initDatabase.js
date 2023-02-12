const Food = require("../models/Food");
const Category = require("../models/Category");

const foodsMock = require("../mock/foods.json");
const categoriesMock = require("../mock/categories.json");

module.exports = async () => {
    const foods = await Food.find();
    if (foods.length !== foodsMock.length) {
        await createInitialEntity(Food, foodsMock);
    }

    const categories = await Category.find();
    if (categories.length !== categoriesMock.length) {
        await createInitialEntity(Category, categoriesMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
