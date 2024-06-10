import { Hero_1,Hero_2 } from '../../assets' 
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center h-full md:h-[85vh] md:py-0 py-14'>
        <img src={Hero_1} className='hidden md:flex rotate-[5deg] h-[50vh]' alt="hero" />

        <div className='flex justify-center items-center flex-col md:w-2/6 gap-10 '>
            <h1 className='text-black font-bold text-6xl flex justify-center items-center px-7'>
                Create Your Developer Profile In Seconds
            </h1>

            <div className='flex justify-start items-center w-full px-7'>
                <input type="text"  className='w-9/12 outline-none h-14 rounded-xl px-7' placeholder='Select Your Url Here' />
                <Link className='w-2/12 h-14 rounded flex justify-center items-center text-anti-flash_white-700 bg-black' to={'/'}>SUBMIT</Link>
            </div>

            <h1>
                It's free and easy to use
            </h1>
        </div>

        <img src={Hero_2} className='-rotate-[5deg] md:h-[50vh] md:w-auto w-11/12' alt="hero" />
    </div>
  )
}

export default Hero