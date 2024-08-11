import { SnackbarProps } from '@/interfaces/SnackbarProps';
import { useState, useCallback } from 'react';

const useSnackbar = () => {
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        open: false,
        message: '',
        severity: 'success',
    });

    const showSnackbar = useCallback(
        (message: string, severity: 'success' | 'error') => {
            setSnackbar({
                open: true,
                message,
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
