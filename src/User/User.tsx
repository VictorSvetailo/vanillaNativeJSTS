import React, {useState, MouseEvent, ChangeEvent} from 'react';


export function User() {

    // let vsr = "VS React -"
    let [vsr, setVsr] = useState(true)
    let [destroy, setDestroy] = useState(true)



    let onclickDeleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
        let remove = event.currentTarget.name === 'delete'
        remove ? setVsr(vsr = false) : setVsr(vsr = true)

        // if (remove) {
        //     setVsr(vsr = false)
        //     //setDestroy(vsr = false)
        // }
        // if (save) {
        //     setVsr(vsr = true)
        //     //     setDestroy(vsr = true)
        // }
    }
    // let onclickSaveHandler = () => {
    //     setVsr(vsr = true)
    //     setDestroy(vsr = true)
    // }
    const onNameChanged = () => {
        console.log('area changed')
    }
    const focusLostHandler = () => {
        console.log('Focus lost')
        alert('Вы покинули Textarea!')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        let save = event.currentTarget.value
        console.log('Changed input')
        console.log(save)
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onNameChanged}
                    onBlur={focusLostHandler}>
                    Business
                </textarea>
            </div>
            <input onChange={onAgeChanged} type={'number'}/>

            <p>{vsr && 'VS React -'}</p>
            <button name="delete" onClick={onclickDeleteHandler}>X</button>
            <button onClick={onclickDeleteHandler}>X</button>
            <p>{destroy && 'Цель разнос React'}</p>
        </div>
    );
};
