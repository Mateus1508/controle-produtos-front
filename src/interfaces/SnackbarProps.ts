export interface SnackbarProps {
    open: boolean;
    message: string | string[];
    severity: 'success' | 'error';
}
