Projeto API RestFul utilizando Sequelize

--
Criado tabela de usuários, contendo:
    - Nome
    - email

Criado tabela de Enderço, contendo: 
    - Zipcode
    - Street
    - Number

Criado tabela de Tecnologias, contendo:
    - Nome

Relacionamento entre usuários e endereço, um usuário tem um endereço, e um endereço pode ter vários usuários;
    - Relacionamento 1 => N

Relacionamento entre usuários e tecnologias, um usuário pode ter várias tecnologias e uma tecnologia pode ter vários usuários.
    -Relacionamento N => N ( criado tabela pivot user_techs)