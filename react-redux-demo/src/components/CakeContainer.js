import React from 'react'


export function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}