// SELECTORS
const calcBtn = document.getElementById('calcBtn')
let priceOutput = document.getElementById('priceOutput')

calcBtn.addEventListener('click', (e) => {
    calculateInsurance()

    e.preventDefault()
})

function getListeners() {
    let age = document.getElementById('age').value
    let hp = document.getElementById('hp').value
    let country = document.getElementById('country').value

    let insurance

    switch(country) {

        case "Austria":
            insurance = (hp*100/age + 50)
            console.log(insurance)
            break

    }

    console.log(age, hp, country)
}