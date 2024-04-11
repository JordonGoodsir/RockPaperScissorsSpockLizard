function PlayOption({ option, sizeStyle = 'default' }) {

    const good = 'p-4 w-[85px] h-[85px]'

    const style = { 
        default: 'p-4 border-[10px] xl-1/2:border-[15px] w-[85px] h-[85px] xl-1/2:w-[145px] xl-1/2:h-[145px]',
        selected: ''
    }

    



    const borderColor = `border-${option.charAt(0).toUpperCase() + option.slice(1)}Gradient`

    return (
      <div className={`rounded-full flex items-center justify-center bg-white border-ScissorsGradient` + borderColor + ' ' + style[sizeStyle] } >
        <img src={`/images/play-options/${option}.svg`} />
      </div>
    )
  }
  
  export default PlayOption