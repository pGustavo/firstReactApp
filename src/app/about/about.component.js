import React from "react";
import AboutContainer from './about.container';

const About  = ({ counter, decrement, increment }) => (
    <div>
        <h1>About works!</h1>
        <hr />
        <button onClick={increment} className="btn btn-danger">+</button>
        <button onClick={decrement} className="btn btn-primary">-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default AboutContainer(About);