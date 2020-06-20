import React, {useState} from 'react';

import {Message} from './Message';

import './App.css'

export default function App() {

    let [count, setCount] = useState(0)
    let [daytime, setDaytime ] = useState(true)

    return (
        <div className= {`box ${daytime ? 'dayLight' : ''}`}>
           <h3>Good {daytime ? 'Morning!' : 'Night!' } </h3>
           {/* <h3>Counter Value: {Message.count}</h3> */}
           <Message counter={count} />

           <button onClick={
               () => setCount(count + 1)
               }>
                   Increment Counter
                   </button>
            
            <button onClick={
                () => setDaytime(!daytime)
            }>
                Change Greetings
                </button>
        </div>
    );

}

