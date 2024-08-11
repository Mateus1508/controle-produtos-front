import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className="container-column">
            <h1 className={styles.title}>Bem-vindo ao Controle de Produtos!</h1>
            <h2>Selecione uma opção para entrar na plataforma</h2>
            <div className={styles.linksBox}>
                <Link href="/auth/login" className="btn-primary">
                    Realizar o login
                </Link>
                <Link href="/auth/register" className="btn-primary">
                    Criar minha conta
                </Link>
            </div>
        </div>
    );
}
