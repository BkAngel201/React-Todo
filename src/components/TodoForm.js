import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
    }

    handleTaskInputChange = e => {
        if(e.target.value === '' && this.props.search !== false) {
            this.props.searchTask('')
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="form">
                <input type="text" name="task" value={this.state.task} onChange={this.handleTaskInputChange}/>
                <div className="buttonPanel">
                    <button onClick={
                        () => {
                            if(this.state.task !== '') {
                                this.props.addTask(this.state.task)
                                this.setState({task: ''})
                            }
                        }
                    }>
                        Add Task
                    </button>
                    <button onClick={this.props.clearCompleted}>
                        Clear Task Completed
                    </button>
                    <button onClick={
                        () => {
                            this.props.searchTask(this.state.task)
                        }
                    }>
                        Search Tasks
                    </button>
                </div>
                
            </div>
            
        )
    }
}

export default TodoForm