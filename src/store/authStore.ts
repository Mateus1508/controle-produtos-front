import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { create } from 'zustand';

interface AuthState {
    token: string | null;
    setToken: (token: string | null) => void;
    clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: getCookie('token') || null,
    setToken: (token: string | null) => {
        set({ token });
        if (token) {
            setCookie('token', token);
        } else {
            deleteCookie('token');
        }
    },
    clearToken: () => {
        set({ token: null });
        deleteCookie('token');
    },
}));

export default useAuthStore;
