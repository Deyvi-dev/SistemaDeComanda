import api from '../services/Api';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {WarningCircle} from 'phosphor-react'

interface propsPopupCaixa{
    mesa: number
}

interface dados {
    name: string
    desc: string
    obs: string
    valor: number
}


export function PopupCaixa(props:propsPopupCaixa){

    const [dados,setDados] = useState<dados[]>([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        api
            .get<dados[]>(`mesa/${props.mesa}`)
            .then((response) => setDados(response.data))

      }, []);

      async function mesaPaga (){
        const response = await api.put(`/mesaPaga/${props.mesa}`)
        history.go(0)
        console.log('clicado')
      }

    const valorTotal = dados.map(d => d.valor)

    var soma = 0
    var mesa = props.mesa.toString()
    if (props.mesa < 10){
        mesa = ("0" + props.mesa)
    }

    for (var i = 0; i < valorTotal.length; i++){
        soma += valorTotal[i];
    }

    function confirmacao(){
        setOpen(true)
    }

    return(
        <div className="flex justify-center items-center gap-6 w-full h-full">
            <div className="bg-slate-500 w-full h-full p-5 flex flex-wrap overflow-auto justify-around gap-4 border-4 border-slate-500">
                {dados.map(d => {
                            return(
                                <div className="flex h-fit">
                                    <div className="bg-slate-300 w-36 break-all p-2 ">
                                        <h1>Prato: {d.name}</h1>
                                        <p>Preço: {d.valor.toFixed(2)}</p>
                                    </div>
                                    <div className="bg-green-200 w-10 justify-center items-center flex">
                                        x
                                    </div>
                                </div>
                            )
                        })}
            </div>
        
            <div className="w-full h-full flex flex-col justify-between">
                <div className="bg-slate-500 h-3/4 border-4 border-slate-500">
                    <div className="overflow-y-scroll scroll-m-0 h-4/5 p-2 gap-2">
                        {dados.map(d => {
                            return(
                                <div className="mb-2 bg-gray-300 p-2">
                                    <p>Prato: {d.name}</p>
                                    <p>Valor: R${d.valor.toFixed(2)}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="h-1/5 px-2 pt-3">
                        <h2>Total de pedidos: {dados.length.toString()}</h2>
                        <h2>Valor total a pagar: R${soma.toFixed(2)}</h2>
                    </div>
                </div>
                <div className="bg-slate-500 h-1/6 flex flex-col justify-center border-4 border-slate-500">

                    <button 
                    onClick={confirmacao}
                    className="bg-red-500 w-fit m-auto px-10 py-3 font-bold text-xl">
                        FECHA MESA
                    </button>
                    <Modal
                     className="w-fit h-fit bg-gray-600 mt-[15%] mx-auto justify-center flex flex-col items-center rounded-2xl"
                     isOpen={open}
                     >   
                        <div className="px-4 py-3 flex flex-col items-center w-fit h-fit">
                            <div className="flex w-fit h-fit flex-col items-center text-white">
                                <WarningCircle size={100} />
                                <h1 className="font-bold text-xl py-1">
                                    Atenção
                                </h1>
                                <p>Você esta finalizando o peido da mesa {mesa}</p>
                                <p>Valor total a ser pago R${soma}</p>
                            </div>
                            <div className="flex gap-5 mt-3" >
                                <button className="rounded-lg bg-red-500 px-2 py-1 font-bold " 
                                onClick={()=> setOpen(false)}>
                                    Cancelar
                                </button>
                                <button className="rounded-lg bg-green-500 px-2 py-1 font-bold active:bg-green-400"
                                onClick={mesaPaga}>
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    )
}