import api from '../services/Api';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { WarningCircle } from 'phosphor-react';
import CaixaPagamentoSolo from './CaixaPagamentoSolo';

interface propsPopupCaixa{
    mesa: number
}

interface dados {
    name: string
    desc: string
    obs: string
    valor: number
    id: number;
}


export function PopupCaixa(props:propsPopupCaixa){

    const [dados,setDados] = useState<dados[]>([])
    const [openModalMesa, setOpenModalMesa] = useState(false)

    useEffect(() => {
        const intervalo = setInterval(() => {
            api
            .get<dados[]>(`mesa/${props.mesa}`)
            .then((response) => setDados(response.data))
        },100);
        return () => clearInterval(intervalo)
      }, []);


      async function mesaPaga (){
        const response = await api.put(`/mesaPaga/${props.mesa}`)
      }


    const valorTotal = dados.map(d => d.valor)

    var soma = 0
    var mesa = props.mesa.toString()


    for (var i = 0; i < valorTotal.length; i++){
        soma += valorTotal[i];
    }

    function confirmacaoMesa(){
        setOpenModalMesa(true)
    }

    return(
        <div className="flex w-full h-[90%]">
            <div className=" bg-gray-800 w-[75%] h-full rounded-md m-2">
                <div className=" h-full flex gap-3 p-4 overflow-auto flex-wrap justify-around   ">
                    {dados.map(d => {
                        return <CaixaPagamentoSolo nome={d.name} valor={d.valor} id={d.id} mesa={props.mesa}/>
                    })}
                </div>
            </div>
        
            <div className="flex flex-1 flex-col bg-gray-800 rounded-md justify-between m-2 h-full text-white overflow-hidden">
                <div className="h-full overflow-auto p-2 border-2 border-gray-800 flex flex-col gap-2">
                    {dados.map(d => {
                        return(
                            <div className="bg-gray-700 p-2 h-fit">
                                <p>
                                    PEDIDO:
                                    <span className="text-red-500 ml-1 font-semibold">
                                        {d.name}
                                    </span>
                                </p>
                                <p>
                                    PREÇO:
                                    <span className="text-red-500 ml-1 font-semibold">
                                        R${d.valor.toFixed(2)}
                                    </span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className="px-2 py-2 mb-2">
                    <div className="py-2">
                        <h2>Total de pedidos: 
                            <span className="text-red-500 font-medium ml-1">
                                {dados.length < 10 && dados.length > 0 ? '0' + dados.length: dados.length }
                            </span>
                        </h2>
                        <h2>
                            Valor total a pagar: 
                            <span className="text-red-500 font-medium ml-1">
                                R${soma.toFixed(2)}
                            </span>
                        </h2>
                    </div>

                    <button 
                    onClick={confirmacaoMesa}
                    className="bg-green-600 px-2 py-1 m-auto w-full rounded-md font-semibold">
                        FECHAR MESA
                    </button>

                    
                    <Modal
                     className="w-fit h-fit bg-gray-600 mt-[15%] mx-auto justify-center flex flex-col items-center rounded-2xl"
                     isOpen={openModalMesa}
                     >   
                        <div className="px-4 py-3 flex flex-col items-center w-fit h-fit">
                            <div className="flex w-fit h-fit flex-col items-center text-white">

                                <WarningCircle size={100} />
                                <h1 className="font-bold text-xl py-1">
                                    Atenção
                                </h1>
                                <p>
                                    Você esta finalizando o peido da mesa {props.mesa < 10 ? '0' + props.mesa : props.mesa}
                                </p>
                                <p>
                                    Valor total a ser pago R${soma.toFixed(2)}
                                </p>

                            </div>
                            <div className="flex gap-5 mt-3" >

                                <button className="rounded-lg bg-red-500 px-2 py-1 font-bold " 
                                onClick={()=> setOpenModalMesa(false)}>
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