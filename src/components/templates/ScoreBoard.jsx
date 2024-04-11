import Score from '../Score'
import OptionsList from '../OptionsList'

function ScoreBoard() {
    return (
        <div className="rounded-xl border-4 border-HeaderOutline flex justify-between p-3.5 lg:p-5 w-full lg:max-w-[700px] lg:w-full m-auto">
            <OptionsList />

            <Score />
        </div>
    )
}

export default ScoreBoard