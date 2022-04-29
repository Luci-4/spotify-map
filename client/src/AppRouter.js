import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Mapper from './views/Mapper'
import Footer from './components/Footer'
import Canvas from './components/Canvas'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Mapper />} />
                <Route path='/mapper' element={<Canvas />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
