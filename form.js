
const firstName = document.getElementById("first-name-input")
const passwordConfirm = document.getElementById("password-confirmation-input")
const passwordFirst = document.getElementById("password-input")
const passwordMismatchMessage = document.getElementById("password-mismatch-message")




passwordFirst.addEventListener("input", () => {
    let passwordFirstValue = document.getElementById("password-input").value
    let passwordConfirmValue = document.getElementById("password-confirmation-input").value

    if (passwordFirstValue !== passwordConfirmValue) {
        passwordMismatchMessage.textContent = "* Passwords do not match"
    } else {
        passwordMismatchMessage.textContent = ""
    }

})

passwordConfirm.addEventListener("input", () => {
    let passwordFirstValue = document.getElementById("password-input").value
    let passwordConfirmValue = document.getElementById("password-confirmation-input").value

    if (passwordFirstValue !== passwordConfirmValue) {
        passwordMismatchMessage.textContent = "* Passwords do not match"
    } else {
        passwordMismatchMessage.textContent = ""
    }
})

firstName.addEventListener("input", (event) => {
    console.log(firstNameValue.value)
})