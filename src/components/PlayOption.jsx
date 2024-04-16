import '../App.css'


function PlayOption({ option, sizeStyle = 'default' }) {

    const style = {
        default: {
            inner: 'p-3 w-[65px] h-[65px] lg:p-6 lg:w-[115px] lg:h-[115px] ',
            outer: 'w-[85px] h-[85px] lg:w-[145px] lg:h-[145px] shadow-[0_5px_0px_0px_rgb(156,23,52)] lg:shadow-[0_8px_0px_0px_rgb(156,23,52)]'
        },
        selected: {
            inner: 'p-5 w-[100px] h-[100px] lg:p-14 lg:h-[225px] lg:w-[225px]',
            outer: 'w-[130px] h-[130px] lg:w-[300px] lg:h-[300px] shadow-[0_8px_0px_0px_rgb(156,23,52)] lg:shadow-[0_15px_0px_0px_rgb(156,23,52)]'
        }
    }

    const borderColors = {
        rock: 'bg-RockGradient shadow-[rgb(156,23,52)] lg:shadow-[rgb(156,23,52)]',
        scissors: 'bg-ScissorsGradient shadow-[rgb(190,110,38)] lg:shadow-[rgb(190,110,38)]',
        paper: 'bg-PaperGradient shadow-[rgb(44,69,189)] lg:shadow-[rgb(44,69,189)]',
        spock: 'bg-SpockGradient shadow-[rgb(45,144,171)] lg:shadow-[rgb(45,144,171)]',
        lizard: 'bg-LizardGradient shadow-[rgb(92,53,166)] lg:shadow-[rgb(92,53,166)]',
        none: 'bg-DarkText'
    }

    return (
        <div className={`flex items-center justify-center rounded-full ${borderColors[option]} ${style[sizeStyle].outer}`}>
            <div className={`rounded-full flex items-center justify-center bg-white shadow-[inset_0_8px_5px_0px_rgba(0,0,0,0.25)] ${style[sizeStyle].inner}`} >
                {option ?
                    <img className="h-full w-full" src={`/images/play-options/${option}.svg`} />
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default PlayOption