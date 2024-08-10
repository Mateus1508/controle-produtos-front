import styles from './styles.module.css';
import Link from 'next/link';
import InputField from '@/components/input';

const Login = () => {
    return (
        <div className="container-row">
            <form className={styles.form}>
                <h1 className={styles.title}>Realize o login</h1>
                <InputField text="CPF/CNPJ" />
                <InputField text="Senha" type="password" />
                <button className="btn-primary">Entrar</button>
                <Link href="/auth/register" className="btn-secondary">
                    Criar minha conta
                </Link>
            </form>
        </div>
    );
};

export default Login;
