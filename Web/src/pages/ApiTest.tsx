export function ApiTest(){
    return(
        <div className="flex justify-center items-center w-fll h-screen p-5 gap-6">
            <div className="bg-slate-500 w-10/12 h-5/6 p-5">

                <div className="flex ">
                    <div className="bg-slate-300 w-36 break-all p-2">
                        <h1>taco</h1>
                        <p>R$1.000,00</p>
                    </div>
                    <div className="bg-green-200 w-10 justify-center items-center flex">
                        x
                    </div>
                </div>

            </div>
        
            <div className="w-3/12 h-5/6 flex flex-col justify-between">
                <div className="bg-slate-500 h-3/4 border-4 border-slate-500">
                    <div className="overflow-y-scroll scroll-m-0 h-4/5 p-2 gap-2">
                        <div className="mb-2 bg-gray-300 p-2">
                            <p>Prato: taco</p>
                            <p>Valor: R$10,00</p>
                        </div>

                    </div>
                    <div className="h-1/5 px-2 pt-3">
                        <h2>Total de pedidos: 10</h2>
                        <h2>Valor total a pagar: R$1.000,00</h2>
                    </div>
                </div>
                <div className="bg-slate-500 h-1/6 flex flex-col justify-center border-4 border-slate-500">

                    <button className="bg-red-500 w-fit m-auto px-10 py-3 font-bold text-xl">
                        FECHA MESA
                    </button>
                </div>
            </div>
    </div>
    )
}