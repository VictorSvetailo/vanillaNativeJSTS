import React from 'react';
import './App.css';
import {User} from './User/User';
import {test} from './11-promise/Promise';
// import {askMom, willIGetNewPhone} from './11-promise/11-promise';


function App() {
    test()
    // askMom()
    // console.log(willIGetNewPhone)
    // const callBack = () => {
    //     console.log('Расхерачиваем React и JS')
    // }

    // {setTimeout(callBack, 10000)}
    // @ts-ignore
    return (
        <div>
            <p>Hello Victor React</p>
            <User/>

        </div>
    );
}




export default App;
