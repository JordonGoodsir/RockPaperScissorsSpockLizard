function Button({ text, type = "primary", clicked = () => { } }) {

    const types = {
        primary: 'bg-white text-DarkText',
        secondary: 'text-white'
    }

    return (
        <button onClick={() => clicked()} className={'cursor-pointer tracking-widest min-h-[45px] h-[45px] text-lg font-semibold rounded-lg border-white border px-10 w-full ' + types[type]} >
            {text}
        </button>
    )
}

export default Button