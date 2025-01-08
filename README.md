# Agenda de Contatos Web

Este é um aplicativo web simples para gerenciar uma agenda de contatos, desenvolvido usando HTML, CSS, JavaScript, PHP e MySQL.

O mesmo foi criado para treinar e entender o conceito de Dockerfile e docker-compose.

## Funcionalidades

*   **Adicionar Contatos:** Permite adicionar novos contatos à agenda com nome, sobrenome, telefones, e-mails, endereços e data de aniversário.
*   **Listar Contatos:** Exibe uma lista de todos os contatos armazenados.
*   **Editar Contatos:** Permite editar as informações de um contato existente.
*   **Excluir Contatos:** Permite remover um contato da agenda.
*   **Teste de Conexão:** Permite verificar a conexão com o banco de dados.

## Estrutura do Projeto

agenda-contatos/
├── docker-compose.yml # Configuração do Docker Compose
├── Dockerfile # Configuração do Docker
├── init.sql # Configuração da criação do banco
├── index.html # Interface principal do aplicativo
├── css/ # Arquivos CSS
│ └── style.css # Estilos da aplicação
├── js/ # Arquivos JavaScript
│ └── script.js # Lógica da aplicação
├── php/ # Arquivos PHP
│ ├── config.php # Configurações do banco de dados
│ ├── conexao.php # Conexão com o banco de dados
│ ├── adicionar.php # Adiciona um contato
│ ├── listar.php # Lista os contatos
│ ├── editar.php # Edita um contato
│ ├── excluir.php # Exclui um contato
│ └── testar_conexao.php# Testa a conexão com o banco de dados
└── sql/ # Arquivos SQL
└── agenda.sql # Script para criação do banco de dados e tabelas

## Tecnologias Utilizadas

*   **HTML:** Estrutura da página.
*   **CSS:** Estilos da página.
*   **JavaScript:** Lógica da interface e requisições assíncronas.
*   **PHP:** Lógica do servidor e interação com o banco de dados.
*   **MySQL:** Banco de dados para persistência das informações.
*  **Docker:** Para o desenvolvimento e execução em container.
*  **Docker Compose:** Para o gerenciamento de multi-containers.

## Pré-requisitos

*   [Docker](https://www.docker.com/) instalado em sua máquina.
*   Conhecimento básico de HTML, CSS, JavaScript e PHP.
*  Conhecimento básico de Docker e Docker Compose.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd agenda-contatos
    ```
2.  **Construa e execute os containers com Docker Compose:**
    ```bash
    docker-compose up --build -d
    ```
3.  **Acesse a aplicação no seu navegador:**
    ```
    http://localhost:80
    ```
   *   Você poderá testar a conexão com o banco de dados dentro da sua aplicação.
4. **Para parar a aplicação, execute o seguinte comando:**
   ```bash
      docker-compose down