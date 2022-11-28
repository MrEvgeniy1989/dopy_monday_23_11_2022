import React from 'react';

type PropsType = {
    name: string
    starter: () => void
}

export const Button: React.FC<PropsType> = (props) => {
    const onClickHandler = () => {
        props.starter()
    }


    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};