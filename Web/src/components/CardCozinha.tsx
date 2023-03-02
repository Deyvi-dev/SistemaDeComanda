import { useState } from "react";
import {WarningCircle} from 'phosphor-react'
import ReactModal from "react-modal";
import api from "../services/Api";

interface propsCardCozinha{
    mesa : number;
    prato : string;
    obs : string;
    id : number;
}

export function CardCozinha(props:propsCardCozinha){

    const [name, setName] = useState(' ')
    const [isOpen, setIsOpen] = useState(false)

    const click = name == ' ' ? " " : 'bg-red-500'

    async function submitPrato () {
        api.put(`/updateCozinha/${props.id}`)
        setName('Peido finalizado')
    }

    return(
        <div className="w-96 h-fit overflow-hidden bg-white rounded-lg">
            <div className="pb-2">
                <div className="w-full flex justify-center py-1">
                    <h1 className="font-semibold text-lg mt-2"> 
                        MESA {props.mesa < 10 && props.mesa > 0 ? '0' + props.mesa : props.mesa} 
                    </h1>
                </div>
                <div className="p-2 gap-2 flex flex-col">
                    <p className="w-full h-fit p-1 flex items-center gap-1 bg-gray-800 text-white rounded-md">
                        Pedido: 
                        <p className="text-red-500 font-bold uppercase">
                            {props.prato}
                        </p>
                    </p>
                    <p className="w-full p-1 flex flex-col gap-1 bg-gray-800 text-white rounded-md items-center">
                        <p>
                            Observação
                        </p>
                        <p className="font-semibold uppercase text-red-500 h-20 p-1">
                            {props.obs}
                        </p>
                    </p>
                </div>

                
                <div className="flex justify-center items-center py-1">
                    <button className={`${click} border-2 p-2 rounded-md marker:border-gray-600`}
                    onClick={() => {setIsOpen(true)}}
                        >

                        {name == ' ' ? "Finalize o peido" : name}

                    </button>
                    <ReactModal className="w-fit h-fit bg-gray-600 mt-[15%] mx-auto justify-center flex flex-col items-center rounded-2xl"
                    isOpen={isOpen}
                    >


                        <div className="px-4 py-3 flex flex-col items-center w-fit h-fit">
                            <div className="flex w-fit h-fit flex-col items-center text-white">
                                <WarningCircle size={100} />
                                <h1 className="font-bold text-xl py-1">
                                    Atenção
                                </h1>
                                <p>Você esta finalizando o peido da mesa:{props.mesa < 10 && props.mesa > 0 ? '0' + props.mesa : props.mesa} </p>
                            </div>
                            <div className="flex gap-5 mt-3" >
                                <button className="rounded-lg bg-red-500 px-2 py-1 font-bold " 
                                onClick={()=> setIsOpen(false)}>
                                    Cancelar
                                </button>
                                <button className="rounded-lg bg-green-500 px-2 py-1 font-bold active:bg-green-400"
                                onClick={submitPrato}>
                                    Confirmar
                                </button>
                            </div>
                        </div>


                    </ReactModal>
                </div>
            </div>
        </div>
    )
}