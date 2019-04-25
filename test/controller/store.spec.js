import store, { createStore } from '../../src/controller/store';

describe('store', () => {
  it('createStore con valores iniciales', () => {
    const initialData = {
      elemento1: 'valor1',
    };
    createStore(initialData);
    expect(store.getAll()).toEqual(initialData);
  });

  it('get / set', () => {
    createStore();
    store.set('elemento1', 'valor1');
    expect(store.get('elemento1')).toBe('valor1');
  });
});
