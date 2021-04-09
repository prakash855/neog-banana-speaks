var buttonTranslate = document.querySelector('#btn')
var text = document.querySelector('#txt')
var output = document.querySelector('#output')

function clickEventHandler(){
    output.innerText = `now this can be outputted here too => ${text.value}`
}

buttonTranslate.addEventListener("click", clickEventHandler) 
