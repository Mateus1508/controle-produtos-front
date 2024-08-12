'use client';

import InputField from '@/components/Input';
import useGetProductById from '@/hooks/useGetProductById';
import type { Product } from '@/interfaces/Product';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import TextAreaField from '@/components/TextArea';
import useUpdateProduct from '@/hooks/useUpdateProduct';
import { CreateProductDTO } from '@/interfaces/CreateProductDto';
import { UpdateProductDTO } from '@/interfaces/UpdateProductDto';
import useCreateProduct from '@/hooks/useCreateProduct';
import useSnackbar from '@/hooks/useSnackbar';
import NotificationAlert from '@/components/NotificationAlert.tsx';
const Product = () => {
    const [formData, setFormData] = useState<
        CreateProductDTO | UpdateProductDTO
    >({
        name: '',
        description: '',
        price: 0,
        stock: 0,
    });
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const { data } = useGetProductById(id);
    const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();
    const { mutate: edit } = useUpdateProduct();
    const { mutate: create } = useCreateProduct();

    useEffect(() => {
        if (data) setFormData(data);
    }, [data]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const parsedValue =
            name === 'price' || name === 'stock' ? Number(value) : value;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: parsedValue,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        if (data) {
            edit(
                { id, data: formData },
                {
                    onSuccess: (product) => {
                        const severity = product?.success ? 'success' : 'error';
                        const message = product?.message
                            ? product.message
                            : product?.data?.message
                            ? product.data.message
                            : 'Produto atualizado com sucesso (necessário adicionar retorno da API para ser mostrado aqui)!';
                        const messages = Array.isArray(message)
                            ? message
                            : [message];
                        showSnackbar(messages, severity);
                        if (!product.message) router.push('/get-all-products');
                    },
                    onError: (error) => {
                        showSnackbar(error.message, 'error');
                    },
                }
            );
        } else {
            create(formData as CreateProductDTO, {
                onSuccess: (product) => {
                    const severity = product?.success ? 'success' : 'error';
                    const message = product?.success
                        ? product.message
                        : product.data.message;
                    const messages = Array.isArray(message)
                        ? message
                        : [message];
                    showSnackbar(messages, severity);
                    if (product.success) router.push('/get-all-products');
                },
                onError: (error) => {
                    showSnackbar(error.message, 'error');
                },
            });
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {id ? 'Editar produto' : 'Adicionar novo produto'}
            </h1>
            <form className="form" onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    name="name"
                    text="Nome do Produto"
                    onChange={handleChange}
                    value={formData.name}
                    required={!id}
                />
                <TextAreaField
                    name="description"
                    text="Descrição"
                    onChange={handleChange}
                    value={formData.description}
                />
                <InputField
                    type="number"
                    name="price"
                    text="Preço do Produto"
                    onChange={handleChange}
                    value={formData.price}
                    required={!id}
                />
                <InputField
                    type="number"
                    name="stock"
                    text="Estoque"
                    onChange={handleChange}
                    value={formData.stock}
                    required={!id}
                />
                <div className={styles.btnBox}>
                    <button
                        className="btn-primary"
                        type="submit"
                        style={{ width: '100%' }}
                    >
                        {id ? 'Salvar' : 'Cadastrar'}
                    </button>
                    <button
                        className="btn-secondary"
                        type="button"
                        style={{ width: '100%' }}
                        onClick={() => router.push('/get-all-products')}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            <NotificationAlert snackbar={snackbar} onClose={closeSnackbar} />
        </div>
    );
};

export default Product;
