import useDialog from '@/hooks/useDialog';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ConfirmationDialog from '../ConfirmationDialog';
import useDeleteProductById from '@/hooks/useDeleteProductById';
import useSnackbar from '@/hooks/useSnackbar';
import NotificationAlert from '../NotificationAlert.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { Product } from '@/interfaces/Product';

interface Props {
    data: Product;
}

const TableActions = ({ data }: Props) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { open, openDialog, closeDialog } = useDialog();
    const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();
    const { mutate } = useDeleteProductById();
    const handleConfirmDelete = () => {
        mutate(Number(data.id), {
            onSuccess: () => {
                queryClient.refetchQueries({
                    queryKey: ['getAllProducts'],
                    type: 'active',
                });
                showSnackbar(`Produto excluído com sucesso!`, 'success');
            },
            onError: (error: Error) => {
                showSnackbar(error.message, 'error');
            },
        });
        closeDialog();
    };

    return (
        <div
            style={{
                display: 'flex',
                gap: '5px',
                justifyContent: 'center',
            }}
        >
            <IconButton
                color="primary"
                onClick={() => router.push(`/product/${data.id}`)}
            >
                <FaEdit size={24} color={'#47967f'} />
            </IconButton>
            <IconButton color="error" onClick={openDialog}>
                <MdDelete size={24} />
            </IconButton>
            <ConfirmationDialog
                open={open}
                onClose={closeDialog}
                onConfirm={handleConfirmDelete}
                content={`Você tem certeza que deseja excluir o produto ${data.name}?`}
            />
            <NotificationAlert snackbar={snackbar} onClose={closeSnackbar} />
        </div>
    );
};

export default TableActions;
