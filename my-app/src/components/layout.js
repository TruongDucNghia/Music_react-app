import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Play from './Play'
import Sidebar from './Sidebar'
const Layout = ({songsIndex, onHandleClickPlay, onHandleSeekSong, onNextSong, onPrevSong, onRandomSong}) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Play songsIndex={songsIndex}
            onHandleClickPlay={onHandleClickPlay} 
            onHandleSeekSong={onHandleSeekSong}
            onNextSong={onNextSong}
            onPrevSong={onPrevSong}
            onRandomSong={onRandomSong}
            />
      <Outlet />
    </>
  )
}

export default Layout