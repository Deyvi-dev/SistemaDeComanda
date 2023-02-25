import { WarningCircle, Check } from "phosphor-react";
import { useState } from "react"
import ReactModal from "react-modal";
import api from "../services/Api"

interface dados{
    mesa_id: number;
    name: string;
}

export function Garcom(){

    const [dados, setDados] = useState<dados[]>([]);
    const [open, setOpen] = useState(false);

    useState(() => {
        api
            .get<dados[]>('/prontoParaEntrega')
            .then((response) => setDados(response.data))
    })

    return(
        <div className="h-screen bg-slate-700">
            <h1 className="h-[10%] text-xl font-bold pt-3 text-center text-white">
                PEDIDOS PRONTO PARA ENTREGA
            </h1>
            <div className="flex flex-col h-[80%] overflow-auto">
                <div className="w-full flex flex-col items-center ">
                    <div className="flex justify-between w-fit h-fit bg-slate-200 w-[90%] rounded-r-xl overflow-hidden">
                        <div className="w-full py-2 px-4">
                            <h2 className="ml-[50%] font-semibold">MESA 01</h2>
                            <h2>PRATO: queisadilha</h2>
                            <p>OBS: sem oface</p>
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
                            <div className="w-[90%]">
                                <div className="flex flex-col items-center text-center gap-1">
                                    <WarningCircle size={150}/>
                                    <h1>
                                        ATENÇÃO!
                                    </h1>
                                    <p>
                                        Você esta finalizando o peido queisadilha da mesa 01
                                    </p>
                                </div>
                                <div className="flex full justify-around mt-3 px-4">
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
            </div>
            <div className="h-[10%] bg-gray-700 border-t-2 border-gray-900 flex justify-center items-center">
                <button className="w-full h-full text-white text-2xl font-bold active:text-gray-800">
                    Novo pedido
                </button>
            </div>
        </div>
    )
}