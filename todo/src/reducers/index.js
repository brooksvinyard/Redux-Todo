import { ADD_TODO, TOGGLE_DONE } from '../actions';

const initialState = {
    todos: [
      { todo: 'Clean garage', id: 34782356, completed: false },
      { todo: 'Cook', id: 677802, completed: false }
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
        // map through state.members
        // if member's id at current iteration matches action.payload
        // return new member object - spread in old member object
        // toggle member's dragonStatus (immutable)
        // else return member untouched
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
  