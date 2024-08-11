import { ProductMethods } from '@/api/routes/products';
import { Product } from '@/interfaces/Product';
import { useQuery } from '@tanstack/react-query';

const useGetAllProducts = () => {
    const { getAllProducts } = new ProductMethods();
    const { data } = useQuery<Product[], Error>({
        queryKey: ['getAllProducts'],
        queryFn: async () => {
            const result = await getAllProducts();
            return result.data.products;
        },
    });

    return { data };
};

export default useGetAllProducts;
