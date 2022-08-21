import React from 'react';
import './App.css';
import {User} from './User/User';


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
        </div>
    );
}




export default App;
