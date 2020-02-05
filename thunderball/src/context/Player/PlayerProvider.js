import React, { useState, useEffect, useContext } from "react";
import PlayerContext from './PlayerContext'
import { axiosWithAuth } from '../../auth/axiosWithAuth';




export default function PlayerProvider ({children}) {

const [newRoom, setNewRoom] = useState([])
const [player, setPlayer] = useState([])
const [map, setMap] = useState([])

useEffect(() => {
getPlayer()
getMap()
}, [] )
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
        setPlayer(res.data)
        console.log("direction:", dir)
        console.log(res)
    })
}

function getMap(){
    axiosWithAuth()
    .get("/adv/map")
    .then( res=> {
      setMap(res.data.map)
      console.log("res from map end point: ", res)
    })
}

return (
    <>
    <PlayerContext.Provider
    value={{
        setNewRoom,
        changeDirection,
        player,
        setPlayer,
        map,
        setMap
        
    }}
    >
        {children}
    </PlayerContext.Provider>
    </>
)

}



