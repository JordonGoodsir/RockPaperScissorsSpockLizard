import PlayOption from "./PlayOption"

const optionStyles = {
  scissors: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  paper: 'absolute top-[20%] right-0 translate-x-1/2',
  rock: 'absolute bottom-0 right-0 translate-y-1/2',
  spock: 'absolute top-[20%] left-0 -translate-x-1/2',
  lizard: 'absolute bottom-0 left-0 translate-y-1/2'
}

function PlayOptionsSelection() {
  return (
    <div className="flex flex-col relative w-[200px] lg:w-[350px]">
      <img src="../../public/images/pentagon.svg" />
      {Object.keys(optionStyles).map((option) => {
        return (
          <div className={optionStyles[option]}><PlayOption option={option} /></div>
        )
      })}
    </div>
  )
}

export default PlayOptionsSelection