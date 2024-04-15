function RulesModal({ onClose, isOpen }) {

    if (isOpen) {
    return (
        <div className="fixed h-full w-full top-0 flex lg:items-center lg:justify-center">
            <div className="h-full w-full absolute bg-black opacity-50 top-0" />

            <div className="relative rounded-lg h-full w-full bg-white flex flex-col px-8 py-16 justify-between items-center lg:w-[400px] lg:h-fit lg:p-8 lg:gap-8">
                <div className="flex justify-between w-full items-center">
                    <h2 className="text-DarkText text-3xl font-bold">RULES</h2>
                    <img onClick={() => onClose()} className="cursor-pointer h-[20px] w-[20px] hidden lg:flex" src="../../public/images/icon-close.svg" />
                </div> 
                <img src="../../public/images/image-rules-bonus.svg" />
                <img onClick={() => onClose()} className="cursor-pointer h-[20px] w-[20px] lg:hidden" src="../../public/images/icon-close.svg" />
 
            </div>
        </div>
    )
    }
}

export default RulesModal