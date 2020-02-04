import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

function Move() {
    const [newRoom, setNewRoom] = useState([])

    function changeDirection(dir){
        axiosWithAuth()
        .post("/adv/move/", {direction: dir})
        .then(res => {
            console.log("direction:", dir)
            console.log(res)
        })
    }

    

    return (
        <div>
            <button onClick = { ()=> changeDirection('n')}>Up</button>
            <button onClick = { ()=> changeDirection('s')}>Down</button>
            <button onClick = { ()=> changeDirection('e')}>Right</button>
            <button onClick = { ()=> changeDirection('w')}>Left</button>
        </div>
    )
}

export default Move;
