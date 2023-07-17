const display = document.getElementById('display')
const buttons = [...document.getElementsByClassName('button')]
// const specials = ['%', '/', '*', '-', '+', '=']
const operators = ['/', '*', '-', '+']
let calculation = ''
let result = ''
let displayingText = ''
// let isEquals = false

buttons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    let input = evt.target.innerHTML

    if (input === '=') {
      clickCalculate()
    } else if (input === 'AC') {
      reset()
    } else if (input === 'DE') {
      clickDelete()
    } else if (input === '.') {
      clickDot()
    } else if (operators.includes(input) || input === '%') {
      clickOperator(input)
    } else {
      clickNumber(input)
    }
  })
})

function isLastInputOperator() {
  let lastInput = calculation.slice(-1)
  return operators.includes(lastInput)
}

function removeLastOperatorIfNeeded() {
  if (isLastInputOperator()) {
    removeLastInput()
  }
}

function isLastInputDot() {
  return calculation.slice(-1) === '.'
}

function removeLastDotIfNeeded() {
  if (isLastInputDot()) {
    removeLastInput()
  }
}

function isLastInputPercentage() {
  return calculation.slice(-1) === '%'
}

function removeLastInput() {
  calculation = calculation.slice(0, -1)
  displayingText = displayingText.slice(0, -1)
}

function clickNumber(input) {
  // start new calculation when tap on a number with a result
  if (result) {
    reset()
  }

  // clear display for new number after operator
  if (isLastInputOperator()) {
    displayingText = ''
  }

  // not allow % followed by number
  if (isLastInputPercentage()) {
    return
  }

  // remove leading 0 if not 0.xx
  if (input == 0) {
    // 0 or 00
    if (displayingText === '') {
      input = '0'
    } else if (displayingText === '0') {
      return
    }
  } else if (displayingText === '0') {
    removeLastInput()
  }

  updateCalculation(input)
}

function clickCalculate() {
  if (calculation === '') {
    return
  }
  removeLastDotIfNeeded()
  removeLastOperatorIfNeeded()
  let resultNumber = eval(calculation.replaceAll('%', '/100'))
  displayingText = parseFloat(resultNumber.toFixed(5)).toString()
  calculation = ''
  result = resultNumber.toString()
  displayCalculation()
}

function clickDelete() {
  displayingText = displayingText.toString().slice(0, -1)
  calculation = calculation.slice(0, -1)
  displayCalculation()
}

function clickDot() {
  // if the last input was an operater, clear the display and then show new number: `0.`
  if (isLastInputOperator()) {
    displayingText = ''
  }

  // not allow % followed by `.`
  if (isLastInputPercentage()) {
    return
  }

  if (displayingText.indexOf('.') > 0) {
    return
  }

  //start new calculation when tap on `.` with a result
  if (result) {
    reset()
  }
  let input = displayingText ? '.' : '0.'
  updateCalculation(input)
}

function clickOperator(input) {
  // restore result to continue calculating
  if (result) {
    calculation = result
    result = ''
  }

  if (calculation === '') {
    return
  }

  //if the last input was also an operator or a ".", take the current input.
  removeLastDotIfNeeded()
  removeLastOperatorIfNeeded()

  updateCalculation(input)
}

function reset() {
  displayingText = ''
  result = ''
  calculation = ''
  displayCalculation()
}

function updateCalculation(input) {
  displayingText += input
  calculation += input
  displayCalculation()
}

function displayCalculation() {
  display.innerText = displayingText || '0'
}
