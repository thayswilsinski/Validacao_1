//Adiciona escutador ao formulário 'addEventListener'
 
document.getElementById('cpfForm').addEventListener('submit', function(event){
event.preventDefault();
 
const cpf = document.getElementById("cpf").value;
const msg = document.getElementById("message");
 
if(validarCPF(cpf)){
    msg.textContent = "O CPF é válido";
    msg.style.color = 'green';
 
}else{
    msg.textContent = "O CPF não é válido";
    msg.style.color = 'red';
 
}
});
 
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, '');
     //remove caracteres não numéricos
 
     //verifica se o número é diferente de 11 e se os números são iguais
     if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
     return false;
    }

     let soma = 0;
     let resto;
// Validação do 10° dígito - 1° DV
for(let i = 1;i <= 9; i++){
    soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
    if(resto !==  parseInt(cpf.substring(9, 10))){
      return false;  
    }

    // Validação do 11° dígito - 2° DV
    soma = 0;
    for(let i = 1; 1 <=10; i++){
      soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if((resto === 10) || (resto === 11)){
        resto = 0;
    }

    if(resto !== parseInt(cpf.substring(10, 11))){
        return false;
    }

    return true;
}