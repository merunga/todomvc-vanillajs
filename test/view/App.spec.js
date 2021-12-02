import App from '../../src/view/App';

import { sanitizeHtmlForComparison } from './utils.js';

describe(App, () => {
  it('Se pinta correctamente', () => {
    const todos = [
      { id: 1, label: 'todo 1' },
      { id: 2, label: 'todo 2' },
    ];
    const appElem = App(todos);

    const expected = sanitizeHtmlForComparison(`
<section class="todoapp">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="">
  </header>
  <section class="main">
    <div class="todo-list">
      <li data-id="1">
        <div class="view">
          <label>todo 1</label>
          <button class="destroy"></button>
        </div>
      </li>
      <li data-id="2">
        <div class="view">
          <label>todo 2</label>
          <button class="destroy"></button>
        </div>
      </li>
    </div>
  </section>
  <footer class="footer"><span class="todo-count"><strong>2</strong> todo</span></footer>
</section>
    `);

    expect(sanitizeHtmlForComparison(appElem.outerHTML)).toBe(expected);
  });
});
