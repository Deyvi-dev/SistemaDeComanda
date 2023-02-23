import { useEffect, useState } from "react";
import axios from 'axios';

interface propsCardCozinha{
    mesa : number;
    prato : string;
    desc : string;
    obs : string;
    id : number;
}

export function CardCozinha(props:propsCardCozinha){

    const [name, setName] = useState(' ')

    const click = name == ' ' ? " " : 'bg-red-500'

    async function submitPrato () {
        const response = await axios.put(`http://localhost:3333/updateCozinha/${props.id}`)
        history.go(0)
        setName('Peido finalizado')
    }

    return(
        <div className="w-96 h-fit overflow-hidden bg-white">
            <div className="pb-2">
                <div className="w-full flex justify-center py-1">
                    <h1 className="font-semibold text-lg mt-2"> 
                        MESA {props.mesa.toString()} 
                    </h1>
                </div>
                <div className="p-2 gap-2 flex flex-col">
                    <p className="w-full bg-gray-600 text-white p-1 flex gap-1">
                        <p className="font-bold">Pedido:</p> {props.prato}
                    </p>
                    <p className="m-auto">Descrição</p>
                    <p className="w-full bg-gray-600 text-white text-center p-2 break-keep">
                        {props.desc}
                    </p>
                </div>
                <div className="flex flex-col items-center py-1 px-5">
                    <h2> OBS </h2>
                    <p className="w-full flex justify-center bg-gray-600 rounded-md text-white"> 
                        {props.obs}
                    </p>
                </div>
                <div className="flex justify-center items-center py-1 hover:text-white">
                    <button className={`${click} hover:bg-green-200`}
                    onClick={submitPrato}
                        >
                        {name == ' ' ? "Finalize o peido" : name}
                    </button>
                </div>
            </div>
        </div>
    )
}