function PlayOption({ option }) {

    const borderColor = `border-${option.charAt(0).toUpperCase() + option.slice(1)}Gradient`

    return (
      <div className={`rounded-full border-[10px] flex items-center justify-center p-4 bg-white w-[85px] h-[85px] border-ScissorsGradient` + borderColor} >
        <img src={`/images/play-options/${option}.svg`} />
      </div>
    )
  }
  
  export default PlayOption