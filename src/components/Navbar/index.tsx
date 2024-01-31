import { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default function Navbar(): ReactElement {
    const [Location, setLocation] = useState<boolean>(false)

    return (
        <div className="nav-bar">
            <Link className="Home Logo" to={'/'}>
                <img src="" alt="logo" />
            </Link>
            <div className="menu">
                <Link className="classElement" to={'/scoreboard'}>
                    Scoreboard
                </Link>
                <Link className="classElement" to={'/4Comp'}>
                    4 Comp
                </Link>
                <Link className="classElement" to={'/members'}>
                    Members
                </Link>
            </div>
            <div
                className="mobileMenu"
                onClick={() => {
                    setLocation(!Location)
                }}
            ></div>
        </div>
    )
}
