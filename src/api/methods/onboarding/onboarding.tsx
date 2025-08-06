import api from "../../api"

export const GetOnboardings = () => {
    return api.get('/onboardings');
};