import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardCozinha } from '../components/CardCozinha';
import api from '../services/Api'


interface dados {
    id: number;
    name: string;
    number: number;
    obs:string;
}

export function Cozinha(){

    const [dados,setDados] = useState<dados[]>([])

    useState(() => {
        const intervalo = setInterval(() => {
            api
            .get<dados[]>('/cozinha')
            .then((response) => setDados(response.data))
        },100);

        return () => clearInterval(intervalo)
    })

    return (
        <div className="bg-gray-500 h-screen w-full overflow-auto"> 
            <div className="w-full flex gap-3 break-all flex-wrap py-5 justify-center">
                {dados.map(d => {
                    return(
                        <CardCozinha obs={d.obs} mesa={d.number} prato={d.name} id={d.id} key={d.id}/>
                    )
                })}
            </div>
            
        </div>
    )
}