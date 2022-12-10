import './style.css'

const rate1 = document.querySelector('#one')

rate1.addEventListener('click', () => {
  console.log(rate1.textContent)
  rate1.classList.toggle('active')
})

const rate2 = document.querySelector('#two')

rate2.addEventListener('click', () => {
  console.log(rate2.textContent)
  rate2.classList.toggle('active')
})

const rate3 = document.querySelector('#three')

rate3.addEventListener('click', () => {
  console.log(rate3.textContent)
  rate3.classList.toggle('active')
})

const rate4 = document.querySelector('#four')

rate4.addEventListener('click', () => {
  console.log(rate4.textContent)
  rate4.classList.toggle('active')
})

const rate5 = document.querySelector('#five')

rate5.addEventListener('click', () => {
  console.log(rate5.textContent)
  rate5.classList.toggle('active')
})
