const TodoAPI = {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return Array.isArray(todos) ? todos : [];
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // Filter by shwoCompleted
    filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted);

    // Filter by searchText
    filteredTodos = filteredTodos.filter(todo =>
      todo.text.toLowerCase().indexOf(searchText) > -1 || searchText.length === 0
    );

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}

export default TodoAPI;
