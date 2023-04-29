import "../scss/styles.scss";
import "./sliders.js"
import "./select.js"

// Вычисляем длину input в зависимости от их количества, 
// в данном случе если меньше 3 то длина 100%
document.addEventListener("DOMContentLoaded", function () {
  const quizFormBody = document.getElementsByClassName("quiz-form__body");
  for (let i = 0; i < quizFormBody.length; i++) {
    const quizFormRadioLabel = quizFormBody[i].children;
    if (quizFormBody[i].children.length <= 3) {
      for (let r = 0; r < quizFormRadioLabel.length; r++) {
        quizFormRadioLabel[r].style.width = "100vh";
      }
    }
  }
});



  

