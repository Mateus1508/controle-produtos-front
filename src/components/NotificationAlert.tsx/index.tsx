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
    const messages = Array.isArray(snackbar.message)
        ? snackbar.message
        : [snackbar.message];
    const combinedMessage = messages.join('\n');

    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={snackbar.severity}>
                {combinedMessage.split('\n').map((msg, index) => (
                    <React.Fragment key={index}>
                        {msg}
                        <br />
                    </React.Fragment>
                ))}
            </Alert>
        </Snackbar>
    );
};

export default NotificationAlert;
