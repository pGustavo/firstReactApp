import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import env from '@env';
import loadable from 'loadable-components';

const About = loadable(() => import ('./about'));
const Home = loadable(() => import  ('./home'));
const TodoApp = loadable(() => import ('./TodoApp/TodoApp.component'));

const App = () => {
    console.log('env', env);
    return (
        <div className="container">
            <div className="col-12">
                <h1 className="text-center">ToDo APP!</h1>

                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/todo">ToDo</Link></li>
                        </ul>

                        <hr/>

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/todo" component={TodoApp}/>
                        </Switch>
                    </div>
                </Router>

            </div>
        </div>
    )
};

export default App;