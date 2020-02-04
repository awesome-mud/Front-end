import React, { useState, useEffect, useContext } from "react";
import PlayerContext from './PlayerContext'
import { axiosWithAuth } from '../../auth/axiosWithAuth';




export default function PlayerProvider ({children}) {

const [newRoom, setNewRoom] = useState([])
const [player, setPlayer] = useState([])


const getPlayer = () => {
    axiosWithAuth()
    .get('/adv/init/')
    .then(res => {
        console.log('player response:', res)
        setPlayer(res.data)
})}

function changeDirection(dir){
    axiosWithAuth()
    .post("/adv/move/", {direction: dir})
    .then(res => {
        setNewRoom(res)
        console.log("direction:", dir)
        console.log(res)
    })
}

return (
    <>
    <PlayerContext.Provider
    value={{
        setNewRoom,
        changeDirection
    }}
    >
        {children}
    </PlayerContext.Provider>
    </>
)

}



