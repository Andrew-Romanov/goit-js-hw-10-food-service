import menuItems from '../menu.json';
import menuItemsMarkup from '../templates/menu-template.hbs';

const menuElement = document.querySelector('.js-menu');

menuElement.innerHTML = menuItemsMarkup(menuItems);