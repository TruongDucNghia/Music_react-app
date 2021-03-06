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
                                <button className="following_menu-item active">VI???T NAM</button>
                                <button className="following_menu-item">US-UK</button>
                                <button className="following_menu-item">K-POP</button>
                                <button className="following_menu-item">T??u Kh???a</button>
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
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Hoa N??o Kh??ng Phai (Cover by JangMi)</p>
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
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>C??C EM ?????NG DI???N TR?????C M???T CH??? N???A - Ch??? ch??? vui ????a c??c em gi???i tr??
                                                    th??i =))</p>
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
                                                            <span>Y???n Tatoo</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Nh??n nh?? n??y ai bi???t ??anh ???? ????u</p>
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
                                                            <span>Quang H??ng MasterD</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>????</p>
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
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>S??? th???t th?? lu??n lu??n ????n gi???n nh??ng people make it complicated, n??n
                                                    l?? m??nh c??? enjoy c??i moment n??y</p>
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
                                                            <span>L??ng LD</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>T????m t???t v???y ???? ????? ??i mua c?? ph?? take away ch??? ch??a ???????c ng???i l???i
                                                    nghen????</p>
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
                                                            <span>S??n T??ng M-TP</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>Anh ??o??n t??n em l?? Google.
                                                    B???i v?? em c?? m???i th??? m?? anh ??ang t??m ki???m ??????</p>
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
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>L?????i tr???i l???ng l???ng
                                                    Ch???y ????u cho tho??t ????</p>
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
                                                            <span>Ninh D????ng Lan Ng???c</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>??? nh?? c?? photo Rio ch???p d?? s???a m???t ngh??? lu??n ???????????? ch???nh q??i ko ?????p
                                                    ???????c lu??n. Xin nh??? 500 anh em ch???nh d??m Ng???c t???m h??nh n??y sao m?? coa
                                                    th??? ?????p ??????c nh???</p>
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
                                                            <span>B??ch Ph????ng</span>
                                                            <p>&nbsp;&nbsp;???&nbsp;&nbsp;</p>
                                                            <span>Quan t??m</span>
                                                        </div>
                                                        <div className="following_header-timer">
                                                            <a href="#">14 th??ng 10 l??c 11:07</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="following_items-title">
                                                <p>T???i nay l???i liu riu 1 t?? nh?? ????</p>
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