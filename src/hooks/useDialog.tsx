import { useState } from 'react';

const useDialog = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    return {
        open,
        openDialog,
        closeDialog,
    };
};

export default useDialog;
