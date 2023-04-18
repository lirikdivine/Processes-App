import React from 'react'
import LeftMenu from '../leftMenu/leftMenu.jsx'




function Header(props) {
    const [nav, setNav] = React.useState(false);





    return (
        <>

            <div className='bg-teal-800 h-20'>
                <div className='container mx-auto'>
                    <div className='flex flex-row items-center h-20'>
                        <button onClick={() => (setNav(true))}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="min-w-fit w-16 h-16 fill-teal-400 hover:fill-teal-300 ">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {props.children}
                    </div>
                </div>
            </div>
            {nav && (
                <LeftMenu setNav={setNav} />
            )}

        </>
    );
}

export default Header;