import React, { Component } from "react";
import TodoAdder from './todo-adder'; 
import TodoList from './todo-list';

class TodoApp extends Component {

    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <h1>ToDo works!</h1>

                <TodoAdder />
                <TodoList />

                <hr />
                <h2>Debug Stuff</h2>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>  // references new list
            </div>
        );
    }
}

export default TodoApp;