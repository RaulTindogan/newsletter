let form = document.getElementById('form')
let errorLabel = document.getElementById('error-container')
let emailInput = document.getElementById('email')
let container = document.getElementById('container')
let dismissBtn = document.getElementById('dismiss-button')
let modal = document.getElementById('modal')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    handleSubmit()
    console.log('hello')
})

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email);
}

function handleSubmit() {
    const emailInput = document.getElementById('email')
    const email = emailInput.value.trim()

    if (validateEmail(email)) {
        errorLabel.classList.remove('error-active')
        emailInput.classList.remove('input-error-state')
        emailInput.value = ''
        container.style.display = "none"
        modal.classList.add('modal-active')
    } else {
        errorLabel.classList.add('error-active')
        emailInput.classList.add('input-error-state')
        emailInput.value = email
    }
}

dismissBtn.addEventListener('click', ()=>{
    container.style.display = "flex"
    modal.classList.remove('modal-active')
})