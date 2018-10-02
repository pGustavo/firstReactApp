import React from "react";

const Home = ({ counter, decrement, increment }) => (
    <div>
        <h1>Home works!</h1>
        <hr />
        <button onClick={increment} className="btn btn-danger">+</button>
        <button onClick={decrement} className="btn btn-primary">-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default Home;