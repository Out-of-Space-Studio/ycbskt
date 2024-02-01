import { useState, ReactElement } from 'react'

import './index.css'
import Player from '../Player.js'

export default function Comps(): ReactElement {
    return (
        <div className="scoreboard">
            4 Comps
            <Player />
        </div>
    );

}
