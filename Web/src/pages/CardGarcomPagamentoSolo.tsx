import { WarningCircle, Check } from "phosphor-react";
import { useState } from "react"
import ReactModal from "react-modal";


interface propsCard {
    name: string
    mesa: number
    obs: string
    id: number
}

export function CardGarcomPagamentoSolo(props: propsCard){

    const [open, setOpen] = useState(false);

    return(
        <div className="w-full flex flex-col items-center ">
                    <div className="flex justify-between w-fit h-fit bg-slate-200 w-[90%] rounded-r-xl overflow-hidden">
                        <div className="w-full py-2 px-4">
                            <h2 className="ml-[50%] font-semibold">MESA {props.mesa}</h2>
                            <h2>PRATO: {props.name}</h2>
                            <p>OBS: {props.obs}</p>
                        </div>
                        <button
                        onClick={() => setOpen(true)}
                         className="bg-green-700 w-12 active:bg-green-500 h-full  flex justify-center items-center">
                            <Check size={30} />
                        </button>
                        <ReactModal
                        className="w-full h-full flex justify-center items-center"
                        isOpen={open}
                        >   
                            <div className="w-[90%]  bg-gray-500 p-4 rounded-lg text-white">
                                <div className="flex flex-col items-center text-center gap-1">
                                    <WarningCircle size={150}/>
                                    <h1>
                                        ATENÇÃO!
                                    </h1>
                                    <p>
                                        Você esta finalizando o peido queisadilha da mesa 01
                                    </p>
                                </div>
                                <div className="flex full justify-around mt-3 px-4 text-black">
                                    <button
                                    onClick={() => setOpen(false)}
                                    className="bg-red-700 w-fit active:bg-red-500 px-3 py-2 rounded-md text-lg font-semibold"
                                    >
                                    Cancelar
                                    </button>
                                    <button
                                    className="bg-green-700 w-fit active:bg-green-500 px-3 py-2 rounded-md text-lg font-semibold"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                            
                        </ReactModal>
                    </div>
                </div>
    )
}