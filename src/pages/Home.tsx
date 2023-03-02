import { Link } from 'react-router-dom';

export function Home(){
    return (
        <div className="gap-1 flex flex-col">
            <Link to={'/cozinha'}>
                <a>Cozinha</a>
            </Link>

            <Link 
                className="bg-slate-500 b-2 w-20"
                to={"/garcom"}>
                    Garçom
            </Link>

            <Link to={'/caixa'}>
                <a>Caixa</a>
            </Link>
        </div>
    )
}