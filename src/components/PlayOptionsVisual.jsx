import PlayOption from "./PlayOption"

const options = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock'
]

function PlayOptionsVisual() {
  return (
    <div className="flex flex-col w-fit relative w-[200px]">
      <img src="../../public/images/pentagon.svg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"><PlayOption option="scissors" /></div>
      <div className="absolute top-[20%] right-0 translate-x-1/2"><PlayOption option="paper" /></div>
      <div className="absolute top-[20%] left-0 -translate-x-1/2"><PlayOption option="spock" /></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2"><PlayOption option="lizard" /></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2"><PlayOption option="rock" /></div>




      {/* {options.map((option) => <PlayOption option={option} />)} */}
    </div>
  )
}

export default PlayOptionsVisual