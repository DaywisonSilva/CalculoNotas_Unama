document.getElementsByClassName('button')[0].addEventListener('click', () => {
    document.getElementsByClassName('background-modal')[0].classList.remove('hidden');
    document.getElementsByClassName('modal')[0].classList.remove('hidden');
})


document.getElementById('conditions').addEventListener('click', () => {
    document.getElementsByClassName('modal-conditions')[0].classList.remove('hidden');
})


document.getElementById('card-calcular').addEventListener('click', () => {
    document.getElementsByClassName('modal-buttons')[0].classList.remove('hidden');
})

document.getElementById('enviar').addEventListener('click', () => {
    function calcMedia() {
        let nota1 = document.getElementById('one');
        let nota2 = document.getElementById('two');
        nota1 = Number(nota1.value);
        nota2 = Number(nota2.value);
        if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
            let media = (nota1 + nota2) / 2;
            console.log(nota1)
            document.getElementsByClassName('resultado')[0].classList.remove('hidden');
            return media;
        } else {
            alert('Digite valores válidos!')
            close();
        }
    }
    function informationCard() {
        let media = calcMedia();
        let title = document.getElementById('title');
        let img = document.getElementById('imagem');
        let text = document.getElementById('text');
        if (media < 4) {
            title.innerText = 'Que pena, você reprovou! Organize seus estudos para obter a aprovação.';
            img.src='imagens/sad_face.svg'
        }else if(media >= 4 && media < 7){
            title.innerText = `Você está na prova final, e precisa de ${10 - media} pontos para ser aprovado(a)!`;
            img.src='imagens/atencao.svg'
        }else{
            title.innerText = 'Parabéns!! Você está aprovado.'
            img.src = 'imagens/happy_face.svg'
        }
    }
    informationCard();
})

document.getElementsByClassName('close')[0].addEventListener('click', close);

function close(){
    document.getElementsByClassName('background-modal')[0].classList.add('hidden');
    document.getElementsByClassName('modal')[0].classList.add('hidden');
    document.getElementsByClassName('modal-conditions')[0].classList.add('hidden');
    document.getElementsByClassName('modal-buttons')[0].classList.add('hidden');
    document.getElementsByClassName('resultado')[0].classList.add('hidden');
}


