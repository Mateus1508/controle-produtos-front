import { ProductMethods } from '@/api/routes/products';
import { UpdateProductDTO } from '@/interfaces/UpdateProductDto';
import { useMutation } from '@tanstack/react-query';

const useUpdateProduct = () => {
    const { updateProduct } = new ProductMethods();
    const mutation = useMutation({
        mutationFn: async ({
            id,
            data,
        }: {
            id: string;
            data: UpdateProductDTO;
        }) => {
            const result = await updateProduct(id, data);
            console.log(result);
            return result;
        },
    });

    return mutation;
};

export default useUpdateProduct;
