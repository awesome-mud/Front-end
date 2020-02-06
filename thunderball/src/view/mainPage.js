import React from 'react'
import '../css/Main.css'
import Initialize from '../components/initialize'
import Move from '../components/move'
import Map from '../components/map'
import Logo from '../images/logo.png'
import Song from '../music.mp3'

const MainPage = () => {

    return (
        <div className='mainDiv'>
            <img src={Logo} alt='logo' className='logo'/>
            <audio controls src={Song} volume='0.01'/>
            <div className='contentDiv'>
            <div className='leftDiv'>
            <div className='init'>
            <Initialize/>
            </div>
            <div className='move'>
            <Move/>
            </div>
            </div>
            <div className='rightDiv'>
            <div className='map'>
            <Map/>
            </div>
            </div>
            </div>
        </div>
    )
}
export default MainPage