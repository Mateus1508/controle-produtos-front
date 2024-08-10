import { GridColDef } from '@mui/x-data-grid';

// Definição das colunas
const productsColumns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        type: 'number',
    },
    {
        field: 'stock',
        headerName: 'Stock',
        width: 150,
        type: 'number',
    },
];

export default productsColumns;
