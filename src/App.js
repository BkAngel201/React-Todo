import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    let TodoValues = []
    if(localStorage.getItem('TodoList')) {
      TodoValues = JSON.parse(localStorage.getItem('TodoList'))
    } else {
      localStorage.setItem('TodoList', JSON.stringify(TodoValues))
    }
    this.state = {
      todo: TodoValues,
      search: false
    }
  }

  addTask = task => {
    let tempArray = [
        ...this.state.todo,
      {
        task: task,
        id: Date.now(),
        completed: false
      }
      ]
    this.setState({
      todo: tempArray
    })
    localStorage.setItem('TodoList', JSON.stringify(tempArray))
  }

  completeTask = id => {
    let tempArray = this.state.todo.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        } 
      } else {
        return item
      }
      })
    this.setState({
      todo: tempArray
    })
    localStorage.setItem('TodoList', JSON.stringify(tempArray))
  }

  clearCompleted = () => {
    let tempArray = this.state.todo.filter(item => {
      return item.completed === false
    })
    this.setState({
      todo: tempArray
    })
    localStorage.setItem('TodoList', JSON.stringify(tempArray))
  }

  searchTask = searchString => {
    if (searchString === '') {
      this.setState({
        search: false
      })
    } else {
      this.setState({
        search: searchString
      })
    }
  }

  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} searchTask={this.searchTask} search={this.search}/>
        <TodoList todoList={this.state.todo} completeTask={this.completeTask} search={this.state.search}/>
      </div>
    );
  }
}

export default App;
