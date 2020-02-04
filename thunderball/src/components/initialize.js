import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../auth/axiosWithAuth";


function Initialize() {
    const [player, setPlayer] = useState([])
    useEffect(()=>{
    axiosWithAuth()
    .get('/adv/init/')
    .then(res => {
        console.log('player response:', res)
        setPlayer(res.data)
    })
    .catch(err => console.log(err))
    },[])

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
