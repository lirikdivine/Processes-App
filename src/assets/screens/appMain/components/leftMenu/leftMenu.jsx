import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftMenu({ setNav }) {
    return (
        <div className='w-screen h-screen max-w-2xl rounded-r-xl bg-teal-500 absolute top-0 z-50 '>
            <nav className='mx-4 mt-4'>
                <ul className='gap-5 flex flex-col'>

                    <li>
                        <NavLink to='/Profile' onClick={() => (setNav(false))} className={({ isActive }) => isActive ? 'bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-default' : 'bg-teal-800 hover:bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-pointer'}>
                            <p className='font-bold text-zinc-200 text-xl mx-auto'>
                                Профиль
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Process' onClick={() => (setNav(false))} className={({ isActive }) => isActive ? 'bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-default' : 'bg-teal-800 hover:bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-pointer'}>

                            <p className='font-bold text-zinc-200 text-xl mx-auto'>
                                Процессы
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Archive' onClick={() => (setNav(false))} className={({ isActive }) => isActive ? 'bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-default' : 'bg-teal-800 hover:bg-teal-600 h-14 w-full rounded-md flex align-middle items-center cursor-pointer'}>
                            <p className='font-bold text-zinc-200 text-xl mx-auto'>
                                Архив
                            </p>
                        </NavLink>
                    </li>


                </ul>

            </nav>
        </div>
    );
}

export default LeftMenu;