import Score from '../Score'
import OptionsList from '../OptionsList'

function ScoreBoard() {
    return (
        <div className="rounded-xl border-4 border-HeaderOutline flex justify-between p-3.5 xl-1/2:p-5 w-full xl-1/2:max-w-[700px] m-auto">
            <OptionsList />

            <Score />
        </div>
    )
}

export default ScoreBoard