import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardCozinha } from '../components/CardCozinha';
import Api from '../services/Api';

interface pratos{
    id: number
    name: string
    desc: string
    obs: string
    state: string
    data: DataView
    valor: number
    mesa_id: number
}

export function Cozinha(){

    const [pratos, setPratos] = useState<pratos[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/cozinha')
            .then(response => {
                setPratos(response.data);
            });
    },[]);


    return(
        <div className=" bg-zinc-600 h-screen">
            <div>
                <h1>Cozinha</h1>
                <Link to={"/"}>
                    <a>Voltar para o Home</a>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
                {pratos.map(prato => {
                    console.log(prato)
                    return(
                        <div>oi</div>
                    )
                })}
            </div>
        </div>
    )
}