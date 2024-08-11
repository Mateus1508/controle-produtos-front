'use client';

import Datatable from '@/components/Table';
import productsColumns from '@/constants/productsColumnsDef';
import useGetAllProducts from '@/hooks/useGetAllProducts';
import styles from './styles.module.css';

const ShowProducts = () => {
    const { data } = useGetAllProducts();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Listagem de produtos</h1>
            <div>
                <section>Filtro</section>
                <Datatable rows={data} columns={productsColumns} />
            </div>
        </div>
    );
};

export default ShowProducts;
