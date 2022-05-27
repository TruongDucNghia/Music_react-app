import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuMobile = () => {
    return (
        <div className='app_menu-mobile'>
            <div className='menu_mobile-allItem'>
                <ul className='menu_mobile-ul'>
                    <NavLink to={`/`}>
                        <li className='menu_mobile-li'>
                            <i class="bi bi-music-player"></i>
                            <span>Cá Nhân</span>
                        </li>
                    </NavLink>
                    <NavLink to={`/explore`}>
                        <li className='menu_mobile-li'>
                            <i class="bi bi-vinyl"></i>
                            <span>Khám Phá</span>
                        </li>
                    </NavLink>
                    <NavLink to={`/charts`}>
                        <li className='menu_mobile-li'>
                            <i class="bi bi-music-note-list"></i>
                            <span>#ZingChart</span>
                        </li>
                    </NavLink>
                    <NavLink to={`/radio`}>
                        <li className='menu_mobile-li'>
                            <i class="bi bi-soundwave"></i>
                            <span>Radio</span>
                        </li>
                    </NavLink>
                    <NavLink to={`/following`}>
                        <li className='menu_mobile-li'>
                            <i class="bi bi-file-earmark-slides"></i>
                            <span>Theo Dõi</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile