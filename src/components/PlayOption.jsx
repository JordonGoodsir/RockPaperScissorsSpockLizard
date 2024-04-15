function PlayOption({ option, sizeStyle = 'default' }) {

    const style = {
        default: 'p-3 border-[10px] w-[85px] h-[85px] lg:p-6 lg:border-[15px] lg:w-[145px] lg:h-[145px]',
        selected: 'p-5 border-[15px] w-[130px] h-[130px] lg:p-14 lg:border-[35px] lg:h-[300px] lg:w-[300px]'
    }

    // const borderColor = `border-${option.charAt(0).toUpperCase() + option.slice(1)}Gradient`

    return (
        <div className={`rounded-full flex items-center justify-center bg-white border-ScissorsGradient` + ' ' + style[sizeStyle]} >
            <img className="h-full w-full" src={`/images/play-options/${option}.svg`} />
        </div>
    )
}

export default PlayOption