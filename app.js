var buttonTranslate = document.querySelector('#btn')
var text = document.querySelector('#txt')
function clickEventHandler(){
    console.log('clicked')
    console.log('input', text.value)
}

buttonTranslate.addEventListener("click", clickEventHandler) 