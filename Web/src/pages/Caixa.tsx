import axios from "axios";
import { useEffect, useState } from "react";
import { CardCaixa } from "../components/CardCaixa";

interface dados {
    mesa: number
    name: string
    data: DataTransfer
    valor: number
}

export function Caixa(){

    const [dados,setDados] = useState<dados[]>([])

    async function carregarDados(){
        const response = await axios.get<dados[]>('http://localhost:3333/mesas');
        setDados(response.data)
    }

    useEffect(()=>{
        carregarDados()
    },[]);
    console.log(dados)
    return(
        <div>
            {dados.map(d => {
                return (
                    <>{d.name}</>
                )
            })}
            <CardCaixa/>
        </div>
    )
}