export default function Loader() {
    return (
        <div
            className="text-white fixed bg-[#000000e5] h-[100%] w-[100%] flex overflow-hidden z-50 justify-center items-center">
            <div className="">
                <div className="flex justify-center">
                    <div className="loader"></div>
                </div>
                <p className="sm:text-xl mt-4 text-center">Loading please wait...</p>
            </div>

        </div>
    )
}