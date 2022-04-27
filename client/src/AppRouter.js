import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Mapper from './views/Mapper'
import Footer from './components/Footer'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mapper' element={<Mapper />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
