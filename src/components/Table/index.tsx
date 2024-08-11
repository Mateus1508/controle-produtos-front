import { Container, Paper } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface Props {
    rows?: GridRowsProp;
    columns: GridColDef[];
}

const Datatable = ({ rows, columns }: Props) => {
    return (
        <Container>
            <Paper style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20, 50, 100]}
                />
            </Paper>
        </Container>
    );
};

export default Datatable;
