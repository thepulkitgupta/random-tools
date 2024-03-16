import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './myrouter';

function App() {
    return (
        <MyRouter />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
