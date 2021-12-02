import { createStore } from '../../src/controller/store';
import { renderApp } from '../../src/view';

import { sanitizeHtmlForComparison } from './utils.js';

describe('View controller', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('renderApp inserta app dentro del elemento #root', () => {
    createStore({
      todos: [
        {
          id: 'id',
          label: 'Un todo',
        },
      ],
    });
    renderApp();
    const rootElem = document.getElementById('root');
    const expected = sanitizeHtmlForComparison(`
<section class="todoapp">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="">
  </header>
  <section class="main">
    <div class="todo-list">
      <li data-id="id">
        <div class="view">
          <label>Un todo</label>
          <button class="destroy"></button>
        </div>
      </li>
    </div>
  </section>
  <footer class="footer"><span class="todo-count"><strong>1</strong> todo</span></footer>
</section>
    `);
    expect(sanitizeHtmlForComparison(rootElem.innerHTML)).toBe(expected);
  });
});
