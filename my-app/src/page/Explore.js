import React, { useEffect } from 'react'

const Explore = () => {
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
        // handler slider album
        function handlerSlideAlbum() {
            const AlbumContainer = document.querySelectorAll('.slider_album')
            const nxtBtn = document.querySelectorAll('.slider_right')
            const preBtn = document.querySelectorAll('.slider_left')
            AlbumContainer.forEach((item, i) => {
                nxtBtn[i].addEventListener('click', () => {
                    item.scrollLeft += item.clientWidth
                })
                preBtn[i].addEventListener('click', () => {
                    item.scrollLeft -= item.clientWidth
                })
                item.addEventListener('scroll', () => {
                    const scrollLeft = Math.ceil(item.scrollLeft)
                    const maxScrollLeft = Math.ceil(item.scrollWidth - item.clientWidth)
                    if (scrollLeft === 0) {
                        preBtn[i].classList.add('active')
                    } else if (scrollLeft >= maxScrollLeft) {
                        nxtBtn[i].classList.add('active')
                    } else {
                        preBtn[i].classList.remove('active')
                        nxtBtn[i].classList.remove('active')
                    }
                })
            })
        }
        handlerSlideAlbum()
    }, [])
    return (
        <div className="app_container active">
            <div className="app_container-content">
                <div className="app_content-explore">
                    <section className="app_explore-container">
                        {/* slider */}
                        <div className="explore_boxItems-fist">
                            <div className="explore_sliderBox slider_album autoSlider">
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide1.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide4.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide3.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide4.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide5.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide6.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide7.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_slider-item">
                                    <div className="explore_slider-boxImg">
                                        <div className="explore_slider-img">
                                            <img src="./img/tabExplore/slides/slide8.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="explore_slider-boxBtn prev active slider_left">
                                <i className="bi bi-chevron-left" />
                            </button>
                            <button className="explore_slider-boxBtn next slider_right">
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Có Thể Bạn Muốn Nghe</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList1/playlist1.jpg" alt />
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
                                        <p>Mở Đầu Hoàn Hảo</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">AMEE,</a>
                                        <a href="#">ERIK,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList1/playlist2.jpg" alt />
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
                                        <p>V-Pop: The A-List</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Bích Phương,</a>
                                        <a href="#">Hoàng Thùy Linh,</a>
                                        <a href="#">ERIK</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList1/playlist3.jpg" alt />
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
                                        <p>Tỏ Tình Nhẹ Nhàng Thôi</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Quân A.P,</a>
                                        <a href="#">Changg,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList1/playlist4.jpg" alt />
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
                                        <p>Nhạc Trẻ Gây Nghiện</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">AMEE,</a>
                                        <a href="#">Quân A.P,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList1/playlist5.jpg" alt />
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
                                        <p>HIT-MAKER: Nổi Bật</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">LyLy,</a>
                                        <a href="#">RIN9,</a>
                                        <a href="#">Vương Anh Tú</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Lựa Chọn Hôm Nay</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList2/playlist1.jpg" alt />
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
                                        <p>Đóa Hồng Nhạc Việt</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những đóa hồng tạo nên dấu ấn trên thị trường âm nhạc Việt hiện
                                            nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList2/playlist2.jpg" alt />
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
                                        <p>V-Pop Rising</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những tài năng Gen Z của V-Pop đáng nghe nhất hôm nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList2/playlist3.jpg" alt />
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
                                        <p>Everyday EDM</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Khởi động mỗi ngày với những ca khúc EDM sôi động</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList2/playlist4.jpg" alt />
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
                                        <a href="#">Những hạt giống tiềm năng của K-Pop thế hệ mới</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList2/playlist5.jpg" alt />
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
                                        <p>Anime Now</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Nhạc Anime hot nhất ở thời điểm hiện tại có ngay tại đây</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>XONE's CORNER</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList3/playlist1.jpg" alt />
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
                                        <p>Đóa Hồng Nhạc Việt</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những đóa hồng tạo nên dấu ấn trên thị trường âm nhạc Việt hiện
                                            nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList3/playlist2.jpg" alt />
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
                                        <p>V-Pop Rising</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những tài năng Gen Z của V-Pop đáng nghe nhất hôm nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList3/playlist3.jpg" alt />
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
                                        <p>Everyday EDM</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Khởi động mỗi ngày với những ca khúc EDM sôi động</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList3/playlist4.jpg" alt />
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
                                        <a href="#">Những hạt giống tiềm năng của K-Pop thế hệ mới</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList3/playlist5.jpg" alt />
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
                                        <p>Anime Now</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Nhạc Anime hot nhất ở thời điểm hiện tại có ngay tại đây</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <img src="./img/tabExplore/specialPlaylists/headerAvatars/playlistList1.jpg" alt />
                                <div className="explore_boxTitle-text">
                                    <p>VÌ BẠN ĐÃ NGHE</p>
                                    <h3>Nguyễn Trọng Tài</h3>
                                </div>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg" alt />
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
                                        <p>Những Bài Hát Hay Nhất Của Nguyễn Trọng Tài</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những đóa hồng</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg" alt />
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
                                        <p>Cớ Sao Em Buồn (Single)</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những tài năng Gen Z</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg" alt />
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
                                        <p>Ngừng Mơ (Single)</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Khởi động mỗi ngày </a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg" alt />
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
                                        <a href="#">Những hạt giống tiềm năng </a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg" alt />
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
                                        <p>Cớ Sao Em Buồn (Remixes EP)</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Nhạc Anime hot nhấty</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Mixtape Yêu Thích</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList4/playlist1.jfif" alt />
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
                                    <div className="explore_item-text">
                                        <a href="#">AMEE,</a>
                                        <a href="#">ERIK,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList4/playlist2.jfif" alt />
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
                                    <div className="explore_item-text">
                                        <a href="#">Bích Phương,</a>
                                        <a href="#">Hoàng Thùy Linh,</a>
                                        <a href="#">ERIK</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList4/playlist3.jfif" alt />
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
                                    <div className="explore_item-text">
                                        <a href="#">Quân A.P,</a>
                                        <a href="#">Changg,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList4/playlist4.jfif" alt />
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
                                    <div className="explore_item-text">
                                        <a href="#">AMEE,</a>
                                        <a href="#">Quân A.P,</a>
                                        <a href="#">Hoàng Duyên</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList4/playlist5.jfif" alt />
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
                                    <div className="explore_item-text">
                                        <a href="#">LyLy,</a>
                                        <a href="#">RIN9,</a>
                                        <a href="#">Vương Anh Tú</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Nhạc mới mỗi ngày</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList5/playlist1.jpg" alt />
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
                                        <p>Đóa Hồng Nhạc Việt</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những đóa hồng tạo nên dấu ấn trên thị trường âm nhạc Việt hiện
                                            nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList5/playlist2.jpg" alt />
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
                                        <p>V-Pop Rising</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Những tài năng Gen Z của V-Pop đáng nghe nhất hôm nay</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList5/playlist3.jpg" alt />
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
                                        <p>Everyday EDM</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Khởi động mỗi ngày với những ca khúc EDM sôi động</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList5/playlist4.jpg" alt />
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
                                        <a href="#">Những hạt giống tiềm năng của K-Pop thế hệ mới</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList5/playlist5.jpg" alt />
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
                                        <p>Anime Now</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Nhạc Anime hot nhất ở thời điểm hiện tại có ngay tại đây</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore label */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxLabel-all">
                                <div className="explore_label-item">
                                    <img src="./img/tabExplore/labels/label1.jpg" alt />
                                </div>
                                <div className="explore_label-item">
                                    <img src="./img/tabExplore/labels/label2.jpg" alt />
                                </div>
                                <div className="explore_label-item">
                                    <img src="./img/tabExplore/labels/label3.jpg" alt />
                                </div>
                            </div>
                        </div>
                        {/* explore singer */}
                        <div className="explore_boxItems-all mokup_btn">
                            <div className="explore_boxSinger-all slider_album autoSlider">
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer1.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer2.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer3.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer4.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer5.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer6.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer7.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer8.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer9.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer10.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer11.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer12.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer13.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer14.png" alt />
                                    </div>
                                </div>
                                <div className="explore_singer-item">
                                    <div className="explore_singer-boxImg">
                                        <img src="./img/tabExplore/singerSlides/singer15.png" alt />
                                    </div>
                                </div>
                            </div>
                            <div className="explore_display-boxBtn">
                                <button className="active slider_left">
                                    <i className="bi bi-chevron-left" />
                                </button>
                                <button className="slider_right">
                                    <i className="bi bi-chevron-right" />
                                </button>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Top 100</h3>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList6/playlist1.jpg" alt />
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
                                        <p>Top 100 Nhạc Dance Việt Nam Hay Nhất</p>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList6/playlist2.jpg" alt />
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
                                        <p>Top 100 Bài Hát Nhạc Trẻ Hay Nhất</p>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList6/playlist3.jpg" alt />
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
                                        <p>Top 100 Pop Âu Mỹ Hay Nhất</p>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList6/playlist4.jpg" alt />
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
                                        <p>Top 100 Nhạc Electronic/Dance Âu</p>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList6/playlist5.jpg" alt />
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
                                        <p>Top 100 Nhạc Hàn Quốc Hay Nhất
                                            Sự Kiện</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore envent */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Sự Kiện</h3>
                            </div>
                            <div className="explore_boxEvent-items">
                                <div className="explore_boxEvent-event">
                                    <div className="explore_boxEvent-top">
                                        <div className="explore_boxEvent-img">
                                            <img src="./img/tabExplore/events/event1.jpg" alt />
                                        </div>
                                        <div className="explore_boxEvent-contentText">
                                            <div className="event">
                                                <p>
                                                    SỰ KIỆN</p>
                                            </div>
                                            <div className="event_title">
                                                <p>Sinh Nhật Sao x B Ray
                                                </p>
                                            </div>
                                            <div className="event_text">
                                                <p>00:00 Thứ Hai, 11 tháng 10</p>
                                            </div>
                                        </div>
                                        <div className="blur" />
                                    </div>
                                    <div className="explore_boxEvent-bottom">
                                        <div className="explore_boxEvent-left">
                                            <div className="explore_boxEvent-leftTitle">
                                                <p>Lượt chúc mừng</p>
                                            </div>
                                            <div className="explore_boxEvent-avatars">
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer1/fan1.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer1/fan2.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer1/fan3.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer1/fan4.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer1/fan5.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <p>+1K</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore_boxEvent-right">
                                            <button className="explore_boxEvent-rightBtn">
                                                MỞ RADIO
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxEvent-event">
                                    <div className="explore_boxEvent-top">
                                        <div className="explore_boxEvent-img">
                                            <img src="./img/tabExplore/events/event2.jpg" alt />
                                        </div>
                                        <div className="explore_boxEvent-contentText">
                                            <div className="event">
                                                <p>
                                                    SỰ KIỆN</p>
                                            </div>
                                            <div className="event_title">
                                                <p>Sinh Nhật Sao x ERIK
                                                </p>
                                            </div>
                                            <div className="event_text">
                                                <p>00:00 Thứ Tư, 13 tháng 10</p>
                                            </div>
                                        </div>
                                        <div className="blur" />
                                    </div>
                                    <div className="explore_boxEvent-bottom">
                                        <div className="explore_boxEvent-left">
                                            <div className="explore_boxEvent-leftTitle">
                                                <p>Lượt chúc mừng</p>
                                            </div>
                                            <div className="explore_boxEvent-avatars">
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer2/fan1.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer2/fan2.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer2/fan3.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer2/fan4.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer2/fan5.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <p>+350K</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore_boxEvent-right">
                                            <button className="explore_boxEvent-rightBtn">
                                                CHÚC MỪNG
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxEvent-event">
                                    <div className="explore_boxEvent-top">
                                        <div className="explore_boxEvent-img">
                                            <img src="./img/tabExplore/events/event3.jpg" alt />
                                        </div>
                                        <div className="explore_boxEvent-contentText">
                                            <div className="event">
                                                <p>
                                                    SỰ KIỆN</p>
                                            </div>
                                            <div className="event_title">
                                                <p>Sinh Nhật Sao x Đông Nhi
                                                </p>
                                            </div>
                                            <div className="event_text">
                                                <p>00:00 Thứ Tư, 13 tháng 10</p>
                                            </div>
                                        </div>
                                        <div className="blur" />
                                    </div>
                                    <div className="explore_boxEvent-bottom">
                                        <div className="explore_boxEvent-left">
                                            <div className="explore_boxEvent-leftTitle">
                                                <p>Lượt chúc mừng</p>
                                            </div>
                                            <div className="explore_boxEvent-avatars">
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer3/fan1.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer3/fan2.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer3/fan3.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer3/fan4.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <img src="./img/tabExplore/events/fans/singer3/fan5.jpg" alt />
                                                </div>
                                                <div className="explore_boxEvent-avatarItem">
                                                    <p>+1.2K</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore_boxEvent-right">
                                            <button className="explore_boxEvent-rightBtn">
                                                MỞ RADIO
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <img src="./img/tabExplore/specialPlaylists/headerAvatars/playlistList2.jpg" alt />
                                <div className="explore_boxTitle-text">
                                    <p>BẠN ĐÃ NGHE NHIỀU</p>
                                    <h3>Hip-Hop</h3>
                                </div>
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist1.jpg" alt />
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
                                        <p>Today's Rap Hits</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href>Drake,</a>
                                        <a href>Kanye West,</a>
                                        <a href="#">Lil Nas X</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist2.jpg" alt />
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
                                        <p>Rap Việt Cũ Mà Hay</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href>Rhymastic,</a>
                                        <a href>LK,</a>
                                        <a href="#">Yanbi</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist3.jpg" alt />
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
                                            Rap Việt Cực Chất</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href>16 Typh,</a>
                                        <a href> Tage,</a>
                                        <a href="#"> ICD</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist4.jpg" alt />
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
                                        <p>Rap Việt Kết Hợp Cực C</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href>16 Typh,</a>
                                        <a href> Tage,</a>
                                        <a href="#"> ICD</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist5.jpg" alt />
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
                                        <p>Rap Việt Thả Thính Hay </p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href>16 Typh,</a>
                                        <a href> Tage,</a>
                                        <a href="#"> ICD</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore trening */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Trening</h3>
                                <div className="display_btn-slider">
                                    <button className="slider_left active">
                                        <i className="bi bi-chevron-left" />
                                    </button>
                                    <button className="slider_right">
                                        <i className="bi bi-chevron-right" />
                                    </button>
                                </div>
                            </div>
                            <div className="explore_boxTrening-items slider_album autoSlider">
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist1.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#1</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist2.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#2</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist3.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#3</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist4.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#4</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist5.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#5</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <div className="explore_boxImg">
                                            <div className="explore_img">
                                                <img src="./img/tabExplore/newPlaylists/newPlaylist6.jpg" alt />
                                            </div>
                                            <div className="explore_item-icon active">
                                                <i className="bi bi-play-fill" />
                                            </div>
                                        </div>
                                        <div className="explore_boxText">
                                            <div className="explore_boxText-top">
                                                <h3>Bao Lâu Ta Lại Yêu Một Người</h3>
                                                <p>Bích Phương</p>
                                            </div>
                                            <div className="explore_boxText-bottom">
                                                <h3>#6</h3>
                                                <p>02.10.2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxTrening-item">
                                    <div className="explore_trening-content">
                                        <p>XEM TẤT CẢ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore items */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                            </div>
                            <div className="explore_boxItems-items">
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList7/playlist1.jpg" alt />
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
                                        <p>Ta Thương Người</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Huy Vạc</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList7/playlist2.jpg" alt />
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
                                        <p>Ôm Trọn Nỗi Đau</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Tino,</a>
                                        <a href="#"> Lưu Hiền Trinh</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList7/playlist3.jpg" alt />
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
                                        <p>Bao Lâu Ta Lại Yêu</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Doãn Hiếu</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList7/playlist4.jpg" alt />
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
                                        <p>Vâng anh đi đi</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Bích Phương</a>
                                    </div>
                                </div>
                                <div className="explore_boxItems-item">
                                    <div className="explore_item-boxImg">
                                        <img src="./img/tabExplore/normalPlaylists/playlistList7/playlist5.jpg" alt />
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
                                        <p>Đêm Mưa (Single)</p>
                                    </div>
                                    <div className="explore_item-text">
                                        <a href="#">Duy Ngọc</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore singer love */}
                        <div className="explore_boxItems-all">
                            <div className="explore_boxItems-title">
                                <h3>Nghệ Sĩ Yêu Thích</h3>
                            </div>
                            <div className="explore_boxLove-all">
                                <div className="explore_boxLove-singer">
                                    <div className="explore_singerLove-img">
                                        <img src="./img/tabExplore/favArtists/artist1.jpg" alt />
                                    </div>
                                    <div className="explore_singerLove-content">
                                        <p>TỪ THƯ VIỆN CỦA BẠN</p>
                                        <h3>Chi Dân</h3>
                                        <div className="explore_singer-fav">
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist1/song1.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist1/song2.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist1/song3.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist1/song4.jpg" alt />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_singer-icon">
                                        <div className="explore_item-icon active">
                                            <i className="bi bi-play-fill" />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxLove-singer">
                                    <div className="explore_singerLove-img">
                                        <img src="./img/tabExplore/favArtists/artist2.jpg" alt />
                                    </div>
                                    <div className="explore_singerLove-content">
                                        <p>VÌ BẠN NGHE NHIỀU</p>
                                        <h3>Binz</h3>
                                        <div className="explore_singer-fav">
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist2/song1.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist2/song2.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist2/song3.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist2/song4.jpg" alt />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_singer-icon">
                                        <div className="explore_item-icon active">
                                            <i className="bi bi-play-fill" />
                                        </div>
                                    </div>
                                </div>
                                <div className="explore_boxLove-singer">
                                    <div className="explore_singerLove-img">
                                        <img src="./img/tabExplore/favArtists/artist3.jpg" alt />
                                    </div>
                                    <div className="explore_singerLove-content">
                                        <p>BẠN NGHE GẦN ĐÂY</p>
                                        <h3>Sơn Tùng M-TP</h3>
                                        <div className="explore_singer-fav">
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist3/song1.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist3/song2.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist3/song3.jpg" alt />
                                            </div>
                                            <div className="explore_singer-item">
                                                <img src="./img/tabExplore/favArtists/artistSongs/artist3/song4.jpg" alt />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="explore_singer-icon">
                                        <div className="explore_item-icon active">
                                            <i className="bi bi-play-fill" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* explore partner */}
                        <div className="explore_boxItems-all">
                            <div className="explore_partner-title">
                                <p>ĐỐI TÁC ÂM NHẠC</p>
                            </div>
                            <div className="explore_partner-all">
                                <div className='explore_partner-row'>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand1.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand2.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand3.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand4.png" alt />
                                        </div>
                                    </div>
                                </div>

                                <div className='explore_partner-row'>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand5.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand6.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand7.png" alt />
                                        </div>
                                    </div>
                                    <div className="explore_partner-item">
                                        <div className="explore_partner-img">
                                            <img src="./img/tabExplore/brands/brand8.png" alt />
                                        </div>
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

export default Explore