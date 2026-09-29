<<<<<<< HEAD
# Projeto Angular — Fundamentos e Funcionalidades

## Objetivo

Este projeto tem como objetivo demonstrar, de forma prática, a estrutura e as principais funcionalidades do framework **Angular**, utilizando uma aplicação web desenvolvida com Angular CLI.

A aplicação apresenta conceitos fundamentais do framework, como:

* Componentes;
* Data Binding;
* Roteamento;
* Formulários;
* Validação de dados;
* Captura de informações inseridas pelo usuário;
* Organização de um projeto Angular.

O projeto possui duas páginas principais: uma página inicial com conteúdo explicativo sobre Angular e uma página de formulário para demonstrar funcionalidades práticas do framework.

---

## Integrantes

* Matheus Czubka
* Eric Fabiano
* Luiz Gustavo
* Carlos Eduardo
* Luiz Carlos
* Ana Julia Jannuzzi
* Nicolas Marcelino

---

## Tecnologia e Versão

| Tecnologia  | Versão                           |
| ----------- | -------------------------------- |
| Angular     | 22.1.8                           |
| Angular CLI | 22.1.8                           |
| Node.js     | LTS                              |
| NPM         | Versão incluída no Node.js       |
| TypeScript  | Versão compatível com Angular 22 |
| HTML5       | —                                |
| CSS3        | —                                |

---

## Pré-requisitos

Para executar o projeto, é necessário possuir os seguintes softwares instalados:

### Node.js

É necessário ter o **Node.js** instalado no computador. Recomenda-se utilizar uma versão **LTS**, garantindo maior estabilidade e compatibilidade.

### NPM

O **NPM (Node Package Manager)** é utilizado para instalar as dependências do projeto e normalmente é instalado junto com o Node.js.

É possível verificar a instalação utilizando:

```bash
node --version
```

```bash
npm --version
```

### Angular CLI

O Angular CLI é a ferramenta utilizada para criar, configurar, desenvolver e executar aplicações Angular.

Para instalar:

```bash
npm install -g @angular/cli
```

Para verificar a versão:

```bash
ng version
```

### Editor de código

Recomenda-se utilizar o **Visual Studio Code** ou outro editor de código compatível com projetos web.

---

## Instalação

Primeiramente, clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

Instale as dependências:

```bash
npm install
```

Após a instalação, o projeto estará pronto para ser executado localmente.

---

## Execução

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Depois, abra o navegador e acesse:

```text
http://localhost:4200/
```

A aplicação será recarregada automaticamente sempre que alterações forem realizadas nos arquivos do projeto.

Para interromper o servidor, utilize:

```text
Ctrl + C
```

---

## Estrutura do Projeto

A estrutura principal do projeto segue a organização padrão de uma aplicação Angular:

```text
Projeto_Angular/
│
├── .angular/
├── .vscode/
├── dist/
├── node_modules/
├── public/
│
├── src/
│   ├── app/
│   │   ├── form/
│   │   ├── home/
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── .editorconfig
├── .gitignore
├── .prettierrc
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── vercel.json
```

### Principais arquivos

**`app.ts`**

Contém a lógica principal do componente da aplicação.

**`app.html`**

Contém a estrutura HTML utilizada na interface.

**`app.css`**

Contém os estilos específicos do componente.

**`app.routes.ts`**

Define as rotas utilizadas pela aplicação.

**`main.ts`**

É responsável pela inicialização da aplicação Angular.

**`package.json`**

Contém informações do projeto, scripts e dependências utilizadas.

**`angular.json`**

Contém configurações do projeto utilizadas pelo Angular CLI.

**`vercel.json`**
Arquivo de configuração de implantação para a plataforma Vercel.

---

## Funcionalidades

### Página Inicial

A página inicial está disponível através da rota:

```text
/
```

Nela são apresentados conceitos fundamentais do Angular, incluindo:

* O que é o Angular;
* Funcionamento de componentes;
* Data Binding;
* Roteamento;
* Organização da aplicação;
* Recursos utilizados no desenvolvimento.

### Página de Formulário

A página de formulário está disponível através da rota:

```text
/form
```

Essa página demonstra funcionalidades práticas do Angular, como:

* Entrada de dados;
* Data Binding;
* Captura de informações;
* Validação de campos;
* Manipulação de formulários;
* Exibição das informações fornecidas pelo usuário.

---

## Geração de Código — Angular CLI

O Angular CLI permite gerar automaticamente diversos elementos da aplicação.

Para criar um novo componente:

```bash
ng generate component nome-do-componente
```

Também é possível utilizar a forma abreviada:

```bash
ng g c nome-do-componente
```

Para visualizar os comandos disponíveis:

```bash
ng generate --help
```

---

## Compilação para Produção

Para gerar uma versão de produção da aplicação:

```bash
ng build
```

Os arquivos compilados serão armazenados no diretório:

```text
dist/
```

A compilação de produção realiza otimizações para reduzir o tamanho dos arquivos e melhorar o desempenho da aplicação.

---

# Vulnerabilidade Pesquisada

## Cross-Site Scripting (XSS)

A vulnerabilidade pesquisada durante o desenvolvimento do projeto foi o **Cross-Site Scripting (XSS)**.

XSS é uma vulnerabilidade de aplicações web que pode ocorrer quando dados fornecidos por usuários são tratados de forma insegura e posteriormente interpretados como código pelo navegador.

Um atacante pode tentar inserir conteúdo malicioso em campos de entrada, páginas ou outros pontos que aceitem dados externos.

### Exemplo conceitual

Um campo que recebe conteúdo de um usuário não deve simplesmente inserir esse conteúdo diretamente como HTML sem realizar o tratamento adequado.

Por exemplo:

```html
<div [innerHTML]="conteudoUsuario"></div>
```

Dependendo da origem e do tratamento do conteúdo, uma implementação inadequada pode permitir a inserção de elementos HTML ou scripts maliciosos.

### Prevenção

O Angular possui mecanismos de segurança para ajudar a proteger aplicações contra determinadas formas de XSS, incluindo o tratamento e sanitização de valores utilizados em determinados contextos do template.

Além disso, boas práticas incluem:

* Validar entradas do usuário;
* Evitar inserir HTML arbitrário;
* Não utilizar `innerHTML` desnecessariamente;
* Sanitizar conteúdos quando necessário;
* Manter o Angular e suas dependências atualizados;
* Nunca confiar diretamente em dados fornecidos pelo usuário.

A vulnerabilidade foi estudada como parte da preocupação com segurança no desenvolvimento de aplicações web.

---

# Evidências / Imagens

## Página Inicial

<img width="1913" height="949" alt="Pagina_Inicio" src="https://github.com/user-attachments/assets/f20a8a70-887e-4ec5-81af-f5a2f7a8386d" />

A imagem acima apresenta a página inicial da aplicação e os conteúdos relacionados aos fundamentos do Angular.

## Página de Formulário


<img width="1912" height="818" alt="pagina_formulario" src="https://github.com/user-attachments/assets/f3ccf158-60f4-46e7-a8a9-b9eb8d49ab9f" />


<img width="1918" height="983" alt="Formulario" src="https://github.com/user-attachments/assets/094cc1fc-a392-4300-bcbe-6ddca1cb9745" />


A imagem apresenta o formulário utilizado para demonstrar entrada, captura e validação de dados.

## Aplicação em execução


<img width="1918" height="964" alt="imagen4" src="https://github.com/user-attachments/assets/36f6f5c2-2305-4d64-85de-cdd944b90264" />

A evidência apresenta a aplicação sendo executada no navegador através do servidor de desenvolvimento do Angular.

---

# Vercel

A aplicação também está disponível através do Vercel:

**Link:** https://projeto-angular-murex.vercel.app/

O Vercel permite disponibilizar a aplicação web publicamente para acesso através do navegador.

---

# Referências

* Angular Documentation — documentação oficial do Angular.
* Angular CLI Documentation — documentação oficial das ferramentas de linha de comando.
* Node.js Documentation — documentação oficial do Node.js.
* OWASP — documentação sobre segurança de aplicações web e vulnerabilidades XSS.
* GitHub Documentation — documentação sobre GitHub Pages.

---

## Comandos Principais

| Comando                 | Função                               |
| ----------------------- | ------------------------------------ |
| `npm install`           | Instala as dependências do projeto   |
| `ng serve`              | Inicia o servidor de desenvolvimento |
| `ng build`              | Compila o projeto                    |
| `ng generate component` | Cria um novo componente              |
| `ng generate --help`    | Exibe os comandos disponíveis        |
| `ng version`            | Exibe as versões do Angular          |
| `node --version`        | Exibe a versão do Node.js            |
| `npm --version`         | Exibe a versão do NPM                |

---

## Licença

Projeto desenvolvido para fins acadêmicos e educacionais.
=======
## Projeto Angular

Este projeto foi gerado utilizando o Angular CLI na versão 22.1.8.

## Sobre o Projeto

Este projeto tem como objetivo demonstrar a estrutura e as funcionalidades fundamentais do Angular através de duas páginas principais:

Página Inicial (/): Apresenta uma explicação prática sobre o funcionamento do Angular, cobrindo conceitos como componentes, binding de dados e roteamento.

Página de Formulário (/form): Demonstra funcionalidades do Angular na prática, como manipulação de formulários, validações e captura de dados do usuário.

## Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

````ng serve````


Assim que o servidor estiver rodando, abra o seu navegador e acesse http://localhost:4200/. A aplicação será recarregada automaticamente sempre que você alterar qualquer arquivo fonte.

## Geração de Código (Scaffolding)

O Angular CLI possui ferramentas poderosas para geração de código. Para criar um novo componente, execute:

````ng generate component nome-do-componente````


Para ver a lista completa de comandos disponíveis (como components, directives ou pipes), execute:

````ng generate --help````


## Compilação (Build)

Para compilar o projeto para produção, execute:

````ng build````


Isso irá compilar os arquivos e armazená-los no diretório dist/. Por padrão, a compilação de produção otimiza a aplicação para melhor desempenho e velocidade.


## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI e referência detalhada dos comandos, acesse a documentação oficial do Angular CLI.
>>>>>>> master
