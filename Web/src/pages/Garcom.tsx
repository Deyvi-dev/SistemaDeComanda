import { WarningCircle, Check, SignOut, ArrowBendUpLeft } from "phosphor-react";
import { useState } from "react"
import ReactModal from "react-modal";
import api from "../services/Api"
import { CardGarcomPagamentoSolo } from "./CardGarcomPagamentoSolo";

interface dados{
    mesa_id: number;
    name: string;
    id:number;
    obs: string;
}

export function Garcom(){

    const [dados, setDados] = useState<dados[]>([]);
    const [prato, setPrato] = useState('');
    const [mesa, setMesa] = useState('');
    const [obs, setObs] = useState('');
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
            <div className="flex flex-col h-[80%] overflow-auto gap-2 pb-5">
                {dados.map(d => {
                    return(
                        <CardGarcomPagamentoSolo id={d.id} mesa={d.mesa_id} name={d.name} obs={d.obs} key={d.id} />
                    )
                })}
            </div>
            <div className="h-[10%] bg-gray-700 border-t-2 border-gray-900 flex justify-center items-center">
                <button className="w-full h-full text-white text-2xl font-bold active:text-gray-800"
                onClick={() => setOpen(true)}>
                    Novo pedido
                </button>
                <ReactModal
                className="bg-gray-800 h-full w-full"
                isOpen={open}
                >
                    <div className="">
                        <header className="w-full bg-gray-100 text-xl font-bold pl-2">
                            <button className="flex gap-1 items-center w-fit active:text-gray-400"
                            onClick={() => setOpen(false)}>
                                <ArrowBendUpLeft size={32} />
                                VOLTAR
                            </button>
                        </header>

                        <div className="">
                            <p>Mesa:</p>
                            <select id="mesa" value={mesa.toString()} onChange={(e) => setMesa(e?.target.value)} className="">
                                <option value=""></option>
                                <option value={1}>01</option>
                                <option value={2}>02</option>
                                <option value={3}>03</option>
                                <option value={4}>04</option>
                                <option value={5}>05</option>
                                <option value={6}>06</option>
                                <option value={7}>07</option>
                                <option value={8}>08</option>
                                <option value={9}>09</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                            </select>
                        </div>

                        <div>
                            <p>PEDIDO</p>
                            <select className=""
                             id="menuCardapio" value={prato} onChange={(e) => setPrato(e?.target.value)}
                            >
                                <optgroup label="Menu México">
                                    <option value=""></option>
                                    <option value="prato 1">TACOS</option>
                                    <option value="Prato 2">TACOS MIX</option>
                                    <option value="Prato 3">TACÃO</option>
                                    <option value="prato 4">LIGERITO</option>
                                </optgroup>
                                <optgroup label="Menu Brasil">
                                    <option value="CARNE TRINCHADA COM FRITAS">CARNE TRINCHADA COM FRITAS</option>
                                    <option value="CARNE TRINCHADA COM FRITAS E QUEIJO MASSARICADO">CARNE TRINCHADA COM FRITAS E QUEIJO MASSARICADO</option>
                                    <option value="TOSCANA FLAMBADA NA CACHAÇA">TOSCANA FLAMBADA NA CACHAÇA</option>
                                    <option value="CARNE AO MOLHO MADEIRA E FRITAS">CARNE AO MOLHO MADEIRA E FRITAS</option>
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <p>OBSERVAÇÃO</p>
                            <textarea className="w-[90%] h-[100px] resize-none"
                            value={obs} onChange={(e) => setObs(e.target.value)}>

                            </textarea>
                        </div>
                        <button 
                        onClick={() => {
                            console.log({prato},{mesa},{obs})
                        }}
                        className="text-white">
                            ENVIAR PEDIO
                        </button>
                    </div>
                </ReactModal>
            </div>
        </div>
    )
}