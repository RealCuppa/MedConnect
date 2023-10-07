import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Button from '../Button/Button';

function Header() {
  const navigate = useNavigate();
  let Links =[
    {name:"Home",link:"/"},
    {name:"Know Us",link:"/about"},
    {name:"Services",link:"/services"},
    {name:"Contact",link:"/contact"},
  ];
  let [open, setOpen] =useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
       <div className='flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <span>MedConnect</span>
        </div>
        <div onClick={()=>setOpen(!open)} className='flex items-center cursor-pointer md:hidden w-7 h-7'>
            {
                open ?
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>) :
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>)
            }
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {
                Links.map((link) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                </li>))
            }
            <Link to="/login" className="block md:inline-block text-gray-800 hover:text-blue-400 duration-500 md:ml-8 md:mr-4 md:my-0 my-7 font-semibold">Login</Link>
            <Button className='btn bg-[#ffb800] text-white font-semibold px-3 py-1 rounded duration-500 md:static' label="Get Started" onclick={() => navigate("/register")}></Button>
        </ul>
       </div>
    </div>
  );
}

export default Header;