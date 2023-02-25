import Modal from 'react-modal';
import {WarningCircle} from 'phosphor-react'
import api from '../services/Api';
import { useState } from 'react';

interface CPS{
    nome: string;
    valor: number;
    id: number;
    mesa: number;
}

 
export default function CaixaPagamentoSolo(props: CPS){
  
    const [open,setOpen] = useState(false)
    async function pagamentoRealizado() {
        const efetuandoPagamento = await api.put(`/pagamento-solo/${props.id}`)
        history.go(0)
    }
    return (
        <div>
            <div className="w-60 h-fit flex flex-col bg-gray-700 text-white p-2  rounded-md gap-2">
                <div>
                    <h1 className="flex gap-1 items-center">
                        PEDIDO:
                        <span className="text-red-500 font-semibold">
                            {props.nome}
                        </span>
                    </h1>
                    <p className="flex gap-1 items-center">
                        PREÇO: 
                        <span className="text-red-500 font-semibold">
                            R${props.valor}
                        </span>
                    </p>
                    {/* {} uma rota para saber quantos prato ta na cozinha da mesa e outra para saber quantas ta no bar */}
                </div>
                <div className="m-auto">
                    <button className="bg-green-600 px-2 py-1 rounded-md"
                        onClick={() => setOpen(true)}>
                        FECHAR PEDIDO 
                    </button>
                </div>
            </div>
            <Modal className="w-fit h-fit bg-gray-600 mt-[15%] mx-auto justify-center flex flex-col items-center rounded-2xl"
             isOpen={open}
            >
                <div className="px-4 py-3 flex flex-col items-center w-fit h-fit">
                    <div className="flex w-fit h-fit flex-col items-center text-white">
                        <WarningCircle size={100} />
                        <h1 className="font-bold text-xl py-1">
                            Atenção
                        </h1>
                        <p>Você esta finalizando o peido {props.nome} da mesa {props.mesa < 10 ? '0'+ props.mesa : props.mesa}</p>
                    </div>
                    <div className="flex gap-5 mt-3" >
                        <button className="rounded-lg bg-red-500 px-2 py-1 font-bold " 
                        onClick={() => setOpen(false)}>
                            Cancelar
                        </button>
                        <button className="rounded-lg bg-green-500 px-2 py-1 font-bold active:bg-green-400"
                        onClick={pagamentoRealizado}>
                            Confirmar
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}