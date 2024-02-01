import React from 'react'
import { useState } from 'react'

import './index.css'

export default function Login(): React.ReactElement {
    return (
        <div id="login">
            <div className="login-box">
                <label className="label-box">Username</label>
                <input
                    type="text"
                    className="username input-box"
                    required
                ></input>
                <label className="label-box">Password</label>
                <input
                    type="password"
                    className="password input-box"
                    required
                ></input>
                <input type="submit" value={'Login'} className="btn"></input>
            </div>
        </div>
    )
}
