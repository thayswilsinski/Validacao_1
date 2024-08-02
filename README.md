# Validacao_1
# novo

Este projeto contém dois exemplos de formulários para validação de dados: um para e-mail e outro para CPF. Abaixo está a documentação detalhada de cada parte do código.

# Validação de E-mail
Estrutura do HTML
O formulário de validação de e-mail é simples e contém:
 Um campo de texto para o usuário inserir o e-mail.
 Um botão de validação.
 O formulário está configurado para chamar uma função de validação quando o campo de e-mail perde o foco. O resultado da validação é exibido na página em um parágrafo abaixo do formulário.

# Funcionalidade
A função de validação do e-mail verifica se o e-mail inserido contém os caracteres @ e .. Se algum desses caracteres estiver faltando, um alerta solicita que o usuário insira um e-mail válido. Caso contrário, um alerta de sucesso é exibido e o e-mail é mostrado na página.

# Validação de CPF
 Estrutura do HTML
 O formulário de validação de CPF inclui:

Um campo de texto com limite de 14 caracteres para a inserção do CPF.
Um botão de validação.
O formulário usa um evento de submit para chamar uma função que realiza a validação do CPF. O resultado é exibido em um parágrafo abaixo do formulário, com a mensagem mostrando se o CPF é válido ou não.

# Funcionalidade
A validação do CPF remove todos os caracteres não numéricos e realiza cálculos baseados em um algoritmo específico para verificar se o CPF é válido. Se o CPF for considerado válido, uma mensagem verde é exibida; caso contrário, uma mensagem vermelha é exibida.

# Observações Gerais

Validação de E-mail: O código atual verifica apenas a presença dos caracteres @ e .. Recomenda-se a implementação de uma validação mais avançada usando expressões regulares para maior precisão.
Validação de CPF: O algoritmo de validação assegura que o CPF siga as regras estabelecidas para a criação de números válidos no Brasil.