const Button = ({ color, children }) => {
    const currentClasses = color === 'blue' ? 'bg-blue-50 text-white' : 'bg-white text-blue-50 hover:text-white'

    return (
        <button className={`${currentClasses} leading py-[12px] px-[28px] uppercase font-bold rounded-[3px] transition ease-in-out duration-150 hover:bg-red-50`}>
            {children}
        </button>
    )
}

export default Button