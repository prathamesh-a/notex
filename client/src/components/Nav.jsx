import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useNavigate} from "react-router-dom";

export default function Nav(props) {

    const navigate = useNavigate()

    function toggleTheme() {
        if (props.theme === 'dark') props.setTheme('light')
        else props.setTheme('dark')
    }

    return (
        <div className="z-40 py-2 sm:py-4 fixed dark:bg-[#343231] bg-[#26a96c] top-0 w-full hover:shadow-2xl dark:shadow-neutral-600 hover:shadow-green-300 transition ease-in-out duration-350">
            <div className="flex justify-between">
                <div onClick={() => navigate('/')} className="flex justify-center items-center px-2 mx-4 cursor-pointer">
                    <img alt="" src="https://img.icons8.com/external-creatype-outline-colourcreatype/32/FFFFFF/external-box-essential-ui-v1-creatype-outline-colourcreatype.png"/>
                    <p className="text-white font-kanit text-xl sm:text-2xl ml-2">NoteX</p>
                </div>

                <div className="flex items-center mx-4 sm:mx-8">
                    <p onClick={() => navigate('/about')} className="font-kanit text-md sm:text-xl text-white cursor-pointer hover:underline">About</p>
                    <div onClick={toggleTheme} className="ml-12 w-[30px]">
                        <DarkModeSwitch onChange={toggleTheme} checked={props.theme === 'dark'} sunColor="white" />
                    </div>
                </div>

            </div>

        </div>
    )
}