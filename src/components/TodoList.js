// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        if(this.props.search === false) {
            return (
                this.props.todoList.map(item => {
                    return (<Todo item={item} completeTask={this.props.completeTask}/>)
                })
            )
        } else {
            return (
                this.props.todoList.filter(item => {
                    return item.task.includes(this.props.search)
                })
                .map(item => {
                    return (<Todo item={item} completeTask={this.props.completeTask}/>)
                })
            )
        }
        
    }
}

export default TodoList