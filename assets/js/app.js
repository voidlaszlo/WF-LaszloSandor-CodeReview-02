class Insurance {
    constructor(name, age, country, hp) {
        this.created = new Date()
        this.name = name
        this.age = age
        this.country = country
        this.hp = hp
    }
}

class InsuranceContainer {
    constructor() {
        this.insurances = []
    }

    addInsurance(insurance){
        this.insurances.push(insurance)
    }
}

class InsuranceInputManager {
    constructor(){}

    getInsurance() {
        return new Insurance(
            
            document.getElementById('name').value,
            parseInt(document.getElementById('age').value),
            document.getElementById('country').value,
            parseInt(document.getElementById('hp').value)       

        )
    }

    clearInputs() {

        document.getElementById('name').value = ""
        document.getElementById('age').value = ""
        document.getElementById('hp').value = ""

    }
}

class InsuranceManager {
    constructor() {
        this.insuranceContainer = new InsuranceContainer()
        this.insuranceInputManager = new InsuranceInputManager()
        this.registerEventListeners()
    }

    registerEventListeners() {
        document.getElementById('calcBtn').addEventListener('click', (e) => {
            let insurance = this.insuranceInputManager.getInsurance()
            this.insuranceInputManager.clearInputs()
            this.insuranceContainer.addInsurance(insurance)
            this.calculateInsurance()         
            e.preventDefault()
        })
    }

    calculateInsurance() {
        let country = this.insuranceContainer.insurances[this.insuranceContainer.insurances.length-1].country
        let hp = this.insuranceContainer.insurances[this.insuranceContainer.insurances.length-1].hp
        let age = this.insuranceContainer.insurances[this.insuranceContainer.insurances.length-1].age
        let insurance
    
        // CHECKING THE COUNTRY INPUT VALUE WITH A SWITCH
        switch(country) {
    
            case "austria":
                insurance = hp*100/age + 50
                break
            
            case "hungary":
                insurance = hp*120/age + 100
                break
    
            case "greece":
                insurance = hp*150/(age+3) + 50
                break
    
        }

        this.render(insurance)

    }

    render(insurance) {
        let output = document.getElementById('priceOutput')
        output.style.opacity = "1"
        let name = this.insuranceContainer.insurances[this.insuranceContainer.insurances.length-1].name
        output.textContent = `${name}, you have to pay ${insurance.toFixed(2)} euros.`
    }
}

const insuranceManager = new InsuranceManager()