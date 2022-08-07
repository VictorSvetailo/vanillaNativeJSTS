import React, {useState} from 'react';

type LessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useVictorState(m: string){
    return [m, function(){}]
}


export const ManComponent: React.FC<PropsType> = (props) => {

    const [message, setMessage ] = useState<string>('Hello')

    const {title, man, ...restProps} = props
    // const {title, man} = props
    // const {name} = props.man

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            {/*<div>{car.model}</div>*/}
            {/*<div>{food}</div>*/}
        </div>
    );
};

