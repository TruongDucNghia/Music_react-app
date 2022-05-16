import React from 'react'
import songs from '../../data'
const Tab2 = () => {
    return (
        <div className="presonal_boxItems-all">
            <div className="explore_boxItems-title">
                <h3>Bài Hát </h3>
            </div>
            <div className="presonal_boxItems-playlistTab2">
                {songs[1].map((item, index) =>
                    <div className="presonal_item-playListTab2">
                        <div className="charts_items-left">
                            <div className="presonal_items-number">
                                <i className="bi bi-music-note-beamed" />
                            </div>
                            <div className="charts_items-content">
                                <div className="charts_items-boxImg">
                                    <img src={item.image} />
                                    <div className="charts_items-iconPlays">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                </div>
                                <div className="charts_items-singer">
                                    <p>{item.name}</p>
                                    <a href>{item.singer}</a>
                                </div>
                            </div>
                        </div>
                        <div className="charts_items-center">
                            <div className="charts_items-timer">
                                <p>5:30</p>
                            </div>
                        </div>
                        <div className="charts_items-right">
                            <div className="charts_items-boxIcons">
                                <div className="charts_items-icon">
                                    <i className="bi bi-mic-fill" />
                                </div>
                                <div className="charts_items-icon btn_love">
                                    <i className="bi bi-heart-fill" />
                                </div>
                                <div className="charts_items-icon">
                                    <i className="bi bi-three-dots" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tab2