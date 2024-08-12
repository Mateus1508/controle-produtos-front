import { ProductMethods } from '@/api/routes/products';
import { Product } from '@/interfaces/Product';
import { useQuery } from '@tanstack/react-query';

const useGetProductById = (id: string) => {
    const { getProductById } = new ProductMethods();
    const { data } = useQuery<Product, Error>({
        queryKey: ['getProductById', id],
        queryFn: async () => {
            const response = await getProductById(id);
            const { id: _, ...result } = response;
            return result;
        },
        enabled: !!id,
    });

    return { data };
};

export default useGetProductById;
