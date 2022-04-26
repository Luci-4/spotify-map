import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import { NavLink } from 'react-router-dom'
import Related from './views/Related'
import Mapper from './views/Mapper'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/related' element={<Related />} />
                <Route path='/mapper' element={<Mapper />} />
            </Routes>

            <footer>
                <NavLink to='/'></NavLink>
                <NavLink to='/mapper'></NavLink>
                <NavLink to='/related'></NavLink>
            </footer>

        </BrowserRouter>
    )
}

export default AppRouter
