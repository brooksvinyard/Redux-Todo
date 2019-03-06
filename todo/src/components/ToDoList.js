import React from 'react';
import { connect } from 'react-redux';

import { addToDo, toggleDone } from '../actions';

import './ToDoList.css'

class ToDoList extends React.Component {
    state = {
      newToDo: ''
    };
  
    handleChanges = e => {
      this.setState({ newToDo: e.target.value });
    };
  
    addToDo = e => {
      e.preventDefault();
      this.props.addToDo(this.state.newToDo);
      this.setState({ newToDo: '' });
    };
  
    toggleDone = id => {
      this.props.toggleDone(id);
    };
  
    render() {
      return (
        <>
          <div className="todo-list">
            {this.props.toDoList.map(todo => (
              <h4 key={todo.id} onClick={() => this.toggleDone(todo.id)}>
                {todo.completed ?  <div className="DONE">{todo.todo}</div> : <div className="not-done">{todo.todo}</div>}
              </h4>
            ))}
          </div>
          <input
            type="text"
            name="newToDo"
            value={this.state.newToDo}
            onChange={this.handleChanges}
            placeholder="Add new todo"
          />
          <button onClick={this.addToDo}>Add ToDo</button>
        </>
      );
    }
  }

  
  const mapStateToProps = state => ({
    toDoList: state.todos
  });
  
  export default connect(
    mapStateToProps,
    { addToDo, toggleDone }
  )(ToDoList);
  