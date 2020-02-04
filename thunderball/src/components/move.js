import React, {useContext} from 'react';
import PlayerContext from '../context/Player/PlayerContext'
import { axiosWithAuth } from '../auth/axiosWithAuth';

function Move() {
    
const {changeDirection} = useContext(PlayerContext)


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
