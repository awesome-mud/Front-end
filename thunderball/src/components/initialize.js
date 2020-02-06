import React, {useState, useEffect, useContext} from 'react';
import { axiosWithAuth } from "../auth/axiosWithAuth";
import PlayerContext from '../context/Player/PlayerContext'

function Initialize() {
    const {player, setPlayer} = useContext(PlayerContext)
   

    return (
        <div>
            <p><b>Driver:</b> {player.name}</p>
            <p><b>Location:</b> {player.title}</p>
            <p><b>GPS:</b> {player.description}</p>
            {player.players && player.players.map((item)=>{
               return <p><b>Traffic: </b>{item}</p>
           })} 

        </div>
    )
}

export default Initialize;
