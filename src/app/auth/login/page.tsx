'use client';

import styles from './styles.module.css';
import Link from 'next/link';
import InputField from '@/components/InputField';
import useLogin from '@/hooks/useLogin';
import { useState } from 'react';
import { LoginDTO } from '@/interfaces/LoginDto';
import { CircularProgress } from '@mui/material';
import useSnackbar from '@/hooks/useSnackbar';
import NotificationAlert from '@/components/NotificationAlert.tsx';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [formValues, setFormValues] = useState<LoginDTO>({
        taxNumber: '',
        password: '',
    });
    const { mutate, isPending } = useLogin();
    const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();
    const router = useRouter();
    const handleLoginUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(formValues, {
            onSuccess: (user) => {
                const severity = user?.success ? 'success' : 'error';
                const message = user?.success
                    ? user.message
                    : user.data.message;
                const messages = Array.isArray(message) ? message : [message];
                showSnackbar(messages, severity);
                if (user.success) router.push('/get-all-products');
            },
            onError: (error) => {
                showSnackbar(error.message, 'error');
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className="container-row bg-image">
            <form className="form" onSubmit={handleLoginUser}>
                <h1 className={styles.title}>Realize o login</h1>
                <InputField
                    text="CPF/CNPJ"
                    value={formValues.taxNumber}
                    name="taxNumber"
                    onChange={handleChange}
                />
                <InputField
                    text="Senha"
                    type="password"
                    value={formValues.password}
                    name="password"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    style={{ width: '100%' }}
                    className={`btn-primary ${isPending ? 'loading' : ''}`}
                    disabled={isPending}
                >
                    {isPending ? (
                        <CircularProgress size={18} sx={{ color: 'white' }} />
                    ) : (
                        ' Entrar'
                    )}
                </button>
                <Link
                    href="/auth/register"
                    className="btn-secondary"
                    style={{ width: '100%' }}
                >
                    Criar minha conta
                </Link>
                <NotificationAlert
                    snackbar={snackbar}
                    onClose={closeSnackbar}
                />
            </form>
        </div>
    );
};

export default Login;
