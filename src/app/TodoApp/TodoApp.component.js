import React, { Component } from "react";
import TodoAdder from './shared/todo-adder'; 
import TodoList from './shared/todo-list';
import TodoView from './todo-view';
import { Route } from 'react-router-dom';  

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
                <Route path="/todo/:id" component={TodoView}/>  

                <hr />
                <h2>Debug Stuff</h2>
                <p>NONE</p>
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> // references new list */}
            </div>
        );
    }
}

export default TodoApp;