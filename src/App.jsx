import { useState } from 'react'
import ScoreBoard from './components/templates/ScoreBoard'
import PlayingField from './components/templates/PlayingField'
import Button from './components/utils/Button'
import RulesModal from './components/modals/RulesModal'

function App() {
  const [modalStatus, setModalStatus] = useState(false)

  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center bg-RadialGradient p-8 pb-16 select-none">

      <div className='flex flex-col max-w-screen-lg w-full h-full items-center'>
        <div className='basis-auto w-full'><ScoreBoard /></div>

        <div className="basis-auto w-full grow-1 shrink-1 h-full flex items-center justify-center">
          <PlayingField />
        </div>

        <div className='basis-auto flex justify-center lg:justify-end w-full'>
          <div className="w-fit">
            <Button clicked={() => setModalStatus(true)} text="RULES" type="secondary" />
          </div>
        </div>

      </div>

      <RulesModal isOpen={modalStatus} onClose={() => setModalStatus(false)} />
    </main>
  )
}

export default App
