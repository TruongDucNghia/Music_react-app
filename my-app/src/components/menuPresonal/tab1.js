import React from 'react'
import PlayList from '../PlayList'

const Tab1 = () => {
    return (
        <>
            <section className="presonal_content-item1">
                <div className="presonal_item1-header">
                    <h3 className="presonal_item1-title">Bài Hát <i className="bi bi-chevron-right" />
                    </h3>
                    <div className="presonal_item1-right">
                        <button className="presonal_item1-btn">
                            <i className="bi bi-upload" />
                            TẢI LÊN
                        </button>
                        <button className="presonal_item1-btn">
                            <i className="bi bi-play-fill" />
                            PHÁT TẤT CẢ
                        </button>
                    </div>
                </div>
                <div className="presonal_item1-content">
                    {/* slider Tab1 */}
                    <div className="presonal_item1-slider">
                        <div className="presonal_item1-slider--content">
                            <div className="presonal_item1-slider--boxImg first">
                                <img src="./img/slides/slide1.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg second">
                                <img src="./img/slides/slide2.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg third">
                                <img src="./img/slides/slide3.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide4.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide5.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide6.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide7.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide8.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide9.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide10.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide11.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide12.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide13.jpg" alt />
                            </div>
                            <div className="presonal_item1-slider--boxImg fourth">
                                <img src="./img/slides/slide14.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="presonal_item1-playList">
                        <div className='presonal_item1-playList--allItem'>
                            <PlayList />
                        </div>
                    </div>
                </div>
            </section>
            <div className="explore_boxItems-all">
                <div className="explore_boxItems-title">
                    <h3>Playlist<i className="bi bi-chevron-right" /></h3>
                    <div className="display_btn-slider">
                        <button className="slider_left active">
                            <i className="bi bi-chevron-left" />
                        </button>
                        <button className="slider_right">
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
                <div className="explore_boxItems-items slider_album">
                    <div className="explore_boxItems-item">
                        <div className="presonal_boxItems-item1">
                            <i className="bi bi-plus-lg" />
                            <p>Tạo playlist mới</p>
                        </div>
                    </div>
                    <div className="explore_boxItems-item">
                        <div className="explore_item-boxImg">
                            <img src="./img/playlists/playlist1.jpg" alt />
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
                            <img src="./img/playlists/playlist2.jpg" alt />
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
                            <img src="./img/playlists/playlist3.jpg" alt />
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
                            <img src="./img/playlists/playlist4.jpg" alt />
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
                    <div className="explore_boxItems-item">
                        <div className="explore_item-boxImg">
                            <img src="./img/playlists/playlist5.jpg" alt />
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
                    <div className="explore_boxItems-item">
                        <div className="explore_item-boxImg">
                            <img src="./img/playlists/playlist6.jpg" alt />
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
                    <div className="explore_boxItems-item">
                        <div className="explore_item-boxImg">
                            <img src="./img/playlists/playlist10.jpg" alt />
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
                            <img src="./img/playlists/playlist11.jpg" alt />
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
                            <img src="./img/playlists/playlist12.jpg" alt />
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
                            <img src="./img/playlists/playlist13.jpg" alt />
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
                            <img src="./img/playlists/playlist14.jpg" alt />
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
                {/* explore items */}
                <div className="explore_boxItems-all">
                    <div className="explore_boxItems-title">
                        <h3>Album<i className="bi bi-chevron-right" /></h3>
                        <div className="display_btn-slider">
                            <button className="slider_left active">
                                <i className="bi bi-chevron-left" />
                            </button>
                            <button className="slider_right">
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    </div>
                    {/* slider */}
                    <div className="explore_boxItems-items slider_album">
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album1.jpg" alt />
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
                                <p>Golden Hour</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album2.jpg" alt />
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
                                    Boycold (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album3.jpg" alt />
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
                                <p>Red</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album4.jpg" alt />
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
                                    Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album5.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album4.jpg" alt />
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
                                    Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album5.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album7.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album9.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album10.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album11.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album13.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                        <div className="explore_boxItems-item">
                            <div className="explore_item-boxImg">
                                <img src="./img/albums/album12.jpg" alt />
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
                                <p>Querencia (Mini Album)</p>
                            </div>
                            <div className="explore_item-text">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="presonal_boxItems-all">
                    <div className="explore_boxItems-title">
                        <h3>MV<i className="bi bi-chevron-right" /></h3>
                        <div className="display_btn-slider">
                            <button className="slider_left active">
                                <i className="bi bi-chevron-left" />
                            </button>
                            <button className="slider_right">
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    </div>
                    <div className="presonal_boxItems-items slider_album">
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv1.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist1.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv2.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist2.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv3.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist3.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv4.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist4.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv5.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist5.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv6.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist6.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv7.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist7.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv8.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist8.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv9.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist9.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv10.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist10.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="presonal_boxItems-item">
                            <div className="presonal_boxImg-content">
                                <img src="./img/MVs/mv11.jpg" alt />
                                <div className="presonal_boxIcon-content">
                                    <div className="explore_item-icon active">
                                        <i className="bi bi-play-fill" />
                                    </div>
                                    <div className="presonal_boxIcon-close">
                                        <i className="bi bi-x-lg" />
                                    </div>
                                </div>
                                <div className="presonal_songer-timer">
                                    <p>03:40</p>
                                </div>
                            </div>
                            <div className="presonal_boxName-content">
                                <div className="presonal_boxName-avatar">
                                    <img src="./img/mvArtists/artist11.jpg" alt />
                                </div>
                                <div className="presonal_boxName-text">
                                    <p>Một Bước Yêu Vạn Dặm Đau</p>
                                    <span>
                                        <a href="#">Mr. Siro</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="presonal_boxItems-all">
                    <div className="explore_boxItems-title">
                        <h3>Nghệ Sĩ<i className="bi bi-chevron-right" /></h3>
                        <div className="display_btn-slider">
                            <button className="slider_left active">
                                <i className="bi bi-chevron-left" />
                            </button>
                            <button className="slider_right">
                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    </div>
                    <div className="presonal_boxSinger-all slider_album">
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist1.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Binz <i className="bi bi-star-fill" /></span>
                                <p>73K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist2.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Phương Ly <i className="bi bi-star-fill" /></span>
                                <p>70K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist3.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>AMEE <i className="bi bi-star-fill" /></span>
                                <p>13K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist4.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>MCK <i className="bi bi-star-fill" /></span>
                                <p>43K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist5.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Sơn Tùng M-TP <i className="bi bi-star-fill" /></span>
                                <p>173K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist6.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Mr. Siro  <i className="bi bi-star-fill" /></span>
                                <p>73K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist7.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Han Sara <i className="bi bi-star-fill" /></span>
                                <p>70K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist8.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Bích Phương <i className="bi bi-star-fill" /></span>
                                <p>13K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist9.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Soobin <i className="bi bi-star-fill" /></span>
                                <p>43K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                        <div className="presonal_boxSinger-item">
                            <div className="presonal_boxSinger-img">
                                <img src="./img/artists/artist10.jpg" alt />
                                <div className="explore_item-icon active">
                                    <i className="bi bi-play-fill" />
                                </div>
                            </div>
                            <div className="presonal_boxSinger-infor">
                                <span>Chi Dân <i className="bi bi-star-fill" /></span>
                                <p>173K quan tâm</p>
                                <button><i className="bi bi-check2" /> ĐÃ QUAN TÂM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab1