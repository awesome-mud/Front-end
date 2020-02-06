import React, {useEffect, useState, useRef} from 'react'
import '../css/Main.css'
import Initialize from '../components/initialize'
import Move from '../components/move'
import Map from '../components/map'
import Logo from '../images/logo.png'
import play from '../images/play.png'
import pause from '../images/pause.png'
import Song from '../music.mp3'

const MainPage = () => {
    const audioPlayer = useRef()
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        audioPlayer.current.volume = 0.01;
      }, []);
    
    let playPause = () => {
        if (audioPlayer.current.paused) {
          audioPlayer.current.play();
          setPlaying(true);
        } else {
          audioPlayer.current.pause();
          setPlaying(false);
        }
    };
    return (
        <div className='mainDiv'>
            
            <div className="topContainer">
                <img src={Logo} alt='logo' className='logo'/>
                <img onClick={playPause} src={playing ? pause : play} className="playPause"/>
            </div>
            <audio ref={audioPlayer} src={Song} autoPlay loop/>
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