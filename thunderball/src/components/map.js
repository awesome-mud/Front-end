import React, { useContext } from 'react'
import PlayerContext from '../context/Player/PlayerContext'
import '../css/Main.css'
import Test from '../images/testmap.png'

const Map = () => {
    // const {map, setMap} = useContext(PlayerContext)
    
    // const NorthRoad = styled.div`
    //  height: 20px;

    // `
    
    // const createMap = () => {
    //    map.map(road => {
    //        if (road.n_to > 0) {
            
    //        }
    //    })
    // }

return (
    <div className='mapDiv'>
        <img src={Test} />
    </div>
)


}
export default Map