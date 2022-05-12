import React, { useEffect } from 'react'

const Charts = () => {
    useEffect(() =>{
        function handlerHeader(){
            const scroll = document.querySelectorAll('.app_container')
            const header = document.querySelector('.body_header')
        
            scroll.forEach(item =>{
                item.addEventListener('scroll', ()=>{
                    const scrollHeight = item.scrollTop;
                        if(scrollHeight > 10){
                            header.classList.add('active')
                        }
                        if(scrollHeight == 0){
                            header.classList.remove('active')
                        }
                })
            })
        }
        handlerHeader()
        function handlerExpand(){
            const btnExpand = document.querySelector('.charts_more-top button:first-child')
            const btnCollapse = document.querySelector('.charts_more-top button:last-child')
            const items = document.querySelectorAll('.charts_content-item')
            items.forEach((item, index) =>{
                if(index >= 10){
                    item.classList.add('active')
                }
            })
            btnExpand.addEventListener('click', () =>{
                items.forEach((item, index) =>{
                    if(index >= 10){
                        item.classList.remove('active')
                    }
                })
                btnCollapse.style.display = 'block'
                btnExpand.style.display = 'none'
            })
            btnCollapse.addEventListener('click', () =>{
                items.forEach((item, index) =>{
                    if(index >= 10){
                        item.classList.add('active')
                    }
                })
                btnCollapse.style.display = 'none'
                btnExpand.style.display = 'block'
            })
        }
        // -----------Call function-----------
        handlerExpand()
      }, [])
    return (
        <div className="app_container active">
            <div className="app_container-content">
                <div className="app_content-chars">
                    <section className="app_chars-container">
                        <div className="chars_header-title">
                            <h3>#zingchart</h3>
                            <div className="chars_header-icon">
                                <i className="bi bi-play-fill" />
                            </div>
                        </div>
                        <div className="charts_conatiner-content">
                            <div className="charts_content-all">
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>1</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song1.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Chưa Bao Giờ Em Quên</p>
                                                <a href>Hương Ly</a>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>2</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song2.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Yêu Là Cưới</p>
                                                <a href>Phát Hồ,</a>
                                                <a href>X2X</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>3:30</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>3</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song3.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Em Là Con Thuyền Cô Đơn</p>
                                                <a href>Thái Học</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>4:10</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>4</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song2.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Khuê Mộc Lang</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>5</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song5.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Yêu Là Cưới (Remix)</p>
                                                <a href>Phát Hồ,</a>
                                                <a href>DinhLong</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>4:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>6</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song6.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>
                                                    Thay Lòng</p>
                                                <a href>DIMZ,</a>
                                                <a href>NH4T</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>3:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>7</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song7.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Rồi Tới Luôn</p>
                                                <a href>Nal</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>6:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>8</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song8.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Có Một Tình Yêu Gọi Là Chia Tay</p>
                                                <a href>Tăng Phúc,</a>
                                                <a href>Trương Thảo Nhi</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>3:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>9</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song9.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>
                                                    Cưới Luôn Được Không?</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>10</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song2.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Bao Lâu Ta Lại Yêu Một Người</p>
                                                <a href>Hương Ly</a>
                                                <a href>Doãn Hiếu</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>1:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>11</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song11.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Thương Nhau Tới Bến</p>
                                                <a href>Nal</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>12</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song12.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Đông Phai Mờ Dáng Ai</p>
                                                <a href>DatKaa</a>
                                                <a href>, QT Beatz</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>3:20</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>13</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song13.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Nhắn Rằng Anh Nhớ Em
                                                </p>
                                                <a href>Đình Dũng</a>
                                                <a href>, ACV</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:50</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>14</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song14.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>
                                                    Dịu Dàng Em Đến</p>
                                                <a href>ERIK</a>
                                                <a href>, NinjaZ</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>3:10</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>15</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song15.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Em Hát Ai Nghe</p>
                                                <a href>Orange</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>16</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song16.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Vậy Là Ta Mất Nhau</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>17</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song17.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>vâng anh đi đi (liu riu version)</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>18</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song18.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>
                                                    Nếu Lúc Trước Em Đừng Tới</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>19</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song19.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Cô Đơn Dành Cho Ai</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>20</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song20.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>MONEY</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>21</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song21.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Yêu Mà Chưa Dám Nói</p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>22</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song22.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Độ Tộc 2
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>23</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song23.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Chiều Đồng Quê
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>24</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song24.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Túp Lều Vàng
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>25</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song25.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>LALISA
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>26</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song26.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Sai Cách Yêu
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>27</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song27.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>có hẹn với thanh xuâ8
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>28</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song28.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Em Nào Có Tội
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>29</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song29.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Nhắn Tới Khoảng Trời Em
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                                <div className="charts_content-item">
                                    <div className="charts_items-left">
                                        <div className="charts_items-number">
                                            <h2>30</h2>
                                        </div>
                                        <div className="charts_items-dash">
                                            <i className="bi bi-dash-lg" />
                                        </div>
                                        <div className="charts_items-content">
                                            <div className="charts_items-boxImg">
                                                <img src="./img/tabCharts/chartSongRanks/song30.jpg" alt />
                                                <div className="charts_items-iconPlays">
                                                    <i className="bi bi-play-fill" />
                                                </div>
                                            </div>
                                            <div className="charts_items-singer">
                                                <p>Em Hứa Thế Nào
                                                </p>
                                                <a href>Hương Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center">
                                        <div className="charts_items-timer">
                                            <p>2:40</p>
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
                            </div>
                            <div className="charts_more-top">
                                <button>
                                    Xem top 30
                                </button>
                                <button>
                                    Thu gọn
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Charts