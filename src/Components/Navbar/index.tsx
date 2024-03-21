import { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import logo from '../../Global/YCBSKT.png'

export default function Navbar(): ReactElement {
    const [Location, setLocation] = useState<boolean>(false)

    return (
        <div className="nav-bar">
            <Link className="Home Logo logo-img" to={'/'}>
                
                <img src={logo} alt='logo' className='logo-img' />
            </Link>
            <div className="menu">
                <Link className="classElement" to={'/scoreboard'}>
                    Scoreboard
                </Link>
                <Link className="classElement" to={'/competition'}>
                    Competition
                </Link>
                <Link className="classElement" to={'/members'}>
                    Members
                </Link>
            </div>
        </div>
    )
}
