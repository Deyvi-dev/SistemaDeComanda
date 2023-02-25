
// import Modal from 'react-modal';
// import {WarningCircle} from 'phosphor-react'
// import api from '../services/Api';





interface SoloPagamento{
    nome: string
    valor: number
}

export function CardPagamentoSolo(props:SoloPagamento){
    return (
        <div>
            <div className="w-60 h-fit flex flex-col bg-gray-700 text-white p-2  rounded-md gap-2">
                <div>
                    <h1>PEDIDO: {props.nome}</h1>
                    <p>PREÇO: {props.valor}</p>
                </div>
                <div className="m-auto">
                    <button className="bg-green-600 px-2 py-1 rounded-md"
                        >
                        FECHAR PEDIDO 
                    </button> 
                </div>
            </div>
        </div>
    )}