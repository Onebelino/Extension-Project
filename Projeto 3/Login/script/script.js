console.log('Meu Nome = João Vitor Toledo Umbelino')
console.log('Meu R.A = 00254142')

const passwordInput = document.getElementById("senha")

const mostrar = document.getElementById("mostrar")

function olhoClick() {

    let inputTypeIsPassword = passwordInput.type == "password"

    if (inputTypeIsPassword) {
        
        showPassword()

    } else {

        hidePassword()
    }
}

function showPassword() {

    passwordInput.setAttribute("type", "text")
    mostrar.setAttribute("src", "/img/eye-slash-solid.svg")

}
 
function hidePassword() {

    passwordInput.setAttribute("type", "password")
    mostrar.setAttribute("src", "/img/eye-solid.svg")

}