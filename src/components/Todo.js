import React from 'react'

class Todo extends React.Component {
   dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    render() {
        return (
        <div className={`task${this.props.item.completed ? ' completed' : '' }`} onClick={()=>{this.props.completeTask(this.props.item.id)}}>
            <span>{new Date(this.props.item.id).toLocaleDateString("en-US", this.dateOptions)}</span>
            {this.props.item.task}
            
        </div>
        )
    }
}

export default Todo