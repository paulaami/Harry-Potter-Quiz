const form = document.querySelector(".quiz-box");
const answers = Array.from(form.querySelectorAll(".answer"));

const arrowBtn = document.querySelector('.arrow-next');

const modal = document.querySelector('.modal');
const modalInfo = modal.querySelector('.modal-info');
const modalBtn = modal.querySelector('.close-modal');


const answerBox1 = form.querySelectorAll(".answer-box1");
const answerBox2 = form.querySelectorAll(".answer-box2");
const answerBox3 = form.querySelectorAll(".answer-box3");
const answerBox4 = form.querySelectorAll(".answer-box4");

const submitBtn = form.querySelector('.check-score');

const answerArr = [
  answerBox1,
  answerBox2,
  answerBox3,
  answerBox4
];
let step = 0;

arrowBtn.addEventListener("click", () => {

  const checkedAnswers = answers.filter(answer => answer.checked);
  if (checkedAnswers.length < (step + 1) * 2) {
    console.log(checkedAnswers)
    modal.classList.add("modal-active");
    modalInfo.innerText = "Wszystkie pola muszą być zaznaczone!"
  } else {
    if (step + 1 < answerArr.length) {
      answerArr[step++].forEach(box => box.style.display = "none");

      answerArr[step].forEach(box => {
        box.style.display = "flex";
        box.classList.add("fade-in");
      });
    }
  }
  if (checkedAnswers.length == 8) {
    changeBtn();
  }

});

const changeBtn = () => {
  if (answerBox4[0].style.display === 'flex') {
    arrowBtn.style.display = 'none'
    submitBtn.style.display = 'block'
  }
}


const closeModal = () => {
  modal.classList.remove("modal-active");
}
modalBtn.addEventListener('click', closeModal)




const handleQuiz = (e) => {
  e.preventDefault();
  const checkedAnswers = answers.filter(answer => answer.checked);
  const score = checkedAnswers.map(el => +el.value).reduce((a, b) => a + b)
  localStorage.setItem('mostRecentScore', score)
  return window.location.assign('./end.html')
}
form.addEventListener('submit', handleQuiz)