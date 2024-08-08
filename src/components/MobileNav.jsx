import closeIcon from '../assets/icons/close.png'
import { navLinks } from '../constants'

const MobileNav = ({handleClick}) => {
  return (
    <>
    <img src={closeIcon} alt="close" className='absolute w-8 right-[60px] top-[2rem]' onClick={handleClick} />
    <h1 className='text-center text-3xl pt-7 font-bold bg-black text-white'>Navigation</h1>
    <div className='w-full h-[100vh] z-150 bg-black text-white flex flex-col items-center '>
        <ul className='w-full flex flex-col text-center pt-5'>
            {navLinks.map((link) => (
                <li key={link.label} className='py-5 w-[full] text-2xl' onClick={handleClick}><a href={link.href}>{link.label}</a></li>
            ))}
        </ul>
        
    </div>
    </>
  )
}

export default MobileNav