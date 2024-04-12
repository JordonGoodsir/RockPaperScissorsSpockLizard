import PlayOptionsSelection from "../PlayOptionsSelection"
import Play from "../Play"
import { useState } from 'react'

function PlayingField() {
    const [playerSelection, setPlayerSelection] = useState('')
    const [robotSelection, setRobotSelection] = useState('')
    const [outcome, setOutcome] = useState('')

    const winConditions = {
        scissors: ['paper', 'lizard'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    }

    const calcOutcome = (selection) => {
        setPlayerSelection(selection)
        const winConditionKeys = Object.keys(winConditions)
        const robotChoice = winConditionKeys[Math.floor(Math.random() * winConditionKeys.length)]
        setRobotSelection(robotChoice)

        if (selection === robotChoice) {
            setOutcome('DRAW')
        } else if (winConditions[selection].includes(robotChoice)) {
            setOutcome('WIN')

            const currentScore = localStorage.getItem('score')
            console.error(currentScore)
            
            if(currentScore) { 
                localStorage.setItem('score', Number(currentScore) + 1)
            } else { 
                localStorage.setItem('score', '1')
            }
            // plus score
        } else {
            setOutcome('LOSE')
        }
    }

    const resetPlay = () => {
        setPlayerSelection('')
        setRobotSelection('')
    }


    if (!playerSelection) {
        return (
            <PlayOptionsSelection select={(selection) => calcOutcome(selection)} />
        )
    } else {
        return (
            <Play playerSelection={playerSelection} reset={() => resetPlay()} outcome={outcome} robotSelection={robotSelection} />
        )
    }
}

export default PlayingField