import PlayOption from "./PlayOption"
import Button from "./utils/Button"

function Play({ playerSelection, robotSelection, outcome, reset }) {

    return (
        <div className="w-full flex flex-col items-center h-full justify-evenly gap-5">

            <div className="flex w-full justify-between text-white text-md tracking-wider items-center">
                <div className="flex flex-col items-center gap-5 tracking-widest lg:flex-col-reverse lg:text-2xl lg:gap-10">
                    <div id="player" className="relative">
                        <div className="player-victor border-white border-[40px] lg:border-[65px] rounded-full h-[calc(100%+40px)] w-[calc(100%+40px)] lg:h-[calc(100%+65px)] lg:w-[calc(100%+65px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 pointer-events-none" />
                        <div className="player-victor border-white border-[80px] lg:border-[65px] rounded-full h-[calc(100%+80px)] w-[calc(100%+80px)] lg:h-[calc(100%+130px)] lg:w-[calc(100%+130px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 pointer-events-none" />
                        <div className="player-victor border-white border-[120px] lg:border-[65px] rounded-full h-[calc(100%+120px)] w-[calc(100%+120px)] lg:h-[calc(100%+195px)] lg:w-[calc(100%+195px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 pointer-events-none" />
                        <div className="z-50 relative"><PlayOption sizeStyle="selected" option={playerSelection} /></div>
                    </div>
                    <p>YOU PICKED</p>
                </div>

                <div className="flex-col gap-5 hidden lg:flex">
                    <h1 className="text-white text-6xl font-semibold">YOU {outcome}</h1>

                    <Button clicked={() => reset()} text="PLAY AGAIN" />
                </div>

                <div className="flex flex-col items-center gap-5 tracking-widest lg:flex-col-reverse lg:text-2xl lg:gap-10 ">
                    <div id="house" className="relative">
                        <div className="house-victor border-white border-[40px] lg:border-[65px] rounded-full h-[calc(100%+40px)] w-[calc(100%+40px)]  lg:h-[calc(100%+65px)] lg:w-[calc(100%+65px)]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 pointer-events-none" />
                        <div className="house-victor border-white border-[80px] lg:border-[130px] rounded-full h-[calc(100%+80px)] w-[calc(100%+80px)] lg:h-[calc(100%+130px)] lg:w-[calc(100%+130px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 pointer-events-none" />
                        <div className="house-victor border-white border-[120px] lg:border-[195px] rounded-full h-[calc(100%+120px)] w-[calc(100%+120px)] lg:h-[calc(100%+195px)] lg:w-[calc(100%+195px)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 pointer-events-none" />
                        <div className="z-50 relative"><PlayOption sizeStyle="selected" option={robotSelection} /></div>
                    </div>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>

            <div className="flex flex-col gap-5 lg:hidden">
                <h1 className="text-white text-6xl font-semibold">YOU {outcome}</h1>

                <Button clicked={() => reset()} text="PLAY AGAIN" />
            </div>
        </div>
    )
}

export default Play