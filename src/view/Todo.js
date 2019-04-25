/**
 * Crea el elemento del DOM para un `todo`
 *
 * @param todo Objecto con las propiedades `id` y `label`
 */
export default (todo) => {
  const liElem = document.createElement('li');
  liElem.setAttribute('data-id', todo.id);
  liElem.innerHTML = `
    <div class="view">
      <label>${todo.label}</label>
      <button class="destroy"></button>
    </div>
  `;
  return liElem;
};
