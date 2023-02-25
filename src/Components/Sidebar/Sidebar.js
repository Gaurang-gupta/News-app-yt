import React from 'react'
import "./Sidebar.css"
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineUnorderedList,
    AiOutlineMail
} from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md"
function Sidebar() {
    return (
        <aside className='sidebar'>
            <h1 className='sidebar__heading'>NEWS</h1>
            <ul className="sidebar__list">
                <li className='sidebar__listItem'>
                    <AiOutlineHome className="sidebar__icon" />
                    Home
                </li>
                <li className='sidebar__listItem'>
                    <AiOutlineSearch className="sidebar__icon" />
                    Explore</li>
                <li className='sidebar__listItem'>
                    <BsBookmark className="sidebar__icon" />
                    Saved
                </li>
                <li className='sidebar__listItem'>
                    <AiOutlineUnorderedList className="sidebar__icon" />
                    Subscriptions
                </li>
                <li className='sidebar__listItem'>
                    <AiOutlineMail className="sidebar__icon" />
                    Messages
                </li>
                <li className='sidebar__listItem'>
                    <MdOutlineSettings className="sidebar__icon" />
                    Settings
                </li>
                <li className='sidebar__listItem sidebar__logout'>
                    <MdOutlineLogout className="sidebar__icon" />
                    Logout</li>
            </ul>
            <hr className='sidebar__rule' />
        </aside>
    )
}

export default Sidebar