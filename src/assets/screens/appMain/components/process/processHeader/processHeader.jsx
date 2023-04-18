import React from 'react'
import RightMenu from '../../rightMenu/rightMenu.jsx'

function ProcessHeader() {
    const [menu, setMenu] = React.useState(false);


    return (
        <>
                    <div className='flex flex-row w-full items-center h-20 mx-auto justify-between'>
                        <h1 className='font-bold text-zinc-200 text-4xl mx-auto '>
                            Процессы
                        </h1>
                        <button onClick={() => (setMenu(true))}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-fit w-16 h-16 fill-teal-400 hover:fill-teal-300 cursor-pointer">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </div>
            {menu && (
                <RightMenu setMenu={setMenu} />
            )}

        </>
    );
}

export default ProcessHeader;