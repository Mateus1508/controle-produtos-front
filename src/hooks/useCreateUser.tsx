import { AuthMethods } from '@/api/routes/auth';
import { CreateUserDTO } from '@/interfaces/CreateUserDto';
import { useMutation } from '@tanstack/react-query';

const useCreateUser = () => {
    const { register } = new AuthMethods();
    const mutation = useMutation({
        mutationFn: async (data: CreateUserDTO) => {
            const result = await register(data);
            return result;
        },
    });

    return mutation;
};

export default useCreateUser;
