// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    
    render() {
        
        if(this.props.search === false) {
            return (
                <div className="list">{
                    this.props.todoList.map(item => {
                        return (<Todo item={item} completeTask={this.props.completeTask}/>)
                    })
                }</div>
                
            )
        } else {
            return (
                <div className="list">{
                    this.props.todoList.filter(item => {
                        return item.task.includes(this.props.search)
                    })
                    .map(item => {
                        return (<Todo item={item} completeTask={this.props.completeTask}/>)
                    })
                }</div>
                
            )
        }
        
    }
}

export default TodoList