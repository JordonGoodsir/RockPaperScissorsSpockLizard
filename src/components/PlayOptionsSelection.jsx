import PlayOption from "./PlayOption"

function PlayOptionsSelection() {
  return (
    <div className="flex flex-col relative w-[200px] lg:w-[350px]">
      <img src="../../public/images/pentagon.svg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"><PlayOption option="scissors" /></div>
      <div className="absolute top-[20%] right-0 translate-x-1/2"><PlayOption option="paper" /></div>
      <div className="absolute top-[20%] left-0 -translate-x-1/2"><PlayOption option="spock" /></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2"><PlayOption option="lizard" /></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2"><PlayOption option="rock" /></div>
    </div>
  )
}

export default PlayOptionsSelection