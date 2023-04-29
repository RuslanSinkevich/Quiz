const nameSelect = "quiz";
const EL = document.querySelector("." + nameSelect + "-select");

const EL_TOGGLE = EL.querySelector("." + nameSelect + "-select__toggle");
const EL_TOGGLE_ALL_EL = EL_TOGGLE.querySelectorAll("*");
const EL_TOGGLE_SELECTED_OPTION = EL_TOGGLE.querySelector("." + nameSelect + "-select__toggle-selected");

const EL_OPTIONS = EL.querySelector("." + nameSelect + "-select__options");
const EL_OPTION = EL_OPTIONS.querySelectorAll("." + nameSelect + "-select__option");


const EL_DROPDOWN = EL.querySelector("." + nameSelect + "-select__dropdown");
let selectOptionValue = "";
let selectOptionIndex = 0;

// Показ скрытие списка
function showHide() {
  EL_DROPDOWN.style.display === "block"
    ? (EL_DROPDOWN.style.display = "none")
    : (EL_DROPDOWN.style.display = "block");
}

// Добавляет событие открытия на все дочерние элементы внутри toggle
// Добавляем атрибут select__toggle_children ко всем дочерним элементам
EL_TOGGLE.addEventListener("click", showHide);
EL_TOGGLE_ALL_EL.forEach(function (event) {
  event.addEventListener("click", showHide);
  event.setAttribute("select__toggle_children", "1");
});

// Скрывает список с опциями
// Не скрывает список, если кликаем по дочерним элементам
// selectToggle проверяет есть ли у EL_TOGGLE дочерние элементы
document.addEventListener("click", function (event) {
  const selectToggle = event.target.getAttribute("select__toggle_children");
  if (event.target != EL_TOGGLE && 1 != selectToggle) {
    EL_DROPDOWN.style.display = "none";
  }
});

// Выбор элементов из списка 
EL_OPTIONS.addEventListener("click", function (event) {
  // Удалить класс у всех li элементов внутри EL_OPTIONS
  EL_OPTION.forEach(function (option, index) {
    option.classList.remove(nameSelect + "-select__option-selected");
    option.setAttribute("data-index", index);
  });

  // Добавить класс elect__option_selected к выбранному элементу
  event.target.classList.add(nameSelect + "-select__option-selected");
  selectOptionValue = event.target.getAttribute("data-value");
  selectOptionIndex = event.target.getAttribute("data-index");

  // Поднимаем в верх выбранный элемент списка
  EL_OPTIONS.insertBefore(event.target, EL_OPTIONS.firstChild);

  // Добавить в  выбранный элемент списка текст.
  EL_TOGGLE_SELECTED_OPTION.innerHTML = event.target.innerHTML;
});


