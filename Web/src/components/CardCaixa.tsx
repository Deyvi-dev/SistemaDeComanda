import { PopupCaixa } from './PopupCaixa';
import Model from 'react-modal'
import { useState } from 'react';

interface dados {
    id: number;
    name: string;
    desc: string;
    mesa_id: number;
    obs:string;
}

interface propsCaixa{
    mesa: number;
}

export function CardCaixa(props:propsCaixa){

    const [isOpen, setIsOpen] = useState(false)

    function abrirModel(){setIsOpen(true)}
    function fecharModel(){setIsOpen(false)}

    var mesaNumber = props.mesa.toString()

    if(props.mesa < 10){
        mesaNumber = ("0" + props.mesa)
    }

    return(
        <>
            <button className="" onClick={abrirModel}>
            {/* bg-gray-600 flex h-fit w-fit gap-2 pl-2  overflow-hidden px-2 */}
                <div className="bg-gray-600 p-3 font-bold text-white">
                {/* text-white flex gap-2 text-xl text-center items-center justify-center py-2 */}
                    <h1 className="">
                        MESA
                        <p className="text-red-500">
                        {mesaNumber}
                        </p>
                    </h1>
                </div>

            </button>
            <Model
            isOpen={isOpen}
            onRequestClose={fecharModel}
            >
                <button onClick={fecharModel}>
                    fechar
                </button>
                <PopupCaixa mesa={props.mesa} />
            </Model>
        </>
    )
}