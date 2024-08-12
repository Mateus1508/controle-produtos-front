import { LoginDTO } from '@/interfaces/LoginDto';
import axios from 'axios';
import api from '../apiConfig';
import { CreateUserDTO } from '@/interfaces/CreateUserDto';
import useAuthStore from '@/store/authStore';

export class AuthMethods {
    login = async (data: LoginDTO) => {
        try {
            const response = await api.post('/auth/login', data);

            const token = response.data.data.token;
            if (token) {
                useAuthStore.getState().setToken(token);
            }
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response;
            }
        }
    };

    register = async (data: CreateUserDTO) => {
        try {
            const response = await api.post('/auth/register', data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return error.response;
            }
        }
    };
}
