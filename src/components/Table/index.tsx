import React, { useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
} from '@mui/material';
import TableActions from '../TableActions';
import { Product } from '@/interfaces/Product';

interface Props {
    rows?: Product[];
}

const Datatable = ({ rows = [] }: Props) => {
    // Estado para controlar a página atual e o tamanho da página
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Função para mudar a página
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    // Função para mudar o tamanho da página
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Volta para a primeira página ao mudar o tamanho da página
    };

    // Dados a serem exibidos na página atual
    const paginatedRows = rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer>
                <Table sx={{ minWidth: 650, width: '100%' }}>
                    <TableHead sx={{ backgroundColor: '#47967f' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#ffffff' }}>
                                Nome do produto
                            </TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>
                                Preço
                            </TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>
                                Estoque
                            </TableCell>
                            <TableCell align="center" sx={{ color: '#ffffff' }}>
                                Ações
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.stock}</TableCell>
                                <TableCell align="center" width={200}>
                                    <TableActions data={row} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{ backgroundColor: '#47967f', color: '#ffffff' }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Produtos por pág"
                labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count}`
                }
            />
        </Paper>
    );
};

export default Datatable;
