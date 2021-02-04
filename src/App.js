import './App.css';
import Person from "./Person/Person";
import * as React from "react";

function App() {
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <Person/>
            <Person/>
            <Person/>
        </div>
        //   React.createElement('div', {className: 'App'} , React.createElement('h1', null, 'Does not working now?'))
    );
}

export default App;
