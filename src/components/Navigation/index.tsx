'use client';

import { publicRoutes } from '@/constants/routePaths';
import useAuthStore from '@/store/authStore';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { TbLogout } from 'react-icons/tb';

const Navigation = () => {
    const pathname = usePathname();
    const isPublicRoute = publicRoutes.includes(pathname);
    const { clearToken } = useAuthStore.getState();
    const router = useRouter();

    const handleLogout = () => {
        clearToken();
        router.push('/');
    };

    return (
        <>
            {!isPublicRoute ? (
                <AppBar position="static" sx={{ backgroundColor: '#47967f' }}>
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Controle de produtos
                        </Typography>

                        <IconButton onClick={handleLogout}>
                            <TbLogout size={32} color="white" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            ) : null}
        </>
    );
};

export default Navigation;
