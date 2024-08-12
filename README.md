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

## Configurações Adicionais

1. **Variáveis de Ambiente**: Configure suas variáveis de ambiente no arquivo `.env.local`. Exemplo de conteúdo:

    ```
    NEXT_PUBLIC_API_URL=https://api.exemplo.com
    ```

2. **Imagens de Fundo**: Para definir uma imagem de fundo global, adicione a imagem na pasta `public/` e configure o CSS global.

## Scripts Disponíveis

-   `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
-   `npm run build` ou `yarn build`: Cria uma versão otimizada para produção.
-   `npm run start` ou `yarn start`: Inicia o servidor em modo de produção.
-   `npm run lint` ou `yarn lint`: Executa o linting do código.
-   `npm run test` ou `yarn test`: Executa os testes.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações.
3. Faça um pull request detalhando suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para ajustar este README conforme as necessidades específicas do seu projeto.
