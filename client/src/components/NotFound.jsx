import {useNavigate} from "react-router-dom";

export default function NotFound(props) {

    const navigate = useNavigate()

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center h-screen">
                <p className="font-kanit text-2xl sm:text-4xl dark:text-white">ERROR 404</p>
                <p className="font-kanit text-2xl sm:text-4xl dark:text-white">{props.type} Not Found</p>
                <button onClick={() => navigate('/')} className="py-1 sm:py-2 px-4 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-emerald-700 bg-emerald-900 rounded-md text-white text-lg sm:text-xl mt-4 sm:mt-8 font-kanit">Home</button>
            </div>
        </div>
    )
}