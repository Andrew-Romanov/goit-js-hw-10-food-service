// Т. к. имеется список тем, который может в дальнейшем
// увеличиваться, то в дальнейшем использовал switch
// для обработки ситуаций
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyElement = document.querySelector('body');
const themeSwitchElement = document.querySelector('#theme-switch-toggle');

themeSwitchElement.addEventListener('change', changeTheme);

function changeTheme() {
  // Сбрасываю настройки, если в процессе работы
  // с сайтом пользователь стёр Local Storage
  if (localStorage.getItem('theme') === null) {
    resetTheme();
    return;
  };

  switch (localStorage.getItem('theme')) {
    case Theme.LIGHT:
      setTheme(Theme.DARK);
      break;
    case Theme.DARK:
      setTheme(Theme.LIGHT);
      break;
  };
};

function setTheme(newTheme) {
  switch (newTheme) {
    case Theme.LIGHT:
      // Не использовал classList.change, т. к.
      // в начальной разметке у body нет класса,
      // т. е. менять нечего
      bodyElement.classList.remove(Theme.DARK);
      bodyElement.classList.add(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
      break;
    case Theme.DARK:
      bodyElement.classList.remove(Theme.LIGHT);
      bodyElement.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
      break;
  };
};

function resetTheme() {
  setTheme(Theme.LIGHT);
  themeSwitchElement.checked = false;  
};

// Сбрасываю настройки, если Local Storage пуст
if (localStorage.getItem('theme') === null) {
  resetTheme();
// Делаю начальные настройки, если Local Storage не пуст
} else {
  setTheme(localStorage.getItem('theme'));
  switch (localStorage.getItem('theme')) {
  case Theme.LIGHT:
    themeSwitchElement.checked = false;
    break;
  case Theme.DARK:
    themeSwitchElement.checked = true;
    break;
  };
};