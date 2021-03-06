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
                                                <p>Ch??a Bao Gi??? Em Qu??n</p>
                                                <a href>H????ng Ly</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Y??u L?? C?????i</p>
                                                <a href>Ph??t H???,</a>
                                                <a href>X2X</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Em L?? Con Thuy???n C?? ????n</p>
                                                <a href>Th??i H???c</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Khu?? M???c Lang</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Y??u L?? C?????i (Remix)</p>
                                                <a href>Ph??t H???,</a>
                                                <a href>DinhLong</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                    Thay L??ng</p>
                                                <a href>DIMZ,</a>
                                                <a href>NH4T</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>R???i T???i Lu??n</p>
                                                <a href>Nal</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>C?? M???t T??nh Y??u G???i L?? Chia Tay</p>
                                                <a href>T??ng Ph??c,</a>
                                                <a href>Tr????ng Th???o Nhi</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                    C?????i Lu??n ???????c Kh??ng?</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Bao L??u Ta L???i Y??u M???t Ng?????i</p>
                                                <a href>H????ng Ly</a>
                                                <a href>Do??n Hi???u</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Th????ng Nhau T???i B???n</p>
                                                <a href>Nal</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>????ng Phai M??? D??ng Ai</p>
                                                <a href>DatKaa</a>
                                                <a href>, QT Beatz</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Nh???n R???ng Anh Nh??? Em
                                                </p>
                                                <a href>????nh D??ng</a>
                                                <a href>, ACV</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                    D???u D??ng Em ?????n</p>
                                                <a href>ERIK</a>
                                                <a href>, NinjaZ</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Em H??t Ai Nghe</p>
                                                <a href>Orange</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>V???y L?? Ta M???t Nhau</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>v??ng anh ??i ??i (liu riu version)</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                    N???u L??c Tr?????c Em ?????ng T???i</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>C?? ????n D??nh Cho Ai</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Y??u M?? Ch??a D??m N??i</p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>????? T???c 2
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Chi???u ?????ng Qu??
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>T??p L???u V??ng
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Sai C??ch Y??u
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>c?? h???n v???i thanh xu??8
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Em N??o C?? T???i
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Nh???n T???i Kho???ng Tr???i Em
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                                <p>Em H???a Th??? N??o
                                                </p>
                                                <a href>H????ng Ly</a>
                                                <a href>, Jombie</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="charts_items-center mobile-none">
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
                                    Thu g???n
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