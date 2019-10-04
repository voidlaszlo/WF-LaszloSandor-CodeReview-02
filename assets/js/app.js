// SELECTORS
const calcBtn = document.getElementById('calcBtn')
let priceOutput = document.getElementById('priceOutput')

// LISTENERS
calcBtn.addEventListener('click', (e) => {
    calculateInsurance()
    e.preventDefault()
})

// FUNCTIONS
function calculateInsurance() {
    // SELECTING INPUT VALUES
    let age = document.getElementById('age').value
    let hp = document.getElementById('hp').value
    let country = document.getElementById('country').value
    let name = document.getElementById('name').value

    let insurance

    // CHECKING THE COUNTRY INPUT VALUE WITH A SWITCH
    switch(country) {

        case "austria":
            insurance = (hp*100/age + 50)
            priceOutput.textContent = `${name}, you have to pay ${insurance.toFixed(2)} euros.`
            break
        
        case "hungary":
            insurance = (hp*120/age + 100)
            priceOutput.textContent = `${name}, you have to pay ${insurance.toFixed(2)} euros.`
            break

        case "greece":
            insurance = (hp*150/(age+3) + 50)
            priceOutput.textContent = `${name}, you have to pay ${insurance.toFixed(2)} euros.`
            break

    }
}