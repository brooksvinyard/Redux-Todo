import { ADD_TODO, TOGGLE_DONE } from '../actions';

const initialState = {
    todos: [
      { todo: 'Clean garage', id: 8675309, completed: false },
      { todo: 'Cook', id: 5555551212, completed: false }
    ]
};

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {

      case ADD_TODO:
        const newToDo = {
          todo: action.payload,
          id: Date.now(),
          completed: false
        };
        return {
          ...state,
          todos: [...state.todos, newToDo]
        };
  
      case TOGGLE_DONE:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  