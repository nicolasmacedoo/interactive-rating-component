import './style.css'

const rating = document.querySelectorAll('.rate')
const btnSubmit = document.querySelector('#btn-submit')
const card = document.querySelector('.card')
const thankYou = document.querySelector('.thank-you')
const rated = document.querySelector('.rated')
let rate = ''

rating.forEach(num => {
  num.addEventListener('click', () => {
    rating.forEach(selected => selected.classList.remove('active'))
    num.classList.toggle('active')
    rate = num.textContent
  })
})

//ao inves de esconder(hidden) usar JS para inner html na div card com as novas informacoes

btnSubmit.addEventListener('click', () => {
   rated.innerHTML = `You selected ${rate} out of 5`
   card.classList.add('hidden')
   thankYou.classList.remove('hidden')
})