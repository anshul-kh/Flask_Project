import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Close } from "../../assets";
import { useLocation } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState(false);
  
  //for current location
  const location = useLocation();

  //handle onclick for mobile-devices
  const handleClick = (route:string) =>{
    if(location.pathname === route){
        setOpen((open) => !open)
    }
  }

  return (
    <div className='w-full top-0 flex flex-col md:flex-row justify-center items-center md:px-0 px-5 py-5'>
          
        <div className='flex justify-between items-center w-full md:w-1/2 h-14 rounded-full bg-anti-flash_white-700 px-7 '>
        <div className='flex flex-row justify-center items-center gap-7'>
          <Link  to={'/'} className='text-black font-bold font-sans'>
            DevURL
          </Link>

          <div className='hidden md:flex flex-row justify-center items-center gap-5 font-sans font-semibold'>
            <Link to={'/feature'}>Features</Link>
            <Link to={'/about'}>About</Link>
          </div>
          </div>

          <div className='hidden md:flex flex-row justify-center items-center gap-5 font-semibold' >
          <Link to={'/auth'} className='text-black  w-20 drop-shadow-3 h-9 flex justify-center items-center rounded-full'>Login</Link>
            <Link to={'/auth'} className='text-anti-flash_white bg-black w-20 drop-shadow-3 h-9 flex justify-center items-center rounded-full'>SignUp</Link>
          </div>

 {/* hamburger for mobile-devices */}
 <div
        onClick={() => {
          setOpen((open) => !open);
        }}
        className="flex md:hidden justify-center items-center"
      >
        {/* when drawer is open  */}
        <img
          src={Menu}
          alt="more"
          className={`w-8 h-8 ${open ? "hidden" : "flex"}`}
        />

        {/* when drawer is closed  */}
        <img
          src={Close}
          alt="more"
          className={`w-6 h-6 ${!open ? "hidden" : "flex"}`}
        />
      </div>
          
        </div>

          
  {/* drawer for mobile devices */}

  {open && (
        <div className="w-11/12 h-[75vh] flex flex-col justify-start py-20 items-center z-10 gap-10 rounded-xl bg-anti-flash_white-700 mt-7">
          <h1 className="text-4xl font-semibold text-black border-b border-5 w-full flex justify-center items-center">
            Explore Routes
          </h1>

          <div className="text-black text-3xl z-96 flex flex-col justify-center items-center w-full mt-5 font-semibold">
            <Link
              className="border-b border-t border-3 w-full p-2 flex justify-center items=center"
              to={"/"}
              onClick={()=>handleClick('/')}
            >
              Home
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/feature"}
              onClick={()=>handleClick('/feature')}
            >
              Feature
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/about"}
              onClick={()=>handleClick('/about')}
            >
              About
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/auth"}
              onClick={()=>handleClick('/auth')}
            >
              Login
            </Link>

            <Link
              className="border-b border-3 w-full p-2 flex justify-center items=center"
              to={"/contact"}
              onClick={()=>handleClick('/auth')}
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar