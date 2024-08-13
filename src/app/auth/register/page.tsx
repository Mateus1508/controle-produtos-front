'use client';

import styles from './styles.module.css';
import Link from 'next/link';
import InputField from '@/components/InputField';
import useCreateUser from '@/hooks/useCreateUser';
import { CreateUserDTO } from '@/interfaces/CreateUserDto';
import useSnackbar from '@/hooks/useSnackbar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NotificationAlert from '@/components/NotificationAlert.tsx';
import { CircularProgress } from '@mui/material';

const Register = () => {
    const [formValues, setFormValues] = useState<CreateUserDTO>({
        name: '',
        taxNumber: '',
        mail: '',
        phone: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const { mutate, isPending } = useCreateUser();
    const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();
    const router = useRouter();

    const handleCreateUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formValues.password !== confirmPassword) {
            showSnackbar('As senhas não coincidem', 'error');
            return;
        }
        mutate(formValues, {
            onSuccess: (user) => {
                const severity = user?.success ? 'success' : 'error';
                const message = user?.success
                    ? user.message
                    : user.data.message;
                const messages = Array.isArray(message) ? message : [message];
                showSnackbar(messages, severity);
                if (user.success) router.push('/auth/login');
            },
            onError: (error) => {
                showSnackbar(error.message, 'error');
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'confirmPassword') {
            setConfirmPassword(value);
        } else {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    return (
        <div className="container-row bg-image">
            <form className={styles.form} onSubmit={handleCreateUser}>
                <h1 className={styles.title}>Crie sua conta</h1>
                <InputField
                    name="name"
                    text="Nome"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="taxNumber"
                    text="CPF/CNPJ"
                    value={formValues.taxNumber}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="mail"
                    text="Email"
                    type="email"
                    value={formValues.mail}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="phone"
                    text="Telefone"
                    type="tel"
                    maxLength={11}
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="password"
                    text="Senha"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />
                <InputField
                    name="confirmPassword"
                    text="Confirmar senha"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button
                    className="btn-primary"
                    type="submit"
                    disabled={isPending}
                    style={{ width: '100%' }}
                >
                    {isPending ? (
                        <CircularProgress size={18} sx={{ color: 'white' }} />
                    ) : (
                        'Criar conta'
                    )}
                </button>
                <Link
                    href="/auth/login"
                    className="btn-secondary"
                    style={{ width: '100%' }}
                >
                    Já possuo uma conta
                </Link>
                <NotificationAlert
                    snackbar={snackbar}
                    onClose={closeSnackbar}
                />
            </form>
        </div>
    );
};

export default Register;
