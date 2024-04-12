import { useState } from 'react'
import ScoreBoard from './components/templates/ScoreBoard'
import PlayingField from './components/templates/PlayingField'
import Button from './components/utils/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center bg-RadialGradient p-8 pb-16">

      <div className='flex flex-col max-w-screen-lg w-full overflow-hidden h-full items-center'>
        <div className='basis-auto w-full'><ScoreBoard /></div>

        <div className="basis-auto w-full grow-1 shrink-1 overflow-hidden h-full flex items-center justify-center">
        <PlayingField />
        </div>

        <div className='basis-auto'><Button text="RULES" type="secondary"/></div>

      </div>
    </main>
  )
}

export default App
