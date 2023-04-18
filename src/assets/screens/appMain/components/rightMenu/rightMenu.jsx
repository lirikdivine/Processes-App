import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'





function RightMenu({ setMenu }) {


    return (
        <div className='w-screen h-screen max-w-2xl rounded-l-xl bg-teal-500 absolute top-0 right-0 z-50 '>
            <div className='flex flex-row flex-end justify-end items-center '>
                <button className='mr-2 mt-2' onClick={() => setMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav className='mx-4 mt-4'>
                <ul className='gap-5 flex flex-col'>
                    <Link to='/Boiling'>
                        <li className='bg-teal-800 hover:bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-pointer'>

                            <p className='font-bold text-zinc-200 text-xl mx-auto'>Варка</p>
                            <AiOutlinePlus size={30} className='mr-5' />

                        </li>
                    </Link>


                </ul>

            </nav>
        </div>


    );
}

export default RightMenu;