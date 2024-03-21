import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

// Routers | Loading

import Navbar from './Components/Navbar'
import Home from './Components/HomePage/index'
import Login from './Components/LoginPage/index'
import Scoreboard from './Components/Scoreboard/index'
import Competition from './Components/Competition/index'
import Members from './Components/Members/index'
import Loading from './Components/Loading/index'

export default function App(): React.ReactElement {
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 6500)
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div id="app">
            <BrowserRouter basename='/ycbskt'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/scoreboard" element={<Scoreboard />} />
                    <Route path="/competition" element={<Competition />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
