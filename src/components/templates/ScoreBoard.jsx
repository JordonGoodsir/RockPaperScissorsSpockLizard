import Score from '../Score'
import OptionsList from '../OptionsList'
import { useState, useEffect } from 'react'


function ScoreBoard() {

    const [localScore, setLocalScore] = useState(localStorage.getItem('score') || 0)

    useEffect(() => {
        setLocalScore(localStorage.getItem('score'))
    }, [localStorage.getItem('score')]);

    return (
        <div className="rounded-xl border-4 border-HeaderOutline flex justify-between p-3.5 lg:p-5 w-full lg:max-w-[700px] lg:w-full m-auto">
            <OptionsList />

            <Score totalScore={Number(localScore)} />
        </div>
    )
}

export default ScoreBoard