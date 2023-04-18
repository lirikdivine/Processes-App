

import { useContext } from 'react'
import { CiPause1, CiPlay1 } from 'react-icons/ci'
import cn from 'classnames'
import {ProcessesContext} from '../../../../providers/processesProvider' 






function Process() {
    
    const {processes, setProcesses} = useContext(ProcessesContext)

    const changeProcess = (id) => {
        const copy = [...processes]
        const current = copy.find(p => p._id === id)
        current.isProgress = !current.isProgress
        setProcesses(copy)
        console.log(processes)
    }
    const removeProcess = id => {
        setProcesses([...processes].filter(p => p._id !== id))
    }


    return (
        <>
            <div className='container mx-auto'>
                {processes.map(process =>
                    <div key={process._id} className={cn('w-full max-h-fit flex flex-col h-36 bg-teal-600 mt-6 rounded-xl shadow-xl shadow-slate-950 border-2 border-zinc-900',
                        {
                            'bg-teal-700': !process.isProgress,
                        }
                    )}
                    >
                        <div className='flex flex-row ml-2 mt-2'>

                            <h2 className='font-bold text-xl text-zinc-200 '>
                                {process.title}
                            </h2>

                            {process.isProgress ? (
                                <h3 className='font-bold text-base text-zinc-200 flex align-middle justify-center w-full' >
                                    В процессе
                                </h3>
                            ) : (
                                <h3 className='font-bold text-base text-zinc-200 flex align-middle justify-center w-full'>
                                    На паузе
                                </h3>
                            )}

                        </div>
                        <div className='flex flex-row h-full w-full max-h-fit'>
                            <div className='flex flex-col justify-end h-full w-1/5' >
                                {process.isProgress ? (
                                    <button onClick={() => changeProcess(process._id)} className='bg-teal-700 rounded-full w-14 h-14 flex justify-center items-center border-zinc-900 border-2 mb-3 ml-2'>
                                        <CiPause1 size={30} />
                                    </button>
                                ) : (

                                    <button onClick={() => changeProcess(process._id)} className=' bg-teal-500 rounded-full w-14 h-14 flex justify-center items-center border-zinc-900 border-2 mb-3 ml-2 '>
                                        <CiPlay1 size={30} />
                                    </button>
                                )}
                            </div>
                            <div className='flex flex-col ml-5 gap-2 w-max' >
                                <div className='font-bold text-base text-zinc-200'>
                                    Артикул: {process.article}
                                </div>
                                <div className='font-bold text-base text-zinc-200'>
                                    Котел: {process.boilerNumber}
                                </div>
                            </div>
                            <div className='flex flex-row max-w-full w-3/4  items-end justify-end'>
                                <button className='bg-teal-700 uppercase text-zinc-300 text-sm rounded-xl font-bold  shadow py-2 px-2 transition duration-200 hover:bg-teal-500 hover:text-zinc-200 mb-3 mr-3 border-zinc-900 border-2'
                                    onClick={()=>removeProcess(process._id)}
                                >
                                    Завершить процесс
                                </button>
                            </div> 
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Process;