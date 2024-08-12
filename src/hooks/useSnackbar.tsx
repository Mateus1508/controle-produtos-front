import { SnackbarProps } from '@/interfaces/SnackbarProps';
import { useState, useCallback } from 'react';

const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        open: false,
        message: '',
        severity: 'success',
    });

    const showSnackbar = useCallback(
        (messages: string | string[], severity: 'success' | 'error') => {
            const formattedMessage = Array.isArray(messages)
                ? messages.join('\n') // Junta as mensagens com quebras de linha
                : messages;

            setSnackbar({
                open: true,
                message: formattedMessage,
                severity,
            });
        },
        []
    );

    const closeSnackbar = useCallback(() => {
        setSnackbar((prev) => ({
            ...prev,
            open: false,
        }));
    }, []);

    return {
        snackbar,
        showSnackbar,
        closeSnackbar,
    };
};

export default useSnackbar;
