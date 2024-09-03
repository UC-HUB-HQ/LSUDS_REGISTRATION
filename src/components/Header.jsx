import logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <header className="flex flex-col justify-center items-center mb-[4em]">
                <div>
                    <img className='w-[250px] mx-auto' src={logo} alt="LSUDS LOGO" />
                </div>
                <h1 className="text-2xl font-bold pt-1 text-blue tracking-[0.3em] mobile:text-xl text-center">LASU DEBATE SOCIETY APPLICATION FORM</h1>
            </header>
        </>
    )
}

export default Header