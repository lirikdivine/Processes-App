import { useContext } from "react";
import { AuthContext } from '../../../../providers/authProvider'

function Profile() {

    const { user } = useContext(AuthContext)

    return (
        <>
            <div className='container mx-auto'>
                <div className="flex flex-row">
                    <div className='bg-teal-600 w-36 h-36 mt-5 rounded-xl flex align-middle justify-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-32 h-32 stroke-zinc-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                    <div className="font-bold text-3xl text-zinc-200 mt-10 ml-10">
                        {user}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;