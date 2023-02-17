import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cozinha } from './pages/Cozinha';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cozinha" element={<Cozinha/>}/>
        </Routes>
    )
}