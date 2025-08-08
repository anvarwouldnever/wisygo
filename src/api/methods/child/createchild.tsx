import api from "../../api"

export const CreateChild = (name: string, avatar_id: string, birthday: string, gender: number, engagement_time: number) => {
    return api.post('/children', { name, avatar_id, birthday, gender, engagement_time });
};