import React from 'react'

class Todo extends React.Component {
   

    render() {
        return (
        <div className={`task${this.props.item.completed ? ' completed' : '' }`} onClick={()=>{this.props.completeTask(this.props.item.id)}}>
            {this.props.item.task}
        </div>
        )
    }
}

export default Todo