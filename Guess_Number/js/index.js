const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

//Gera um número aleatório entre 0 e 10
const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randonValue()
    {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

//Atualiza o texto do elemento com id attempt
function updateAttempt(attempt, value)
{
    attempt.innerHTML = 'Tentativa: ' + value;
}

function handleSubmit(e)
{
    //Evita que a página seja recarregada.
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite um valor.');
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick)
    {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    }
    else if(numberDrawn > kick)
    {
        status.innerHTML = 'O número é maior.';
        status.style.color = '#de4251';
        clear();
    }
    else if(numberDrawn < kick)
    {
        status.innerHTML = 'O número é menor.';
        status.style.color = '#de4251';
        clear();
    }
}

//Faz o botão de restart ser mostrado na tela
function playAgain()
{
    document.getElementById('btnRestart').style.display = 'flex';
}
//Recarrega a página
function restart()
{
    document.location.reload(true);
}
//Limpa o campo de texto
function clear()
{
    document.getElementById('kick').value = '';
}