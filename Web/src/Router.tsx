import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cozinha } from './pages/Cozinha';
import { Garcom } from './pages/Garcom';
import { Caixa } from './pages/Caixa';
import { PopupCaixa } from './components/PopupCaixa';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cozinha" element={<Cozinha/>}/>
            <Route path="/garcom" element={<Garcom/>}/>
            <Route path="/caixa" element={<Caixa/>}/>
        </Routes>
    )
}