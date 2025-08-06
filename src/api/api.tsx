import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { store } from "../store/store";

const BASE_URL = 'https://apimywisy.hostweb.uz/api/v1/app';
const BASE_TOKEN = '616|O9tjAOn5GVJGEBNOGTfjtD13giLgUmjV0xuZya0768fe3751'

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    async (config: any) => {
        if (!config.skipAuth) {
            const token = await SecureStore.getItemAsync('access_token');
            if (BASE_TOKEN) {
                config.headers.Authorization = `Bearer ${BASE_TOKEN}`;
            }
        }

        config.headers['X-Localization'] = store?.language || 'ru';
        
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;