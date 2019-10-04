// SELECTORS
const calcBtn = document.getElementById('calcBtn')
let priceOutput = document.getElementById('priceOutput')

calcBtn.addEventListener('click', (e) => {
    calculateInsurance()
    e.preventDefault()
})

function calculateInsurance() {
    let age = document.getElementById('age').value
    let hp = document.getElementById('hp').value
    let country = document.getElementById('country').value

    let insurance

    switch(country) {

        case "austria":
            insurance = (hp*100/age + 50)
            priceOutput.textContent = `You have to pay ${insurance.toFixed(2)} euros.`
            break
        
        case "hungary":
            insurance = (hp*120/age + 100)
            priceOutput.textContent = `You have to pay ${insurance.toFixed(2)} euros.`
            break

        case "greece":
            insurance = (hp*150/(age+3) + 50)
            priceOutput.textContent = `You have to pay ${insurance.toFixed(2)} euros.`
            break

    }}