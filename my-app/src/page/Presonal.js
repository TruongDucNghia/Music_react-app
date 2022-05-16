import React, { useEffect } from 'react'
import Tab1 from '../components/menuPresonal/tab1'
import Tab2 from '../components/menuPresonal/tab2'
import Tab3 from '../components/menuPresonal/tab3'
import Tab4 from '../components/menuPresonal/tab4'
import Tab5 from '../components/menuPresonal/tab5'
import Tab6 from '../components/menuPresonal/tab6'

const Presonal = () => {
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
                    if (scrollHeight === 0) {
                        header.classList.remove('active')
                    }
                })
            })
        }
        handlerHeader()
        // handler active tab presonal
        function handlerTabPresonal() {
            const tabPresonal = document.querySelectorAll('.presonal_tab-content')
            const tabMenu = document.querySelectorAll('.presonal_menu-btnItem')
            tabMenu.forEach((item, index) => {
                item.addEventListener('click', () => {
                    document.querySelector('.presonal_tab-content.active').classList.remove('active')
                    document.querySelector('.presonal_menu-btnItem.active').classList.remove('active')

                    item.classList.add('active')
                    tabPresonal[index].classList.add('active')
                })
            })
        }
        handlerTabPresonal()
        let imgsIndex = 2
        // handler slider tab1
        function handerSliderTab1() {
            const sliderImg = document.querySelectorAll('.presonal_item1-slider--boxImg')
            const slideImgFirst = document.querySelector('.presonal_item1-slider--boxImg.first')
            const slideImgSecond = document.querySelector('.presonal_item1-slider--boxImg.second')
            const slideImgThird = sliderImg[imgsIndex]
            const slideImgFourth = sliderImg[imgsIndex === sliderImg.length - 1 ? 0 : imgsIndex + 1]

            imgsIndex++;
            if (imgsIndex >= sliderImg.length) {
                imgsIndex = 0
            }
            slideImgFourth.classList.replace('fourth', 'third')
            slideImgThird.classList.replace('third', 'second')
            slideImgSecond?.classList?.replace('second', 'first')
            slideImgFirst?.classList?.replace('first', 'fourth')
            setTimeout(handerSliderTab1, 2000)

        }
        handerSliderTab1()
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
                <div className="app_content-presonal">
                    <section className="app_presonal-container">
                        <div className="presonal_header-content">
                            <div className="presonal_content-infor">
                                <div className="presonal_infor-boxImg">
                                    <img src="./img/avatar/logo.jpg" alt />
                                </div>
                                <p>Trần Hồng Nhung</p>
                            </div>
                            <div className="presonal_content-vjp">
                                <button>MUA VIP NGAY</button>
                                <button>NHẬP CODE VIP</button>
                                <button className="logoutBtn">
                                    <i className="bi bi-three-dots" />
                                    <div className="logout">
                                        <i className="bi bi-box-arrow-right" />
                                        <p>Đăng xuất</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="presonal_menu-all">
                            <div className="presonal_menu-items">
                                <button className="presonal_menu-btnItem active">TỔNG QUAN</button>
                                <button className="presonal_menu-btnItem">BÀI HÁT</button>
                                <button className="presonal_menu-btnItem">PLAYLIST</button>
                                <button className="presonal_menu-btnItem">ALBUM</button>
                                <button className="presonal_menu-btnItem">MV</button>
                                <button className="presonal_menu-btnItem">NGHỆ SĨ</button>
                                <button className="presonal_menu-btnItem">TẢI LÊN</button>
                            </div>
                        </div>
                        <div className="presonal_tab-container">
                            {/* tab 1 */}
                            <div className="presonal_tab-content active">
                                <Tab1/>
                            </div>
                            {/* tab 2 */}
                            <div className="presonal_tab-content">
                                <Tab2/>
                            </div>
                            {/* tab3 */}
                            <div className="presonal_tab-content">
                                <Tab3/>
                            </div>
                            {/* tab4 */}
                            <div className="presonal_tab-content">
                                <Tab4/>
                            </div>
                            {/* tab5 */}
                            <div className="presonal_tab-content">
                                <Tab5/>
                            </div>
                            {/* tab6 */}
                            <div className="presonal_tab-content">
                                <Tab6/>
                            </div>
                            {/* tab7 */}
                            <div className="presonal_tab-content">
                                <div className="presonal_boxItems-all">
                                    <div className="explore_boxItems-title">
                                        <h3>Danh Sách Tải Lên </h3>
                                    </div>
                                    <div className="presonal_boxItem-tab7">
                                        <div className="no-content-image">
                                            <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.3.18/static/media/music-icon.cfa4aa91.svg" alt />
                                        </div>
                                        <p>Không có bài hát tải lên</p>
                                    </div>
                                </div>
                            </div>
                        </div></section>
                </div>
            </div>
        </div>

    )
}

export default Presonal