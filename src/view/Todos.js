/**
 * Crea el html de la lista de todos
 *
 * @param todos Array de objetos con los todos existentes
 * Los todos deben tener `id` y `label`
 */
export default todos => (
  `<section class="main">
      <ul class="todo-list">
       ${todos.map(t => (`
        <li data-id="${t.id}">
          <div class="view">
            <label>${t.label}</label>
            <button class="destroy"></button>
          </div>
        </li>
      `))}
      </ul>
    </section>`
);
