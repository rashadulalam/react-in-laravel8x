import React from 'react';
import ReactDom from 'react-dom';
import Hello from "./Hello";

ReactDom.render(
    <React.StrictMode>
        <Hello />
    </React.StrictMode>,
    document.getElementById('root')
);
