import PlayOption from "./PlayOption"
import Button from "./utils/Button"

function Play({ playerSelection, robotSelection, outcome, reset }) {
    return (
        <div className="w-full flex flex-col items-center h-full justify-evenly gap-5">

            <div className="flex w-full justify-between text-white text-md tracking-wider items-center">
                <div className="flex flex-col items-center gap-5 tracking-widest lg:flex-col-reverse lg:text-2xl lg:gap-10">
                    <PlayOption sizeStyle="selected" option={playerSelection} />
                    <p>YOU PICKED</p>
                </div>

                <div className="flex-col gap-5 hidden lg:flex">
                    <h1 className="text-white text-6xl font-semibold">YOU {outcome}</h1>

                    <Button clicked={() => reset()} text="PLAY AGAIN" />
                </div>

                <div className="flex flex-col items-center gap-5 tracking-widest lg:flex-col-reverse lg:text-2xl lg:gap-10 ">
                    <PlayOption sizeStyle="selected" option={robotSelection} />
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