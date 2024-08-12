import { AuthMethods } from '@/api/routes/auth';
import { LoginDTO } from '@/interfaces/LoginDto';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
    const { login } = new AuthMethods();
    const mutation = useMutation({
        mutationFn: async (data: LoginDTO) => {
            const result = await login(data);
            console.log(result);
            return result;
        },
    });

    return mutation;
};

export default useLogin;
