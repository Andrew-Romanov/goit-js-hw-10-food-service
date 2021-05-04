const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';

const bodyElement = document.querySelector('body');
const themeSwitchElement = document.querySelector('#theme-switch-toggle');

themeSwitchElement.addEventListener('change', changeTheme);

function changeTheme(event) {
  event.target.checked ? applyTheme(Theme.LIGHT, Theme.DARK) : applyTheme(Theme.DARK, Theme.LIGHT);
};

function applyTheme(oldTheme, newTheme) {
  bodyElement.classList.remove(oldTheme);
  bodyElement.classList.add(newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
};

function resetTheme() {
  applyTheme(Theme.DARK, Theme.LIGHT);
  themeSwitchElement.checked = false;  
};

// Делаю начальные настройки, если Local Storage пуст
if (localStorage.getItem(THEME_STORAGE_KEY) === null) {
  resetTheme();
// Делаю начальные настройки, если Local Storage не пуст
} else {
  switch (localStorage.getItem(THEME_STORAGE_KEY)) {
    case Theme.LIGHT:
      applyTheme(Theme.DARK, Theme.LIGHT);
      themeSwitchElement.checked = false;
      break;
    case Theme.DARK:
      applyTheme(Theme.LIGHT, Theme.DARK);
      themeSwitchElement.checked = true;
      break;
  };
};