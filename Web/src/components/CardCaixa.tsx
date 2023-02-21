import axios from 'axios';
import { useEffect, useState } from 'react';

interface dados {
    id: number;
    name: string;
    desc: string;
    mesa_id: number;
    obs:string;
}

export function CardCaixa(){

    const [dados,setDados] = useState<dados[]>([])

    async function carregarDados() {
        const response = await axios.get<dados[]>('http://localhost:3333/mesas');
        setDados(response.data);
    }

    useEffect(() => {
        carregarDados()
      }, []);

    console.log(dados)

    return(
        <div className="w-80 bg-slate-500">
            {dados.map(d => {
                return(
                    <div>
                        {d.name}
                    </div>
                )
            })}
            <div>Mesa</div>
            <div>
                <h2>Pratos</h2>
                <p>Nome do prato</p>
                <p>Valor do prato</p>
            </div>
            <div>Valor total</div>
        </div>
    )
}