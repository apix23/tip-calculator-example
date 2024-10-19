function tipCalculator(totalCost, tipPercentage, numberOfPeople) {
    
    const costPerPerson = totalCost / numberOfPeople
    const tipPerPerson = ( costPerPerson / 100 )* tipPercentage
    const totalCostPerPerson = costPerPerson + tipPerPerson

    return totalCostPerPerson
}



















const button = document.querySelector('#calculate-btn')
const resultContainer =  document.querySelector('#result-container')

function renderResultValue(totalCost, tipPercentage, numberOfPeople) {
    resultContainer.innerHTML = tipCalculator(totalCost, tipPercentage, numberOfPeople)
}

button.addEventListener('click', () => {
    const numberOfPeople =  Number(document.querySelector('#number-of-people').value)
    const totalCost =  Number(document.querySelector('#total-cost').value)
    const tipPercentage = Number(document.querySelector('#percentage-tip').value)

renderResultValue(totalCost, tipPercentage, numberOfPeople)
})