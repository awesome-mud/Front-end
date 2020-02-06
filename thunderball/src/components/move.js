import React, {useContext} from 'react';
import PlayerContext from '../context/Player/PlayerContext'
import { axiosWithAuth } from '../auth/axiosWithAuth';
import wheel from '../images/steering.png'
import '../css/Main.css'
import up from '../images/up-arrow.png'
import down from '../images/down-arrow.png'
import right from '../images/right-arrow.png'
import left from '../images/left-arrow.png'

function Move() {
    
const {changeDirection} = useContext(PlayerContext)

    return (
        <div className='moveDiv'>
            <div className='steerTop'>
            <img src={up} onClick = { ()=> changeDirection('n')} alt='up' className='upArrow' />
            </div>
            <div className='steerMid'>
            <img src={left} onClick = { ()=> changeDirection('w')} alt='left' className='leftArrow' />
            <img src={wheel} alt='steering wheel' className='wheel' />
            <img src={right} onClick = { ()=> changeDirection('e')} alt='right' className='rightArrow' />
            </div>
            <div className='steerBot'>
            <img src={down} onClick = { ()=> changeDirection('s')} alt='down' className='downArrow' />
            </div>
        </div>
    )
}

export default Move;
