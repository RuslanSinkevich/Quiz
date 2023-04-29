// ----- слайдер ------
const slider = document.querySelector(".form-quiz");
const sliderPagination = document.querySelectorAll(".quiz-form__paganation");
const sliderContainer = slider.querySelector(".quiz-form__sliders");
const slides = slider.querySelectorAll(".quiz-form__slide");
const btnAllBlock = slider.querySelector(".quiz-form__footer");
const btnBack = slider.querySelector(".quiz-form__btn-back");
const btnForward = slider.querySelector(".quiz-form__btn-forward");
pagination(slides.length, 0);
let slideIndex = 0;

function setSlide(index) {
  sliderContainer.style.transform = `translateX(${getTranslateXValue(
    slides.length,
    index
  )}%)`;
  pagination(slides.length, index);

  // убираем кнопки в последнем слайде
  if (index === slides.length - 1) {
    btnAllBlock.style.display = "none";
  } else {
    btnAllBlock.style.display = "flex";
  }

  // убираем кнопу назад в начальном слайде
  if (index === 0 || index === slides.length - 1) btnBack.style.display = "none";
  else btnBack.style.display = "flex";
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    setSlide(slideIndex);
  }
}

function pagination(slidesLength, currentSlide) {
  sliderPagination[currentSlide].innerHTML = `Шаг ${
    currentSlide + 1
  }/${slidesLength}`;
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    setSlide(slideIndex);
  }
}

btnBack.addEventListener("click", prevSlide);
btnForward.addEventListener("click", nextSlide);

// вычисляем смешение слайдов относительно их количества
function getTranslateXValue(numItems, currentIndex) {
  const percentAllElement = 100 / numItems; //
  const percentOneElement = percentAllElement * currentIndex;
  let translateX = -percentOneElement;
  return translateX;
}
