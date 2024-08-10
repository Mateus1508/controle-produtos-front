import Datatable from '@/components/Table';
import productsColumns from '@/constants/productsColumnsDef';

const ShowProducts = () => {
    return (
        <div>
            <h1>Listagem de produtos</h1>
            <section>Filtro</section>
            <Datatable columns={productsColumns} />
        </div>
    );
};

export default ShowProducts;
