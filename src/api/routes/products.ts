import { UpdateProductDTO } from '@/interfaces/UpdateProductDto';
import api from '../apiConfig';
import { CreateProductDTO } from '@/interfaces/CreateProductDto';

export class ProductMethods {
    getAllProducts = async () => {
        try {
            const response = await api.get('/products/get-all-products');
            return response.data;
        } catch (error) {
            throw new Error(
                'Erro ao retornar produtos. Por favor recarregue a página.'
            );
        }
    };

    getProductById = async (id: number) => {
        try {
            const response = await api.get(`/products/get-one-product/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(
                'Erro ao retornar produto. Por favor recarregue a página.'
            );
        }
    };

    createProduct = async (data: CreateProductDTO) => {
        try {
            const response = await api.post(`/products/create-product`, data);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao atualizar produto. Tente novamente.');
        }
    };

    updateProduct = async (id: number, data: UpdateProductDTO) => {
        try {
            const response = await api.patch(
                `/products/update-product/${id}`,
                data
            );
            return response.data;
        } catch (error) {
            throw new Error('Erro ao atualizar produto. Tente novamente.');
        }
    };

    deleteProduct = async (id: number) => {
        try {
            const response = await api.delete(`/products/delete-product/${id}`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao deletar produto. Tente novamente.');
        }
    };
}
