import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    useEffect(() =>{
        function handlerTabMenu(){
            const tab = document.querySelectorAll('.app_container')
            const menu = document.querySelectorAll('.app_sidebar-menu .menu_item')
            menu.forEach((btn, index) =>{
                btn.addEventListener('click', (e)=>{           
                    // e.preventDefault()
                    document.querySelector('.menu_item.active').classList.remove('active')
                    btn.classList.add('active')
                    tab[index].classList.add('active')
                    tab[index].scrollTop = 0
                })
            })
        }
        handlerTabMenu()
    }, [])
    return (
        <div className="app_sidebar mobi-none">
            <div className="app_sidebar-logo">
                <img className='mobile-none' src="img/logos/main-logo.svg" />
                <img className='logo-mobile' src="img/logos/small-logo.svg" />
            </div>
            <div className="app_sidebar-menu">
                <ul className="ul-menu1">
                    <li className="menu_item active"><NavLink to={`/`}>
                        <i className="bi bi-music-player" />
                        <span>Cá Nhân</span>
                    </NavLink></li>
                    <li className="menu_item"><NavLink to={`explore`}>
                        <i className="bi bi-vinyl" />
                        <span>Khám Phá</span>
                    </NavLink></li>
                    <li className="menu_item"><NavLink to={`charts`}>
                        <i className="bi bi-music-note-list" />
                        <span>#ZingChart</span>
                    </NavLink></li>
                    <li className="menu_item activeLive"><NavLink to={`radio`}>
                        <i className="bi bi-soundwave" />
                        <span>Radio</span>
                        <div className="live mobile-none">
                            <span>live</span>
                        </div>
                    </NavLink></li>
                    <li className="menu_item"><NavLink to={`following`}>
                        <i className="bi bi-file-earmark-slides" />
                        <span>Theo Dõi</span>
                    </NavLink></li>
                </ul>
            </div>
            <div className="ul-menu2">
                <ul className="ul-menu1">
                    <li className="menu_item"><a href>
                        <i className="bi bi-music-note-beamed" />
                        <span>Nhạc mới</span>
                    </a></li>
                    <li className="menu_item"><a href>
                        <i className="bi bi-slack" />
                        <span>Thể loại</span>
                    </a></li>
                    <li className="menu_item"><a href>
                        <i className="bi bi-star" />
                        <span>Top 100</span>
                    </a></li>
                    <li className="menu_item"><a href>
                        <i className="bi bi-camera-video" />
                        <span>MV</span>
                    </a></li>
                </ul>
                <div className="ul_menu2-saleBox mobile-none">
                    <div className="ul_menu2-sale">
                        <span>Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
                        <button>MUA VIP</button>
                    </div>
                </div>
                <ul className="ul-menu3">
                    <li className="ul-menu3-lib">
                        <span>THƯ VIỆN</span>
                        <i className="bi bi-pencil" />
                    </li>
                    <li className="menu3_lib-list">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <defs>
                                <linearGradient id="0783s0j89a" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3CA2FF" />
                                    <stop offset="100%" stopColor="#008FFF" />
                                </linearGradient>
                                <linearGradient id="prx3tly02b" x1="21.839%" x2="21.839%" y1="43.679%" y2="100%">
                                    <stop offset="0%" stopColor="#FFF" />
                                    <stop offset="100%" stopColor="#FFF" stopOpacity=".9" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <g>
                                    <g>
                                        <path fill="url(#0783s0j89a)" d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z" transform="translate(-21 -433) translate(21 433)" />
                                        <path fill="url(#prx3tly02b)" d="M3.995 9.479c-.245.48-.245 1.11-.245 2.371v3.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h9.3c1.26 0 1.89 0 2.372-.245.423-.216.767-.56.983-.983.245-.482.245-1.112.245-2.372v-3.3c0-1.26 0-1.89-.245-2.371-.216-.424-.56-.768-.983-.984-.482-.245-1.112-.245-2.372-.245h-9.3c-1.26 0-1.89 0-2.371.245-.424.216-.768.56-.984.984zm8.567.571l.06.004.068.015.057.02.017.008c.556.27 1.067.623 1.516 1.046.075.07.148.142.22.217.172.18.166.464-.014.636-.18.172-.464.167-.636-.013-.061-.063-.123-.125-.187-.185-.202-.19-.42-.365-.65-.521v3.442c0 1.025-.832 1.856-1.857 1.856S9.3 15.744 9.3 14.719c0-1.025.831-1.856 1.856-1.856.35 0 .677.096.957.264V10.5c0-.249.201-.45.45-.45z" transform="translate(-21 -433) translate(21 433)" />
                                        <path fill="#FFF" fillOpacity=".6" fillRule="nonzero" d="M7.5 5.25c0-.414.336-.75.75-.75h7.5c.414 0 .75.336.75.75h-9z" transform="translate(-21 -433) translate(21 433)" />
                                        <path fill="#FFF" fillOpacity=".9" fillRule="nonzero" d="M6 6.75c0-.414.336-.75.75-.75h10.5c.414 0 .75.336.75.75H6z" transform="translate(-21 -433) translate(21 433)" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>BÀI HÁT</span>
                    </li>
                    <li className="menu3_lib-list">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <defs>
                                <linearGradient id="ghd4ngt38a" x1="50%" x2="50%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#9FD465" />
                                    <stop offset="100%" stopColor="#70B129" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <g>
                                    <g>
                                        <path fill="url(#ghd4ngt38a)" d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z" transform="translate(-21 -467) translate(21 467)" />
                                        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 11.5h5m-5 3h5M6 17.5h12.5" transform="translate(-21 -467) translate(21 467)" />
                                        <path fill="#FFF" d="M10.786 4.025c-.053-.016-.11-.025-.167-.025-.316 0-.572.262-.572.585v4.782c-.532-.44-1.21-.704-1.948-.704C6.387 8.663 5 10.082 5 11.831 5 13.581 6.387 15 8.099 15c1.711 0 3.099-1.419 3.099-3.169 0-.074-.003-.147-.007-.22l.001-6.04c.534.336 1.033.728 1.49 1.169.114.109.225.22.334.337.218.233.58.24.808.017.228-.223.235-.593.017-.826-.123-.131-.247-.257-.375-.38-.766-.738-1.64-1.355-2.589-1.826l-.091-.037z" transform="translate(-21 -467) translate(21 467)" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>Playlist</span>
                    </li>
                    <li className="menu3_lib-list">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <defs>
                                <linearGradient id="v6mduhifwa" x1="50%" x2="50%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FFD677" />
                                    <stop offset="100%" stopColor="#F7AA45" />
                                </linearGradient>
                                <linearGradient id="dkfkk30hhb" x1="21.205%" x2="21.205%" y1="43.042%" y2="100.632%">
                                    <stop offset="0%" stopColor="#FFF" />
                                    <stop offset="100%" stopColor="#FFF" stopOpacity=".9" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                                <g>
                                    <g>
                                        <path fill="url(#v6mduhifwa)" d="M.516 7.143c.812-3.928 3.31-6.115 7.207-6.776 2.88-.489 5.762-.495 8.637.014 4.012.709 6.424 3.024 7.192 7.011.594 3.082.603 6.196-.009 9.274-.821 3.9-3.384 6.309-7.266 6.967-2.88.489-5.762.495-8.637-.014-4.012-.709-6.435-3.14-7.203-7.127-.624-3.102-.564-6.235.08-9.349z" transform="translate(-21 -569) translate(21 569)" />
                                        <path fill="url(#dkfkk30hhb)" d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75zm3.805 12.388c-.13.13-.301.195-.472.195-.17 0-.341-.065-.47-.195l-3.334-3.333c-.126-.125-.196-.294-.196-.472V8c0-.369.299-.667.667-.667.368 0 .667.298.667.667v4.057l3.138 3.138c.26.261.26.682 0 .943z" transform="translate(-21 -569) translate(21 569)" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>Gần đây</span>
                    </li>
                    <li className="ul-menu3-text"><span>Tháng 1</span></li>
                    <li className="ul-menu3-text"><span>Nhạc Quốc Tế</span></li>
                    <li className="ul-menu3-text"><span>Sky ơi</span></li>
                </ul>
            </div>
            <div className="ul_new--list mobile-none">
                <div className="ul_new-creatList">
                    <i className="bi bi-plus-lg" />
                    <span>Tạo playlist mới</span>
                </div>
            </div>
        </div>

    )
}

export default Sidebar