'use client';

import Datatable from '@/components/Table';
import useGetAllProducts from '@/hooks/useGetAllProducts';
import styles from './styles.module.css';
import { useState } from 'react';
import InputField from '@/components/InputField';
import { useRouter } from 'next/navigation';

const ShowProducts = () => {
    const { data } = useGetAllProducts();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data?.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Listagem de produtos</h1>
            <div className={styles.gridBox}>
                <section className={styles.filterBox}>
                    <InputField
                        text={'Pesquise por nome do produto'}
                        onChange={handleSearchChange}
                        value={searchQuery}
                    />
                    <button
                        style={{ width: '300px' }}
                        className="btn-primary"
                        onClick={() => router.push('/product/')}
                    >
                        Adicionar novo produto
                    </button>
                </section>
                <Datatable rows={filteredData} />
            </div>
        </div>
    );
};

export default ShowProducts;
