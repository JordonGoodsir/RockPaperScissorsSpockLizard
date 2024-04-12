function PlayOption({ option, sizeStyle = 'default' }) {

    const style = {
        default: 'p-4 border-[10px] lg:border-[15px] w-[85px] h-[85px] lg:w-[145px] lg:h-[145px]',
        selected: 'p-4 border-[15px] w-[130px] h-[130px]'
    }

    // const borderColor = `border-${option.charAt(0).toUpperCase() + option.slice(1)}Gradient`

    return (
        <div className={`rounded-full flex items-center justify-center bg-white border-ScissorsGradient` + ' ' + style[sizeStyle]} >
            <img src={`/images/play-options/${option}.svg`} />
        </div>
    )
}

export default PlayOption