# Bem-vindo ao meu repositório REST-API-EmpresaFinanceira-FrontEnd

## Descrição

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.4

### Funcionalidades

- Cadastro de clientes
- Edição de clientes
- Exclusão de clientes

### Funcionalidades Futuras

- Cadastro de emprestimos
- Exclusão de emprestimos

Este projeto foi desenvolvido para utilizar como backend o repositório [REST-API-EmpresaFinanceira-BackEnd](https://github.com/joaorafaelleite/REST-API-EmpresaFinanceira-BackEnd) e utiliza a rota local http://localhost:8080 para acessa-lo.

## Tecnologias

- [Angular](https://angular.io/) - Framework para desenvolvimento de aplicações web
- [Typescript](https://www.typescriptlang.org/) - Superset do Javascript
- [Bootstrap](https://getbootstrap.com/) - Framework para desenvolvimento de aplicações web
- [Ngx-Mask](https://www.npmjs.com/package/ngx-mask) - Biblioteca para inserção de mascaras nos campos de cadastro
- [Sweetalert2](https://sweetalert2.github.io/) - Biblioteca para criação de alertas

## Telas

/home
- Página em construção, atualmente apresenta as tecnologias utilizadas tanto no Backend como no Frontend
- Também pode ser acessada pela rota em branco ou ao clicar em 'SofieBank'

/clientes
- Exibe, em formato de tabela, a lista de clientes cadastrados.

/clientes/cadastrar
- Permite cadastrar um novo cliente na base de dados.

/clientes/editar/:cpf
- Permite alterar um cliente já cadastrado na base de dados.

# Validações 

- O campo CPF deve, obrigatóriamente, conter um CPF válido.
- O campo Telefone deve conter apenas números, sendo preenchico com DDD e Telefone, com 10 ou 11 dígitos.
- O campo CEP deve conter apenas números e possuir 8 dígitos.
- Todos os campos devem estar preenchidos para dar sequência.
- Não é permitida a alteração do CPF de um cliente já cadastrado.

## Instalação

Execute `npm install` para instalar as dependências do projeto.

## Servidor de Desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação recarregará automaticmanete caso execute alguma alteração em qualquer um dos arquivos de origem.

## Gerando Código

Execute `ng generate component component-name` para gerar um novo componente. Você tembém pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Informações de Contato

  Caso tenha alguma dúvida, sugestão ou crítica, entre em contato pelo [email](joaorafael.leite@hotmail.com) ou pelo [LinkedIn](https://www.linkedin.com/in/joao-rafael-leite/).
