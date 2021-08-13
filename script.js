let container = document.createElement('div')
container.setAttribute('class', 'container')
container.setAttribute('onkeypress', 'myFunction(event)')
container.setAttribute('onkeydown', 'number(event)')

let row = document.createElement('div')
row.setAttribute('class', 'row')
let col1 = document.createElement('div')
col1.setAttribute('class', 'col-sm-12')
col1.classList.add('col-xs')
let heading = document.createElement('h4')
heading.innerHTML = 'Calculator'
col1.append(heading)
row.append(col1)
let column = document.createElement('div')
column.setAttribute('class', 'col-sm-6-offset-3')

let calculator = document.createElement('div')
calculator.setAttribute('class', 'calculator')

let inputarea = document.createElement('input')
inputarea.setAttribute('type', 'text')
inputarea.setAttribute('placeholder', 'Click C to start')
inputarea.setAttribute('id', 'inputarea')

let button1 = document.createElement('button')
button1.setAttribute('onclick', 'clr()')
button1.setAttribute('class', 'allclear')
button1.innerHTML = 'C'

let button2 = document.createElement('button')
button2.setAttribute('onclick', 'back()')
button2.setAttribute('class', 'back')
button2.innerHTML = '<'

let button3 = document.createElement('button')
button3.setAttribute('onclick', "operator('%')")
button3.setAttribute('class', 'operator')
button3.innerHTML = '%'

let button4 = document.createElement('button')
button4.setAttribute('onclick', 'operator("/")')
button4.setAttribute('class', 'operator')
button4.innerHTML = '/'

let button5 = document.createElement('button')
button5.setAttribute('onclick', 'insert("7")')
button5.innerHTML = '7'

let button6 = document.createElement('button')
button6.setAttribute('onclick', 'insert("8")')
button6.innerHTML = '8'

let button7 = document.createElement('button')
button7.setAttribute('onclick', 'insert("9")')
button7.innerHTML = '9'

let button8 = document.createElement('button')
button8.setAttribute('onclick', 'operator("*")')
button8.setAttribute('class', 'operator')
button8.innerHTML = 'x'

let button9 = document.createElement('button')
button9.setAttribute('onclick', 'insert("4")')
button9.innerHTML = '4'

let button10 = document.createElement('button')
button10.setAttribute('onclick', 'insert("5")')
button10.innerHTML = '5'

let button11 = document.createElement('button')
button11.setAttribute('onclick', 'insert("6")')
button11.innerHTML = '6'

let button12 = document.createElement('button')
button12.setAttribute('onclick', 'operator("-")')
button12.setAttribute('class', 'operator')
button12.innerHTML = '-'

let button13 = document.createElement('button')
button13.setAttribute('onclick', 'insert("1")')
button13.innerHTML = '1'

let button14 = document.createElement('button')
button14.setAttribute('onclick', 'insert("2")')
button14.innerHTML = '2'

let button15 = document.createElement('button')
button15.setAttribute('onclick', 'insert("3")')
button15.innerHTML = '3'

let button16 = document.createElement('button')
button16.setAttribute('onclick', 'operator("+")')
button16.setAttribute('class', 'operator')
button16.innerHTML = '+'

let button17 = document.createElement('button')
button17.setAttribute('onclick', 'insert("0")')
button17.innerHTML = '0'

let button18 = document.createElement('button')
button18.setAttribute('onclick', 'operator(".")')
button18.setAttribute('id', 'dot')
button18.innerHTML = '.'

let button19 = document.createElement('button')
button19.setAttribute('onclick', 'calculate()')
button19.setAttribute('id', 'equal')
button19.innerHTML = '='

calculator.append(
  inputarea,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19
)
column.append(calculator)
row.append(column)
container.append(row)
document.body.append(container)

function myFunction(event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.getElementById('equal').click()
  }

  var alpha = /^[A-Za-z]$/
  // var x = event.key
  if (event.key.match(alpha)) {
    alert('Only numbers are allowed.')
  }
}
// inputarea.value = 'Click C to start'
function number(event) {
  if (event.keyCode === 46) {
    event.preventDefault()
    inputarea.value = ' '
  }
  if (event.keyCode === 8) {
    event.preventDefault()
    inputarea.value = inputarea.value.slice(0, -1)
  }
  if (event.keyCode === 191 || event.keyCode === 111) {
    event.preventDefault()
    inputarea.value = inputarea.value + '/'
  }
  if (event.keyCode === 55 || event.keyCode === 103) {
    event.preventDefault()
    inputarea.value = inputarea.value + 7
  }
  if (event.keyCode === 56 || event.keyCode === 104) {
    event.preventDefault()
    inputarea.value = inputarea.value + 8
  }
  if (event.keyCode === 57 || event.keyCode === 105) {
    event.preventDefault()
    inputarea.value = inputarea.value + 9
  }
  if (event.keyCode === 106) {
    event.preventDefault()
    inputarea.value = inputarea.value + '*'
  }
  if (event.keyCode === 52 || event.keyCode === 100) {
    event.preventDefault()
    inputarea.value = inputarea.value + 4
  }
  if (event.keyCode === 53 || event.keyCode === 101) {
    event.preventDefault()
    inputarea.value = inputarea.value + 5
  }
  if (event.keyCode === 54 || event.keyCode === 102) {
    event.preventDefault()
    inputarea.value = inputarea.value + 6
  }
  if (event.keyCode === 189 || event.keyCode === 109) {
    event.preventDefault()
    inputarea.value = inputarea.value + '-'
  }
  if (event.keyCode === 49 || event.keyCode === 97) {
    event.preventDefault()
    inputarea.value = inputarea.value + 1
  }
  if (event.keyCode === 50 || event.keyCode === 98) {
    event.preventDefault()
    inputarea.value = inputarea.value + 2
  }
  if (event.keyCode === 51 || event.keyCode === 99) {
    event.preventDefault()
    inputarea.value = inputarea.value + 3
  }
  if (event.keyCode === 187 || event.keyCode === 107) {
    event.preventDefault()
    inputarea.value = inputarea.value + '+'
  }
  if (event.keyCode === 48 || event.keyCode === 96) {
    event.preventDefault()
    inputarea.value = inputarea.value + 0
  }
  if (event.keyCode === 190 || event.keyCode === 110) {
    event.preventDefault()
    document.getElementById('dot').click()
  }
  if ((event.keyCode === 16 + event.keyCode) === 53) {
    event.preventDefault()
    inputarea.value = inputarea.value + '%'
  }
}

function insert(num) {
  inputarea.value = inputarea.value + num
}
function operator(num) {
  inputarea.value = inputarea.value + num
}
function calculate() {
  try {
    inputarea.value = eval(inputarea.value)
  } catch (err) {
    alert('Invalid')
  }
}
function clr() {
  inputarea.value = ' '
}
function back() {
  inputarea.value = inputarea.value.slice(0, -1)
}
// document.getElementById('inputarea').onclick = function () {
//   var disabled = document.getElementById('inputarea').disabled
//   if (disabled) {
//     document.getElementById('inputarea').disabled = false
//   } else {
//     document.getElementById('inputarea').disabled = true
//   }
// }
