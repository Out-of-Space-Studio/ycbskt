import React from 'react'
import { useState } from 'react'

import './index.css'

export default function Scoreboard(): React.ReactElement {

    const [Bouns, setBonus] = useState("NULL");
    const [HomeName, setHomeName] = useState("Home");
    const [AwayName, setAwayName] = useState("Away");
    
    return (
    <div className="scoreboard">
        <div className='Home'>
            <div className="HomeName">
                {HomeName}
            </div>
            <div className="Score">

            </div>
            <div className="Records">
                <div className="TO">
                    
                </div>
                <div className="FO">

                </div>
            </div>
            {Bouns==="Home"? <div className='Bonus'>Bonus</div>: <div></div>}
        </div>
        <div className="Away">

        </div>
        <div className="Time">
            <div className="Timer">

            </div>
            <div className="Period">

            </div>
        </div>
    </div>
    );
}
