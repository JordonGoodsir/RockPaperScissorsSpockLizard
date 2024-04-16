import PlayOption from "./PlayOption"
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

function PlayOptionsSelection({ select }) {

  useLayoutEffect(() => {
    const options = gsap.utils.toArray('.piece-option');
    const pieceTL = gsap.timeline()


    options.forEach((element, index) => {
      pieceTL.fromTo(element, { opacity: 0, scale: 0 }, { opacity: 1, duration: 0.2, scale: 1 })
    })
  }, [])

  const optionStyles = {
    scissors: 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    paper: 'absolute top-[20%] right-0 translate-x-1/2',
    rock: 'absolute bottom-0 right-0 translate-y-1/2',
    lizard: 'absolute bottom-0 left-0 translate-y-1/2',
    spock: 'absolute top-[20%] left-0 -translate-x-1/2',
  }

  return (
    <div className="flex flex-col relative w-[200px] lg:w-[350px]">
      <img src="../../public/images/pentagon.svg" />
      {Object.keys(optionStyles).map((option) => {
        return (
          <div onClick={() => select(option)} className={'cursor-pointer piece-option ' + optionStyles[option]} key={`${option}_selector`}><PlayOption option={option} /></div>
        )
      })}
    </div>
  )
}

export default PlayOptionsSelection