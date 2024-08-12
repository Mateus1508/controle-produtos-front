import { ProductMethods } from '@/api/routes/products';
import { CreateProductDTO } from '@/interfaces/CreateProductDto';
import { useMutation } from '@tanstack/react-query';

const useCreateProduct = () => {
    const { createProduct } = new ProductMethods();
    const mutation = useMutation({
        mutationFn: async (data: CreateProductDTO) => {
            const result = await createProduct(data);
            return result;
        },
    });

    return mutation;
};

export default useCreateProduct;
