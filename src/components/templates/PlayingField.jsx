import PlayOptionsSelection from "../PlayOptionsSelection"
import Play from "../Play"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../features/score'
import { gsap } from "gsap";

function PlayingField() {
    const [playerSelection, setPlayerSelection] = useState('')
    const [robotSelection, setRobotSelection] = useState('none')
    const [outcome, setOutcome] = useState('')
    const dispatch = useDispatch()

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


        setTimeout(() => {
            let tmpOutcome = ''
            setRobotSelection(robotChoice)

            if (selection === robotChoice) {
                setOutcome('DRAW')
                tmpOutcome = 'DRAW'
            } else if (winConditions[selection].includes(robotChoice)) {
                setOutcome('WIN')
                tmpOutcome = 'WIN'

                const currentScore = localStorage.getItem('score')

                if (currentScore) {
                    localStorage.setItem('score', Number(currentScore) + 1)
                } else {
                    localStorage.setItem('score', '1')
                }

                dispatch(increment())

            } else {
                setOutcome('LOSE')
                tmpOutcome = 'LOSE'
            }

            if (tmpOutcome !== 'DRAW') {

                const victorDivs = gsap.utils.toArray(`.${tmpOutcome === 'WIN' ? 'player' : 'house'}-victor`);

                victorDivs.forEach((element, index) => {
                    gsap.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: (0.08 - (index * 0.020)), duration: 0.3, ease: "power4.out" })
                })
            }
        }, 1000)
    }

    const resetPlay = () => {
        const victorDivs = gsap.utils.toArray(`.${outcome === 'WIN' ? 'player' : 'house'}-victor`);
        victorDivs.forEach((element) => {
            gsap.set(element, { opacity: 0 })
        })


        setPlayerSelection('')
        setRobotSelection('none')
        setOutcome('')
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