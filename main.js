import './style.css'

const rating = document.querySelectorAll('.rate')

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', () => {
    rating[i].classList.toggle('active')
  });
}