/**
 * Crea el html del footer
 *
 * @param count Cantidad de todos en la app
 */
export default count => (
  `<footer class="footer" style="display: block;">
    <span class="todo-count"><strong>${count}</strong> todos</span>
  </footer>`
);
