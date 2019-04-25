/**
 * Crea el elemento del dom para el footer
 *
 * @param count Cantidad de todos en la app
 */
export default (count) => {
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'footer');
  footer.innerHTML = `<span class="todo-count"><strong>${count}</strong> todo</span>`;
  return footer;
};
