const valorNumero = document.querySelector('#numero')
const numero = Math.round(Math.random() * (10 - 0) + 0)
const tela1 = document.querySelector(".tela1")
const tela2 =  document.querySelector(".tela2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let x = 1


function handleClick(event){
    event.preventDefault()
    let dado = valorNumero.value

    if(Number(dado) == numero ){
        tela1.classList.add("hide")
        tela2.classList.remove("hide")
        document.querySelector(".tela2 h1").innerText = `Acertou em ${x} Tentativas`
    }
    valorNumero.value = ""
    x++
}

//Evento

btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', () => {
    tela1.classList.remove("hide")
    tela2.classList.add("hide")
    x = 1
})