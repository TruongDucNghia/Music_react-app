import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Charts from "./page/Charts";
import Explore from "./page/Explore";
import Following from "./page/Following";
import Presonal from "./page/Presonal";
import Radio from "./page/Radio";
import songs from "./data";
function App() {
  const [index, setIndex] = useState(0)
  const songsIndex = songs[0][index]
  const [audio, setAudio] = useState()
  const [progress, setProgress] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() =>{
    const audios = document.querySelector('#audio') 
    const progress = document.querySelector('.input_range-time') 
    setAudio(audios) 
    setProgress(progress)
  }, [])
  const handleClickPlay = (e) =>{
    if(isPlaying){
      setIsPlaying(!isPlaying)
      audio.play()
      e.target.parentElement.classList.add('pause')
    }else{
      audio.pause()
      e.target.parentElement.classList.remove('pause')
      setIsPlaying(!isPlaying)
    }
    audio.ontimeupdate = () =>{
      progress.value = Math.floor(audio.currentTime / audio.duration * 100)
    }

  }
  const handleSeekSong = (e) =>{
    const seekCurrent = audio.duration / 100 * e.target.value
    console.log(seekCurrent);
    audio.currentTime = seekCurrent
  }
  return (
    <Routes>
      <Route path="/" element={<Layout onHandleSeekSong={handleSeekSong} onHandleClickPlay={handleClickPlay} songsIndex={songsIndex} />}>
        <Route index element={<Presonal />} />
        <Route path="explore" element={<Explore />} />
        <Route path="charts" element={<Charts />} />
        <Route path="radio" element={<Radio />} />
        <Route path="following" element={<Following />} />
      </Route>
    </Routes>
  );
}

export default App;
