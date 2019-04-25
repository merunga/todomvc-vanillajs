/**
 * Crea el elemento del DOM de la cabecera
 */
export default () => {
  const header = document.createElement('header');
  header.setAttribute('class', 'header');
  header.innerHTML = `
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="">
  `;
  return header;
};
