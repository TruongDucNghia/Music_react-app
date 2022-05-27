import React from 'react'
import songs from '../data'
const PlayList = () => {
  return (
    songs[0].map((song, index) =>
      <div key={index} data-index={index} className="presonal_item1-playList--item">
        <div className="presonal_item1-playList--itemLeft">
          <div className="presonal_item1-playList--boxImg">
            <img src={song.image} alt />
            <div className="presonal_item1-iconPlays">
              <i className="bi bi-play-fill" />
            </div>
          </div>
          <div className="presonal_item1-playList--nameSong">
            <p>{song.name}</p>
            <span>{song.singer}</span>
          </div>
        </div>
        <div className="presonal_item1-playList--itemCenter mobile-none">
          <p>03:40</p>
        </div>
        <div className="presonal_item1-playList--itemRight">
          <div className="charts_items-icon">
            <i className="bi bi-mic-fill" />
          </div>
          <div className="charts_items-icon btn_love">
            <i className="bi bi-heart-fill" />
          </div>
          <div className="charts_items-icon mobile-none">
            <i className="bi bi-three-dots" />
          </div>
        </div>
      </div>

    )
  )
}

export default PlayList