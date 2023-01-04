import logo from '../images/download.png'

export default function Header(){
    return (
        <header className='header-container'>
            <img src={logo} alt="" className='header-img' />
            <h2 className='header-title'>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}