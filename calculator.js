let calculation = localStorage.getItem('calculation') || ''

//display the calculation when the page first loads.
displayCalculation()

function updateCalculation(value) {
  calculation += value
  displayCalculation()
}

localStorage.setItem('calculation', calculation)

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation
}
console.log(displayCalculation())
