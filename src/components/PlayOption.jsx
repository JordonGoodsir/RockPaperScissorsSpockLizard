function PlayOption({ option, sizeStyle = 'default' }) {

    const good = 'p-4 w-[85px] h-[85px]'

    const style = {
        default: 'p-4 border-[10px] lg:border-[15px] w-[85px] h-[85px] lg:w-[145px] lg:h-[145px]',
        selected: ''
    }





    const borderColor = `border-${option.charAt(0).toUpperCase() + option.slice(1)}Gradient`

    return (
        <div className={`rounded-full flex items-center justify-center bg-white border-ScissorsGradient` + borderColor + ' ' + style[sizeStyle]} >
            <img src={`/images/play-options/${option}.svg`} />
        </div>
    )
}

export default PlayOption