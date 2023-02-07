import httpService from "./http.service";

const foodEndpoint = "food/";

const foodService = {
    get: async () => {
        const { data } = await httpService.get(foodEndpoint);
        return data;
    }
};
export default foodService;
