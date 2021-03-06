import React, { Component } from 'react'; 
import {addTodo} from '../actions/index'

// Each todo item that is in the todos array should have the following format:
// {
// value: 'Walk the dog.',
// completed: false
// }

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleInputChange = e => {
        console.log(e.target.value);
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <div>
                Todo Form
                <form>
                    <input
                        onChange = {this.handleInputChange}
                        placeholder = "value"
                        value = {this.state.value}
                        name = "value"
                    />
                </form>
                <button onClick = {this.props.addTodo}>
                    SUBMIT
                </button>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default TodoForm;