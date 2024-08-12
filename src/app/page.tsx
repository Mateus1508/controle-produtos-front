import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className="container-column bg-image">
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Bem-vindo ao{' '}
                    <span className={styles.highlight}>
                        Controle de Produtos
                    </span>
                    !
                </h1>
                <p className={styles.paragraph}>
                    O Controle de Produtos é uma plataforma fácil de usar que
                    ajuda você a gerenciar seu inventário de forma simples e
                    eficiente. Com ela, você pode adicionar, atualizar e remover
                    produtos com apenas alguns cliques, além de acompanhar
                    preços e estoques em tempo real. É a solução perfeita para
                    manter tudo organizado e garantir que sua gestão de produtos
                    seja sempre precisa e descomplicada.
                </p>
                <section className={styles.linksBox}>
                    <Link
                        href="/auth/login"
                        className="btn-primary"
                        style={{ width: '100%' }}
                    >
                        Realizar o login
                    </Link>
                    <span>Ou</span>
                    <Link
                        href="/auth/register"
                        className="btn-primary"
                        style={{ width: '100%' }}
                    >
                        Criar conta
                    </Link>
                </section>
            </div>
        </div>
    );
}
