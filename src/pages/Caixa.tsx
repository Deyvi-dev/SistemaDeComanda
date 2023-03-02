import axios from "axios";
import { useEffect, useState } from "react";
import { CardCaixa } from "../components/CardCaixa";
import api from "../services/Api";

interface dados {
    id : number
    mesa: number
    name: string
    data: DataTransfer
    valor: number
}

export function Caixa(){

    const [ cozinha , setCozinha ] = useState<dados[]>([])
    const [ bar , setBar ] = useState<dados[]>([])
    const [ pronto , setPronto ] = useState<dados[]>([])
    const [ caixa , setCaixa ] = useState<dados[]>([])
    const [ mesas , setMesas ] = useState<dados[]>([])

    useState(() => {
        const temp = setInterval(() => {
            api
            .get<dados[]>("/pedidos-no-bar")
            .then((response) => setBar(response.data));

            api
                .get<dados[]>("/pedidos-na-cozinha")
                .then((response) => setCozinha(response.data));

            api
                .get<dados[]>("/pronto-para-entrega")
                .then((response) => setPronto(response.data));

            api
                .get<dados[]>("/pedidos-no-caixa")
                .then((response) => setCaixa(response.data));

            api
                .get<dados[]>("/mesas")
                .then((response) => setMesas(response.data));
        },10)
        return () => clearInterval(temp)
    })


    return(
        <div className="flex w-full h-screen justify-around pt-10 bg-gray-500 px-5 gap-5">
            <div className="bg-gray-50 h-fit px-5 py-3 items-center flex flex-col gap-2 rounded-xl">

                <h1 className="font-bold text-xl">
                    CONTROLE DE PEDIDOS
                </h1>

                <div className="gap-2 flex flex-col">
                    <p className="bg-gray-600 text-white px-2 flex gap-2">
                        PEDIDOS NA COZINHA:
                            <p className="text-red-500">
                                {cozinha.length}
                            </p>
                    </p>
                    <p className="bg-gray-600 text-white px-2 flex gap-2">
                        PEDIDOS NO BAR:
                            <p className="text-red-500">
                                {bar.length}
                            </p>
                    </p>
                    <p className="bg-gray-600 text-white px-2 flex gap-2">
                        PEDIDOS PRONTO PARA ENTREGA: 
                            <p className="text-red-500">
                                {pronto.length}
                            </p>
                    </p>
                    <p className="bg-gray-600 text-white px-2 flex gap-2">
                        PEDIDOS ENTREGUE: 
                            <p className="text-red-500">
                                {caixa.length}
                            </p>
                    </p>
                </div>
            </div>
            <div className="bg-white flex-1 h-5/6 rounded-xl overflow-hidden flex flex-col flex-wrap p-4 gap-3">
                {
                    mesas.map(d => {
                        return (
                            <CardCaixa mesa={d.mesa}/>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}