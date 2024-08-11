import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { SnackbarProps } from '@/interfaces/SnackbarProps';

interface NotificationAlertProps {
    snackbar: SnackbarProps;
    onClose: () => void;
}

const NotificationAlert: React.FC<NotificationAlertProps> = ({
    snackbar,
    onClose,
}) => {
    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={snackbar.severity}>
                {snackbar.message}
            </Alert>
        </Snackbar>
    );
};

export default NotificationAlert;
