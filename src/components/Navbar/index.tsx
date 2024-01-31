import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import './index.scss'

export default function Navbar(): ReactElement{

    const [Location, setLocation]= useState<boolean>(false);

    return (
        <div className="nav-bar">

            <Link className="Home Logo" to={"/ycbskt/"}>
                <img src="" alt="logo" />
            </Link>
            <div className="menu">
                <Link className="classElement" to={"/ycbskt/scoreboard"}>Scoreboard</Link>
                <Link className="classElement" to={"/ycbskt/4Comp"}>4 Comp</Link>
                <Link className="classElement" to={"/ycbskt/members"}>Members</Link>
            </div>
            <div className="mobileMenu" onClick={()=>{setLocation(!Location);}}></div>
        </div>
    );
}