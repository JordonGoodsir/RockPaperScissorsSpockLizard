import '../App.css'


function PlayOption({ option, sizeStyle = 'default' }) {

    const style = {
        default: {
            inner: 'p-3 w-[75px] h-[75px] lg:p-6 lg:w-[115px] lg:h-[115px]',
            outer: 'w-[85px] h-[85px] lg:w-[145px] lg:h-[145px]'
        },
        selected: {
            inner: 'p-5 w-[115px] h-[115px] lg:p-14 lg:h-[265px] lg:w-[265px]',
            outer: 'w-[130px] h-[130px] lg:w-[300px] lg:h-[300px]'
        }
    }

    const borderColors = { 
        rock: 'bg-RockGradient',
        scissors: 'bg-ScissorsGradient',
        paper: 'bg-PaperGradient',
        spock: 'bg-SpockGradient',
        lizard: 'bg-LizardGradient'
    }

    return (
        <div className={`flex items-center justify-center rounded-full test-outside ${borderColors[option]} ${style[sizeStyle].outer}`}>
            <div className={`rounded-full flex items-center justify-center bg-white shadow-[inset_0_8px_5px_0px_rgba(0,0,0,0.25)] ${style[sizeStyle].inner}`} >
                <img className="h-full w-full" src={`/images/play-options/${option}.svg`} />
            </div>
        </div>
    )
}

export default PlayOption