import logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <header className="flex flex-col justify-center items-center mb-[4em]">
                <div>
                    <img className='w-[250px]' src={logo} alt="LSUDS LOGO" />
                </div>
                <h1 className="text-2xl font-bold pt-1 text-blue tracking-[0.3em] mobile:text-xl">LSUDS APPLICATION</h1>
            </header>
        </>
    )
}

export default Header