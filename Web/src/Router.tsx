import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cozinha } from './pages/Cozinha';
import { ApiTest } from './pages/ApiTest';
import { Caixa } from './pages/Caixa';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cozinha" element={<Cozinha/>}/>
            <Route path="/ApiTest" element={<ApiTest/>}/>
            <Route path="/caixa" element={<Caixa/>}/>
        </Routes>
    )
}