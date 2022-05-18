import React, { useEffect } from 'react'

const Play = ({songsIndex, onHandleClickPlay, onHandleSeekSong, onNextSong, onPrevSong, onRandomSong, onRepeatSong}) => {
    useEffect(() =>{
        function handlerDisplay(){
            const btn = document.querySelector('#bi-down')
            const fixed = document.querySelector('.app_play')
            const headerNone = document.querySelector('.body_header')
            fixed.addEventListener('click', (e) =>{
                const cl =  e.target.dataset.cl
                if(cl){
                    fixed.classList.add('active')
                    headerNone.style.visibility = 'hidden'
                    btn.addEventListener('click', () =>{
                        fixed.classList.remove('active')
                        headerNone.style.visibility = 'visible'
                    })
                }
            })
            
        }
        handlerDisplay()
    }, [])
    return (
        <div className="app_play">
            <div className="app_play-fixed" data-cl="duma">
                <div className="play_fixed-item1">
                    <div className="player_boxImg cdThumb">
                        <img id="imgSong" src={songsIndex.image} alt />
                    </div>
                    <div className="player_boxName">
                        <div className="player_boxName-content">
                            <div className="player_boxName-animate">
                                <span id="nameSong">{songsIndex.name}</span>
                            </div>
                        </div>
                        <p id="nameSinger">{songsIndex.singer}</p>
                    </div>
                    <div className="player_boxIcon">
                        <button className="btn_love">
                            <i className="bi bi-heart" />
                        </button>
                        <button className="player_more">
                            <i className="bi bi-three-dots" />
                        </button>
                    </div>
                </div>
                <div className="play_fixed-item2">
                    <div className="player_control-icon">
                        <div onClick={onRandomSong} className="player_item2-icons random">
                            <i className="bi bi-shuffle" />
                        </div>
                        <div onClick={onPrevSong} className="player_item2-icons prev">
                            <i className="bi bi-skip-start-fill" />
                        </div>
                        <div onClick={(e) => onHandleClickPlay(e)} className="player_item2-icons plays">
                            <i className="bi bi-play-fill" />
                            <i className="bi bi-pause" />
                        </div>
                        <div onClick={onNextSong} className="player_item2-icons next">
                            <i className="bi bi-skip-end-fill" />
                        </div>
                        <div onClick={(e) => onRepeatSong(e)} className="player_item2-icons repeat">
                            <i className="bi bi-arrow-repeat" />
                        </div>
                    </div>
                    <div className="player_control-progres">
                        <div className="player_time-start">
                            <span>00:00</span>
                        </div>
                        <input type="range" onChange={(e) => onHandleSeekSong(e)} className="input_range-time" defaultValue={0} min={0} step={1} max={100} />
                        <div className="player_time-end">
                            <span>05:30</span>
                        </div>
                    </div>
                </div>
                <div className="play_fixed-item3">
                    <div className="player_item3-content">
                        <div className="player_item3-icon">
                            <i className="bi bi-camera-video" />
                        </div>
                        <div className="player_item3-icon">
                            <i className="bi bi-mic" />
                        </div>
                        <div className="player_item3-icon">
                            <i className="bi bi-volume-up" />
                        </div>
                        <div className="play_item3-volume">
                            <input type="range" className="volume__range" defaultValue={100} step={1} min={0} max={100} />
                            <div className="progress__track volume--track">
                                <div className="progress__track-update" style={{ width: '40%' }} />
                            </div>
                        </div>
                        <div className="player_item3-iconList">
                            <i className="bi bi-music-note-list" />
                        </div>
                    </div>
                </div>
                <audio src={songsIndex.path} id="audio" />
            </div>
            <div className="app_play-full">
                <div className="app_play-header">
                    <div className="app_play-logo">
                        <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.5.4/static/media/icon_zing_mp3_60.f6b51045.svg" alt />
                    </div>
                    <div className="app_play-pop">
                        <button className="active">DANH SÁCH PHÁT</button>
                        <button>KARAOKE</button>
                        <button>LỜI BÀI HÁT</button>
                    </div>
                    <div className="app_play-setting">
                        <button><i className="bi bi-arrows-angle-expand" /></button>
                        <button><i className="bi bi-gear" /></button>
                        <button id="bi-down"><i className="bi bi-chevron-down" /></button>
                    </div>
                </div>
                <div className="app_play-boxImg">
                    <img className='cdThumb' src={songsIndex.image} alt />
                </div>
                <div className="app_play-boxText">
                    <span>Now playing</span>
                    <span id="name1">{songsIndex.name}</span>
                    <span id="singer2">{songsIndex.singer}</span>
                </div>
            </div>
        </div>

    )
}

export default Play