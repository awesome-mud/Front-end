import React, {useState, useEffect, useContext} from 'react';
import { axiosWithAuth } from "../auth/axiosWithAuth";
import PlayerContext from '../context/Player/PlayerContext'

function Initialize() {
    const {player, setPlayer} = useContext(PlayerContext)
   

    return (
        <div>
           <p>{player.name}</p>
           <p>{player.title}</p>
           <p>{player.description}</p>
           {player.players && player.players.map((item)=>{
               return <p>{item}</p>
           })} 

        </div>
    )
}

export default Initialize;
