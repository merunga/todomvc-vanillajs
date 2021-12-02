import { renderApp } from './view/index.js';
import { createStore } from './controller/store.js';

createStore({
  todos: [
    {
      id: 1,
      label: 'Un todo desde el store',
    },
  ],
});

window.addEventListener('load', () => {
  renderApp();
});
