const display = document.getElementById('display')
const buttons = [...document.getElementsByClassName('button')]
const operators = ['%', '/', '*', '-', '+', '=']
let calculation = ''

buttons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    let input = evt.target.innerHTML

    if ((input === '=') & (calculation !== '')) {
      let result = eval(calculation)
      calculation = Number.isInteger(result) ? result : result.toFixed(5)
      displayCalculation()
    } else if (input === '%') {
      input = '/100'
      updateCalculation(input)
    } else if (input === 'AC') {
      calculation = ''
      displayCalculation()
    } else if (input === 'DE') {
      calculation = calculation.toString().slice(0, -1)
      displayCalculation()
    } else if (input === '.') {
      input = calculation ? '.' : '0.'
      updateCalculation(input)
    } else if (calculation === '' && operators.includes(input)) {
      return
    } else {
      updateCalculation(input)
    }
  })
})

function updateCalculation(input) {
  calculation += input
  displayCalculation()
}

function displayCalculation() {
  display.innerText = calculation
}
