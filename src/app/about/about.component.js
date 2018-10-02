import React from "react";
import AboutContainer from './about.container';

const About = ({ counter, decrement, increment, load }) => (
    <div>
        <h1>About works!</h1>
        <hr />                                           
        <button onClick={load} className="btn">load</button>             
        <hr />
        <button onClick={increment} className="btn ml-2">+</button>
        <button onClick={decrement} className="btn ml-2">-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default AboutContainer(About);