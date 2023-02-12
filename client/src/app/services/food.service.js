import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const foodEndpoint = "food/";

const foodService = {
    get: async () => {
        const { data } = await httpService.get(foodEndpoint);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            foodEndpoint + localStorageService.getFoodId(),
            payload
        );
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            foodEndpoint + payload._id,
            payload
        );
        return data;
    },
    remove: async (foodId) => {
        const { data } = await httpService.delete(foodEndpoint + foodId);
        return data;
    }
};
export default foodService;
