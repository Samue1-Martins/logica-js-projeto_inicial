alert('Bem-vndo ao jogo do número secreto!');

let secretNumber = 29;
console.log(secretNumber);

let userResponse;
let trys = 1;

while (userResponse != secretNumber) {

    userResponse = prompt('Escolha um número entre 1 e 30.')

    if (userResponse == secretNumber) {
        break;
    } else {
        if (userResponse > secretNumber) {
            alert(`O número secreto é menor que ${userResponse}`);
        } else {
            alert(`O número secreto é maior que ${userResponse}`);
        }
        // trys = trys + 1
        trys++;
    }
}

let wordTry = trys > 1 ? 'tentativas' : 'tentativa'
alert(`Você é o bixão mesmo em, o número secreto é ${secretNumber}, acertou com ${trys} ${wordTry}`);
