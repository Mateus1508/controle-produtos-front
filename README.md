## Como rodar o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/Mateus1508/controle-produtos-front.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
.
├── public/                # Arquivos estáticos e imagens
│   └── background.jpg     # Exemplo de imagem de fundo
├── src/                   # Código-fonte da aplicação
│   ├── api/               # Métodos e chamadas à API
│   ├── app/               # Configurações de rotas e estrutura da aplicação
│   ├── components/        # Componentes React reutilizáveis
│   ├── constants/         # Constantes
│   ├── hooks/             # Hooks personalizados
│   ├── interfaces/        # Tipagens TypeScript
│   ├── providers/         # Contextos e provedores
│   ├── store/             # Gerenciamento de estado global
│   └── middleware.ts      # Middleware personalizado para autenticação
├── .eslintrc.json         # Configurações do ESLint
├── .prettierrc            # Configurações do Prettier
├── next.config.mjs        # Configurações do Next.js
├── package.json           # Dependências e scripts do projeto
├── package-lock.json      # Registro de versões exatas das dependências
└── tsconfig.json          # Configurações do TypeScript

```
