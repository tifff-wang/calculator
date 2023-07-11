let calculation = ''

function updateCalculation(num) {
  calculation += num
  displayCalculation(num)
}

function displayCalculation() {
  document.getElementById('calculation-display').innerHTML = calculation
}

document.getElementById('one').addEventListener('click', () => {
  updateCalculation('1')
})
document.getElementById('two').addEventListener('click', () => {
  updateCalculation('2')
})
document.getElementById('three').addEventListener('click', () => {
  updateCalculation('3')
})
document.getElementById('four').addEventListener('click', () => {
  updateCalculation('4')
})
document.getElementById('five').addEventListener('click', () => {
  updateCalculation('5')
})
document.getElementById('six').addEventListener('click', () => {
  updateCalculation('6')
})
document.getElementById('seven').addEventListener('click', () => {
  updateCalculation('7')
})
document.getElementById('eight').addEventListener('click', () => {
  updateCalculation('8')
})
document.getElementById('nine').addEventListener('click', () => {
  updateCalculation('9')
})
document.getElementById('zero').addEventListener('click', () => {
  updateCalculation('0')
})
document.getElementById('decimal').addEventListener('click', () => {
  updateCalculation('.')
})
document.getElementById('add').addEventListener('click', () => {
  updateCalculation('+')
})
document.getElementById('subtract').addEventListener('click', () => {
  updateCalculation('-')
})
document.getElementById('multiply').addEventListener('click', () => {
  updateCalculation('*')
})
document.getElementById('divide').addEventListener('click', () => {
  updateCalculation('/')
})
document.getElementById('equals').addEventListener('click', () => {
  calculation = eval(calculation)
  displayCalculation()
  calculation = ''
})
document.getElementById('clear').addEventListener('click', () => {
  calculation = ''
  displayCalculation('0')
})
