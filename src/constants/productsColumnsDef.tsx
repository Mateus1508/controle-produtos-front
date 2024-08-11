import { IconButton } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const productsColumns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        align: 'left', // Alinha o conteúdo da célula ao centro
        headerAlign: 'left',
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        disableColumnMenu: true,
        flex: 1,
        align: 'left', // Alinha o conteúdo da célula ao centro
        headerAlign: 'left',
    },
    {
        field: 'stock',
        headerName: 'Stock',
        type: 'number',
        disableColumnMenu: true,
        flex: 1,
        align: 'left', // Alinha o conteúdo da célula ao centro
        headerAlign: 'left',
    },
    {
        field: 'actions',
        headerName: 'Ações',

        align: 'center',
        headerAlign: 'center',
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
            <div
                style={{
                    display: 'flex',
                    gap: '5px',
                    justifyContent: 'center',
                }}
            >
                <IconButton
                    color="primary"
                    onClick={() => {
                        console.log('Edit', params.row.id);
                    }}
                >
                    <FaEdit size={24} />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => {
                        console.log('Delete', params.row.id);
                    }}
                >
                    <MdDelete size={24} />
                </IconButton>
            </div>
        ),
    },
];

export default productsColumns;
