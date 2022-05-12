import React, { useEffect } from 'react'

const Following = () => {
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
                <div className="app_content-following">
                    <section className="app_following-container">
                        <div className="following_header-content">
                            <div className="following_header-nav">
                                <button className="following_menu-item active">VIỆT NAM</button>
                                <button className="following_menu-item">US-UK</button>
                                <button className="following_menu-item">K-POP</button>
                                <button className="following_menu-item">Tàu Khựa</button>
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
                        {/* following container */}
                        <div className="following_container-content">
                            <div className="following_content-main">
                                <div className="following_main-rows">
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist1.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Jang Mi</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Hoa Nào Không Phai (Cover by JangMi)</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist1.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>712</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>712</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist2.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>BlackBi</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>CÁC EM ĐỪNG DIỄN TRƯỚC MẶT CHỊ NỮA - Chị chỉ vui đùa các em giải trí
                                                    thôi =))</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist2.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>90</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>41</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist3.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Yến Tatoo</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Nhìn như này ai biết đanh đá đâu</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist3.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>102</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>80</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist4.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Quang Hùng MasterD</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>😚</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist4.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>206</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>120</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist5.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Chi Pu</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Sự thật thì luôn luôn đơn giản nhưng people make it complicated, nên
                                                    là mình cứ enjoy cái moment này</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist5.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>340</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>240</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="following_main-rows">
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist6.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Lăng LD</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Tươm tất vậy đó để đi mua cà phê take away chứ chưa được ngồi lại
                                                    nghen😁</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist6.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>123</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist7.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Sơn Tùng M-TP</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Anh đoán tên em là Google.
                                                    Bởi vì em có mọi thứ mà anh đang tìm kiếm ❤️</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist7.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>856</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>672</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist8.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>JayKii</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Lưới trời lồng lộng
                                                    Chạy đâu cho thoát 😎</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist8.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>132</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>80</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist9.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Ninh Dương Lan Ngọc</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Ở nhà có photo Rio chụp dì sửa mệt nghỉ luôn 🤣🤣🤣 chỉnh qài ko đẹp
                                                    được luôn. Xin nhờ 500 anh em chỉnh dùm Ngọc tấm hình này sao mà coa
                                                    thể đẹp đươc nhỉ</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist9.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>236</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>120</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="following_rows-items">
                                        <div className="following_items-content">
                                            <div className="following_items-header">
                                                <div className="following_header-avatar">
                                                    <img src="./img/tabFollowing/storys/avatars/artist10.jpg" alt />
                                                </div>
                                                <div className="following_header-name">
                                                    <div className="following_name-singer">
                                                        <div className="following_name-folow">
                                                            <span>Bích Phương</span>
                                                            <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
                                                            <span>Quan tâm</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 tháng 10 lúc 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Tối nay lại liu riu 1 tí nhé 😘</p>
                                            </div>
                                            <div className="following_items-boxImg">
                                                <img src="./img/tabFollowing/storys/posts/artist10.jpg" alt />
                                            </div>
                                            <div className="following_items-boxIcon">
                                                <div className="following_items-icon">
                                                    <div className="following_icon btn_love">
                                                        <i className="btn-love icon--heart bi bi-heart" />
                                                        <span>349</span>
                                                    </div>
                                                </div>
                                                <div className="following_items-icon">
                                                    <div className="following_icon">
                                                        <i className="bi bi-chat-dots" />
                                                        <span>240</span>
                                                    </div>
                                                </div>
                                            </div>
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

export default Following