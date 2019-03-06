export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export const addToDo = todo => {
    console.log(todo);
    return {
      type: ADD_TODO,
      payload: todo
    };
  };
  
  export const toggleDone = id => {
    console.log(id);
    return {
      type: TOGGLE_DONE,
      payload: id
    };
  };