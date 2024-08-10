import styles from './styles.module.css';
import Link from 'next/link';
import InputField from '@/components/input';

const Register = () => {
    return (
        <div className="container-row">
            <form className={styles.form}>
                <h1 className={styles.title}>Crie sua conta</h1>
                <InputField text="Nome" />
                <InputField text="CPF/CNPJ" />
                <InputField text="Email" type="email" />
                <InputField text="Telefone" type="tel" />
                <InputField text="Senha" type="password" />
                <InputField text="Confirmar senha" type="password" />
                <button className="btn-primary">Criar</button>
                <Link href="/auth/register" className="btn-secondary">
                    Já possuo uma conta
                </Link>
            </form>
        </div>
    );
};

export default Register;
