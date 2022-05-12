import React, { useEffect } from 'react'

const Radio = () => {
    useEffect(() => {
        function handlerHeader() {
            const scroll = document.querySelectorAll('.app_container')
            const header = document.querySelector('.body_header')

            scroll.forEach(item => {
                item.addEventListener('scroll', () => {
                    const scrollHeight = item.scrollTop;
                    if (scrollHeight > 10) {
                        header.classList.add('active')
                    }
                    if (scrollHeight == 0) {
                        header.classList.remove('active')
                    }
                })
            })
        }
        handlerHeader()
    }, [])
    return (
        <div className="app_container active">
            <div className="app_container-content">
                <div className="app_content-radio">
                    <section className="app_radio-container">
                        {/* explore radio */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Radio Nổi Bật <i className="bi bi-chevron-right" /></h3>
                            </div>
                            <div className="explore_boxRadio-radio">
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio1.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach1.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>Xone Radio</h4>
                                        <p>476 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio2.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach2.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>On Air</h4>
                                        <p>376 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio3.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach3.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>Chạm</h4>
                                        <p>1476 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio4.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach4.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>Acoustic</h4>
                                        <p>4763 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio5.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach5.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>Rap Việt</h4>
                                        <p>476 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio6.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach6.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>US-UK</h4>
                                        <p>76 đang nghe</p>
                                    </div>
                                </div>
                                <div className="explore_boxRadio-item">
                                    <div className="explore_boxRadio-itemTop">
                                        <div className="explore_boxRadio-imgs">
                                            <div className="explore_boxRadio-img">
                                                <img src="./img/tabExplore/radios/radio7.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxRadio-live">
                                            <p>Live</p>
                                        </div>
                                        <div className="explore_boxRadio-logo">
                                            <img src="./img/tabExplore/radios/attachs/attach7.jpg" alt />
                                        </div>
                                    </div>
                                    <div className="explore_boxRadio-itemBottom">
                                        <h4>K-POP</h4>
                                        <p>46 đang nghe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <img src="./img/tabRadio/specialPlaylists/headerAvatars/playlistList1.jpg" alt />
                                <div className="explore_boxTitle-text">
                                    <p>NGHE LẠI</p>
                                    <h3>Xone Radio</h3>
                                </div>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>XONE with Stars</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>BREAKFAST XONE</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>DRIVEXONE
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>K-Pop Newbie</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            XONE REWIND</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <img src="./img/tabRadio/specialPlaylists/headerAvatars/playlistList2.jpg" alt />
                                <div className="explore_boxTitle-text">
                                    <p>PODCAST</p>
                                    <h3>Vietcetera
                                    </h3>
                                </div>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist1.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Have A Sip</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist2.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Vietnam Innovators</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist3.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Bít Tất
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist4.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            M.A.D</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist5.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Tóm Lại Là</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <img src="./img/tabRadio/specialPlaylists/headerAvatars/playlistList3.jpg" alt />
                                <div className="explore_boxTitle-text">
                                    <p>NGHE LẠI</p>
                                    <h3>
                                        On Air
                                    </h3>
                                </div>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist1.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Nhạc Mới Mỗi Ngày</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist2.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Chạm x Sao</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist3.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Chạm x Bạn
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Khám Phá Podcast</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist1.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>the finding audio</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist2.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Oddly Normal</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist3.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Amateur Psychology - Tay mơ học đời bằng
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist4.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Hà Nội FM</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist5.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Ghi-đông Radio</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist6.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Trạm Radio</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist7.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Chàng-Ngốc-Già</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist8.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Lam's Story
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist9.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Luyện Nghe Tiếng Anh Hàng Ngày - Ms Thuỷ</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist10.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Nằm nghe đọc truyện - Hathaya Audio</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* radio items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist11.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Cạn Ly</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist12.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Nghe Lỏm</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist13.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>Tóm Tắt Sách Cùng Tanya
                                        </p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabRadio/normalPlaylists/playlistList1/playlist14.jpg" alt />
                                        <div className="explore_item-boxIcon">
                                            <div className="explore_item-icon btn_love">
                                                <i className="bi bi-heart" />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                            <div className="explore_item-icon">
                                                <i className="bi bi-three-dots" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_item-title">
                                        <p>
                                            Career Success | Take Away Series</p>
                                    </div>
                                    <div className="explore_item-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default Radio