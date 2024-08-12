import { ProductMethods } from '@/api/routes/products';
import { useMutation } from '@tanstack/react-query';

const useDeleteProductById = () => {
    const { deleteProduct } = new ProductMethods();
    const mutation = useMutation({
        mutationFn: async (id: number) => {
            const result = await deleteProduct(id);
            console.log(result);
            return result;
        },
    });

    return mutation;
};

export default useDeleteProductById;
