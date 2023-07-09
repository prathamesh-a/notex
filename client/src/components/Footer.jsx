export default function Footer() {
    return (
        <div className="mt-12 dark:bg-[#353535] bg-emerald-900 py-4">

            <div className="flex justify-center items-center px-2 mx-4">
                <img alt="" src="https://img.icons8.com/external-creatype-outline-colourcreatype/32/FFFFFF/external-box-essential-ui-v1-creatype-outline-colourcreatype.png"/>
                <p className="text-white font-kanit text-xl sm:text-2xl ml-2">NoteX</p>
            </div>
            <hr className="my-2 border-t-1 border-neutral-500 w-[60%] sm:w-1/3 mx-auto"/>
            <div className="text-neutral-300">
                <div className="flex justify-around sm:justify-center">
                    <p className="sm:mr-16">© 2023 NoteX.</p>
                    <div className="flex cursor-pointer">
                        <img alt="" width="20px" height="20px" src="https://img.icons8.com/sf-ultralight-filled/25/ffffff/github.png"/>
                        <p className="ml-1 hover:underline">Star on Github</p>
                    </div>
                </div>

            </div>
            <div className="flex">
                <p className="cursor-pointer text-sm mt-2 text-zinc-300 hover:underline ml-2 text-center" onClick={() => window.open("http://icons8.com/icons")}>Icons by Icons8</p>
            </div>
        </div>
    )
}