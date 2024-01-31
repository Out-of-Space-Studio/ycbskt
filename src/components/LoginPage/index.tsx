import React from 'react'

import './index.css'

export default function Login(): React.ReactElement {
    return (
        <div id="login">
            <div className="login-box">
                <input
                    type="text"
                    placeholder="USERNAME"
                    className="username"
                ></input>
                <input
                    type="password"
                    placeholder="PASSWORD"
                    className="password"
                ></input>
                <input type="submit" value={'Login'} className="Submit"></input>
            </div>
        </div>
    )
}
