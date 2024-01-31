import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

// Routers | Loading

import Home from './components/HomePage/index'
import Loading from './components/Loading/index'

export default function App(): React.ReactElement {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 6500)
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
