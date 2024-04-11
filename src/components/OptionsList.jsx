function OptionsList() {
    const options = [ 
        'ROCK',
        'PAPER',
        'SCISSORS',
        'LIZARD',
        'SPOCK'
    ]

    return (
      <div className="text-white flex flex-col font-medium text-lg leading-4 xl-1/2:text-3xl xl-1/2:leading-6 justify-center">
        {options.map((option) => <p>{option}</p>)}
      </div>
    )
  }
  
  export default OptionsList