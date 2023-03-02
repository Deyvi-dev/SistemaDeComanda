import { WarningCircle, Check, SignOut, ArrowBendUpLeft } from "phosphor-react";
import { useState } from "react"
import ReactModal from "react-modal";
import api from "../services/Api"
import { CardGarcomEntregaPedido } from "../components/CardGarcomEntregaPedido";
import cardapio from "../components/Cardapio";


interface dados{
    number: number;
    name: string;
    id:number;
    obs: string;
}



export function Garcom(){

    const [dados, setDados] = useState<dados[]>([]);
    const [prato, setPrato] = useState('');
    const [mesa, setMesa] = useState(' ');
    const [obs, setObs] = useState('');
    const [open, setOpen] = useState(false);

    const [erro, setErro] = useState(false)
    const [mesas, setMesas] = useState<dados[]>([])

    useState(() => {
        const intervalo = setInterval(() => {
            api
                .get<dados[]>('/prontoParaEntrega')
                .then((response) => setDados(response.data))
            api
                .get<dados[]>('/mesas/garcom')
                .then((response) => setMesas(response.data))
        },100);


        return () => clearInterval(intervalo)
    })

    interface PostPrato{
        name: string;
        obs: string;
        state: string;
        valor: number;
        number: number;
    }

    async function criarPedido(data: PostPrato){
        if(Number(mesa) != 0){
            try {
                const response = await api.post("/newPrato", data);
                console.log(response);
            } catch (err) {
                console.error(err);
            }

            setErro(false)  

        }
        setOpen(false)
    }

    var test = 0

    for ( var i = 0; i < cardapio.length; i++ ){
        prato == cardapio[i].nome ? test = cardapio[i].valor : 1
    }

    const postPrato: PostPrato = {
        name: prato,
        obs: obs,
        state: 'cozinha',
        valor: test,
        number: Number(mesa)
    }


    const bordaErro = erro == false ? ' ' : 'border-2 border-red-500 text-red-500'
    

    return(
        <div className="h-screen bg-slate-700">
            <h1 className="h-[10%] text-xl font-bold pt-3 text-center text-white">
                PEDIDOS PRONTO PARA ENTREGA 
            </h1>
            <div className="flex flex-col h-[80%] overflow-auto gap-2 pb-5">
                {dados.map(d => {
                    return(
                        <CardGarcomEntregaPedido id={d.id} mesa={d.number} name={d.name} obs={d.obs} key={d.id} />
                    )
                })}
            </div>
            <div className="h-[10%] bg-gray-700 border-t-2 border-gray-900 flex justify-center items-center">
                <button className="w-full h-full text-white text-2xl font-bold active:text-gray-800"
                onClick={() => setOpen(true)}>
                    Novo pedido
                </button>
                <ReactModal
                className="bg-slate-600 h-full w-full"
                isOpen={open}
                >
                    <div className="flex flex-col items-center w-full h-full">
                        <header className="w-full bg-gray-100 text-xl font-bold pl-2 py-2">
                            <button className="flex gap-1 items-center w-fit active:text-gray-400"
                            onClick={() => setOpen(false)}>
                                <ArrowBendUpLeft size={32} />
                                VOLTAR
                            </button>
                        </header>

                        <div className="h-full w-full p-4 flex flex-col gap-5 mt-4">
                            <div className={`w-full flex gap-1 bg-gray-200 ${bordaErro} px-2 py-1 rounded-lg items-center h-fit`}>
                                <p>
                                    PEDIDO:
                                </p>
                                <select className="w-full bg-transparent border-none flex justify-center items-center font-semibold"
                                 id="menuCardapio" value={prato} onChange={(e) => setPrato(e?.target.value)}
                                >
                                    <optgroup className="text-black"
                                    label="Menu México" >
                                        <option value="TACOS">TACOS</option>
                                        <option value="TACOS MIX">TACOS MIX</option>
                                        <option value="TACÃO">TACÃO</option>
                                        <option value="LIGERITO">LIGERITO</option>
                                        <option value="prato 01">Prato 01</option>
                                        <option value="prato 02">Prato 02</option>
                                        <option value="prato 03">Prato 03</option>
                                    </optgroup>

                                    <optgroup className="text-black"
                                    label="Menu Brasil">
                                        <option value="CARNE TRINCHADA COM FRITAS">CARNE TRINCHADA COM FRITAS</option>
                                        <option value="CARNE TRINCHADA COM FRITAS E QUEIJO MASSARICADO">CARNE TRINCHADA COM FRITAS E QUEIJO MASSARICADO</option>
                                        <option value="TOSCANA FLAMBADA NA CACHAÇA">TOSCANA FLAMBADA NA CACHAÇA</option>
                                        <option value="CARNE AO MOLHO MADEIRA E FRITAS">CARNE AO MOLHO MADEIRA E FRITAS</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className={`w-full flex gap-1 bg-gray-200 px-2 py-1 ${bordaErro} rounded-lg items-center h-fit`}>
                                <p>
                                    MESA:
                                </p>
                                <select 
                                className="w-full bg-transparent border-none flex justify-center items-center  font-semibold"
                                id="mesa" 
                                value={mesa} 
                                onChange={(e) => setMesa(e?.target.value)}
                                >   
                                    <option value=''>SELECIONE A MESA</option>
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

                            <div className="flex flex-col items-center gap-1 mt-2">
                                <p className="text-xl font-bold text-white">
                                    OBSERVAÇÃO
                                </p>
                                <textarea className="w-full h-32 resize-none rounded-lg p-2 border border-black"
                                value={obs} onChange={(e) => setObs(e.target.value)}>

                                </textarea>

                                <button className="text-white border border-gray-300 w-fit px-2 py-1 rounded-lg mt-5 active:bg-gray-800"
                                onClick={() => criarPedido(postPrato)}
                                >
                                    ENVIAR PEDIO
                                </button>

                            </div>
                            
                        </div>
                    </div>                  
                </ReactModal>
            </div>
        </div>
    )
}