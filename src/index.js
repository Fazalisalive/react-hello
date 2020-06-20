import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

function HelloWorld() {

    return (
        <div>
            <App />
          
        </div>
    );

}

ReactDOM.render(<HelloWorld />, document.querySelector('#root')

)