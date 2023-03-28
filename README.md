# DM10-Test

Boa tarde, primeiramente gostaria de agradecer a oportunidade de participar do teste.
Esse README é apenas para dar uma organizada nas ideias do exercício proposto.

Não usei nenhuma biblioteca externa, apenas o xampp para rodar um servidor php na minha máquina e já poder trabalhar com o banco de dados mysql.
Configurei o banco de dados de forma simples pelo próprio SGBD phpmyadmin, criando duas tabelas. A de proprietários e a de Veículos.

Ao acessar o site pelo localhost, por ser servidor de teste, nos deparamos com uma tela de login. Não é necessário preocupação nessa tela, visto que 
é apenas para mostrar que em um servidor real o administrador (gerente do estacionamento) teria que se logar no sistema. Para acessar basta digitar qualquer usuário
e qualquer senha.

Dentro do dashboard de gerenciamento, temos dois botões à esquerda para cadastro e visualização tanto dos proprietários dos veículos quando dos próprios veículos

Utilizei ajax para fazer a mudança do conteúdo na tela à direita, ao clicar em um botão à esquerda, o conteúdo atualiza para o que foi clicado, exemplo ao se cadastrar.

Os arquivos estão divididos de acordo com a sua função, nas pastas config tem arquivos php. Na pasta css, arquivos css. Na pasta js, arquivos Javascript e na raiz, 
o projeto principal.

Fiz o planejamento dos dados com draw.io e o layout base do projeto com figma online.

Não consegui terminar por completo, ficou faltando listar os dados na tela e poder editá-los e no caso dos veículos poder excluir. Mas acredito que se eu tivesse
conseguido um pouco mais de tempo teria conseguido finalizar.

## Imagens
Draw.io -> organização, planejamento dos dados e um pouco de Scrum
![image](https://user-images.githubusercontent.com/15936327/228360369-1012fc9e-7c34-4889-91da-ed00b860c196.png)

Tela de login
![image](https://user-images.githubusercontent.com/15936327/228360815-7de9587d-4bc6-49d8-a0ef-b64e5811087d.png)

Tela de controle
![image](https://user-images.githubusercontent.com/15936327/228361190-44531ea0-4620-4663-a1c3-b12c26d6e7c2.png)
