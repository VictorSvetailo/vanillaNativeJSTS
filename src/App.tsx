import React from 'react';
import './App.css';
import {User} from './User/User';
import {Test} from './04-filter/04';


function App() {

    const callBack = () => {
        console.log('Расхерачиваем React и JS')
    }


    {setTimeout(callBack, 10000)}
    // @ts-ignore
    return (
        <div className="App">
            <p>Hello Victor React</p>
            <User/>
            <Test/>
        </div>
    );
}




export default App;
