import { useState } from 'react'
import ScoreBoard from './components/templates/ScoreBoard'
import PlayOption from './components/PlayOption'
import PlayOptionsVisual from './components/PlayOptionsSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center bg-RadialGradient p-8">

      <div className='flex flex-col max-w-screen-lg w-full overflow-hidden justify-center h-full items-center pb-96'>
        <ScoreBoard />
        {/* <PlayOption option="scissors"/>/ */}
        <PlayOptionsVisual />
        
      </div>



      {/* score board */}

      {/* active play */}

      {/* rules */}


      {/* components */}
      {/* button component */}
      {/* playOption */}
      {/* scoreboard */}
    </main>
  )
}

export default App
