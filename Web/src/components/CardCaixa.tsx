import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';


import { PopupCaixa } from './PopupCaixa';

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

    const [openPopup, setOpenPopup] = useState(false);

    function openMesa(){
        setOpenPopup(!openPopup)
    }


    return(
        <button onClick={openMesa}>
            <div className="bg-gray-600 flex h-fit w-fit gap-2 pl-2  overflow-hidden rounded-r-lg">
                <h1 className="text-white flex gap-2 text-xl text-center items-center justify-center py-2">
                    MESA
                    <p className="text-red-500">
                    {props.mesa.toString()}
                    </p>
                </h1>

                <div className="bg-green-400 w-7 flex justify-center items-center text-center">
                    x
                </div>

                <Modal 
                isOpen={openPopup == true}>
                    <PopupCaixa mesa={props.mesa}/>
                </Modal>
            </div>
        </button>
    )
}