// src/components/CustomDialog.tsx

import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';

interface Props {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    content: string;
}

const ConfirmationDialog = ({ open, onClose, onConfirm, content }: Props) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirmação</DialogTitle>
            <DialogContent>
                <Typography>{content}</Typography>
            </DialogContent>
            <DialogActions>
                <button onClick={onClose} className="btn-secondary">
                    Cancelar
                </button>
                <button onClick={onConfirm} className="btn-primary">
                    Confirmar
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
