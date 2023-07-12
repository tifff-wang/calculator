const display = document.getElementById('display')
const buttons = [...document.getElementsByClassName('button')]
const specials = ['%', '/', '*', '-', '+', '=']
const operators = ['/', '*', '-', '+']
let calculation = ''
let output = ''
let decimalDotCount = 0
let isEquals = false

buttons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    let input = evt.target.innerHTML

    if ((input === '=') & (calculation !== '')) {
      let result = eval(calculation)
      output = Number.isInteger(result) ? result : parseFloat(result).toFixed(5)
      displayCalculation()
      isEquals = true
    } else if (input === '%') {
      input = '/100'
      updateCalculation(input)
    } else if (input === 'AC') {
      output = ''
      calculation = ''
      displayCalculation()
    } else if (input === 'DE') {
      output = output.toString().slice(0, -1)
      calculation = calculation.slice(0, -1)
      displayCalculation()
    } else if (input === '.') {
      input = output ? '.' : '0.'
      decimalDotCount++
      if (decimalDotCount > 1) {
        return
      }
      updateCalculation(input)
    } else if (calculation === '' && specials.includes(input)) {
      return
    } else if (operators.includes(input)) {
      isEquals = false
      let lastInput = calculation.slice(-1)
      if (operators.includes(lastInput)) {
        calculation.slice(0, -1)
      }
      calculation += input
      output = ''
      display.innerText = input
    } else if (isEquals) {
      output = ''
      calculation = ''
      updateCalculation(input)
      isEquals = false
    } else {
      updateCalculation(input)
    }
  })
})

function updateCalculation(input) {
  output += input
  calculation += input
  displayCalculation()
}

function displayCalculation() {
  display.innerText = output
}
