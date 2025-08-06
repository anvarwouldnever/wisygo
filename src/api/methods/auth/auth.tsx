import api from "../../api"

export const SignUp = (email: string, password: string,) => {
    return api.post('/auth/register', { email, password });
};

export const LogIn = (email: string, password: string,) => {
    return api.post('/auth/login', { email, password });
};