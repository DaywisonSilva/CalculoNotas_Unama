document.getElementsByClassName('button')[0].addEventListener('click', () => {
    setTimeout(
        function () {
            document.getElementsByClassName('background-modal')[0].classList.remove('hidden');
            document.getElementsByClassName('modal')[0].classList.remove('hidden');
            document.getElementById('section-one').classList.add('blur');
        }, 300
    )
})


document.getElementById('conditions').addEventListener('click', () => {
    setTimeout(
        function () {
            document.getElementsByClassName('modal-conditions')[0].classList.remove('hidden');
        }, 300
    )
})


document.getElementById('card-calcular').addEventListener('click', () => {
    setTimeout(
        function () {
            document.getElementsByClassName('modal-buttons')[0].classList.remove('hidden');
        }, 300
    )
})

document.getElementById('ead').addEventListener('click', () => {
    setTimeout(
        function () {
            document.getElementsByClassName('card-ead')[0].classList.remove('hidden');
        }, 300
    )
})


/* MODALIDADE PRESENCIAL */
document.getElementById('enviar').addEventListener('click', () => {
    function calcMedia() {
        let nota1 = document.getElementById('one');
        let nota2 = document.getElementById('two');
        nota1Number = Number(nota1.value);
        nota2Number = Number(nota2.value);
        if (nota1.value == '' && nota2.value == '') {
            alert('Preencha no mínimo um dos campos')
        } else if (nota1Number >= 0 && nota1Number <= 10 && nota2Number >= 0 && nota2Number <= 10) {

            let media = (nota1Number + nota2Number) / 2;
            document.getElementsByClassName('resultado')[0].classList.remove('hidden');
            nota1.innerText = '';
            nota2.innerText = '';
            console.log(media);
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
            img.src = 'imagens/sad_face.svg'
        } else if (media >= 4 && media < 7) {
            title.innerText = `Você está na prova final, e precisa de ${(10 - media).toFixed(2)} pontos para ser aprovado(a)!`;
            img.src = 'imagens/atencao.svg'
        } else {
            title.innerText = 'Parabéns!! Você está aprovado.'
            img.src = 'imagens/happy_face.svg'
        }
    }
    informationCard();
})

/* MODALIDADE EAD */
document.getElementById('enviar-ead').addEventListener('click', () => {
    function calcMedia() {
        let nota1 = document.getElementById('av1');
        let nota2 = document.getElementById('av2');
        nota1Number = Number(nota1.value);
        nota2Number = Number(nota2.value);
        if (nota1.value == '' && nota2.value == '') {
            alert('Preencha no mínimo um dos campos');
        } else if (nota1Number >= 0 && nota1Number <= 10 && nota2Number >= 0 && nota2Number <= 10) {
            let mediaFinal = nota1Number * 0.4 + nota2Number * 0.6;
            document.getElementsByClassName('resultado')[0].classList.remove('hidden');
            nota1.innerText = '';
            nota2.innerText = '';
            console.log(mediaFinal);
            return mediaFinal;
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
            img.src = 'imagens/sad_face.svg'
        } else if (media >= 4 && media < 7) {
            title.innerText = `Você está na prova final, e precisa de ${(10 - media).toFixed(2)} pontos para ser aprovado(a)!`;
            img.src = 'imagens/atencao.svg'
        } else {
            title.innerText = 'Parabéns!! Você está aprovado.'
            img.src = 'imagens/happy_face.svg'
        }
    }
    informationCard();
})

/* ***************************** */

document.getElementsByClassName('close')[0].addEventListener('click', close);

function close() {
    document.getElementsByClassName('background-modal')[0].classList.add('hidden');
    document.getElementsByClassName('modal')[0].classList.add('hidden');
    document.getElementsByClassName('modal-conditions')[0].classList.add('hidden');
    document.getElementsByClassName('modal-buttons')[0].classList.add('hidden');
    document.getElementsByClassName('resultado')[0].classList.add('hidden');
    document.getElementsByClassName('card-ead')[0].classList.add('hidden');
    document.getElementById('section-one').classList.remove('blur');

    let input1 = document.getElementById('one');
    let input2 = document.getElementById('two');
    let input1ead = document.getElementById('av1');
    let input2ead = document.getElementById('av2');
    input1.value = '';
    input2.value = '';
    input1ead.value = '';
    input2ead.value = '';
}


