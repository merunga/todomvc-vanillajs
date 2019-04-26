// El estado inicial de la aplicación
const defaultData = { todos: [] };

// En esta variable vamos a ir guardando los todos
let data = {};

export default {
  // obtener un propiedad
  get(field) {
    return data[field];
  },
  // escribir una propiedad
  set(field, value) {
    data[field] = value;
  },
  // obtener todos los valores
  getAll() {
    return { ...data };
  },
};

export const createStore = (initialData = defaultData) => {
  data = { ...initialData };
};
