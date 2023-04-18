import React from 'react'
import { ProcessesContext } from '../../../../../../providers/processesProvider'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Varka = () => {

    const { processes, setProcesses } = React.useContext(ProcessesContext);
    const [article, setArticle] = React.useState('');
    const [boilerNumber, setBoilerNumber] = React.useState('');
    

    const addProcess = (article, boilerNumber) => {
        setProcesses([
            {
                _id: new Date(),
                title: 'Варка',
                article,
                boilerNumber,
                isProgress: false,
                isComplete: false

            },
            ...processes,
        ])
    };

    return (

        <div className='container mx-auto h-screen flex flex-col items-center justify-center align-middle '>
            <div className='max-w-xl w-full min-w-fit  mx-auto rounded-2xl bg-gray-600 shadow-xl shadow-gray-950  p-10'>

                <form>
                    <div className='flex w-full'>
                        <Link to='/Process'>
                            <div className='bg-teal-500 flex w-12 h-12 rounded-full items-center justify-center transition duration-200 hover:bg-teal-500 hover:scale-105 '>
                                <AiOutlineArrowLeft size={20} />
                            </div>
                        </Link>
                        <h1 className='mx-auto text-zinc-200 font-bold text-3xl'>Создание процесса варки</h1>
                    </div>
                    <div className='mt-10 flex flex-row border-b-2  border-b-slate-400 transition duration-200 hover:border-b-slate-200 mb-5 cursor-default'>
                        <input className='outline-none text-2xl text-zinc-200 mb-1 w-full' placeholder='Артикул'
                            type='text'
                            onChange={e => setArticle(e.target.value)}
                            value={article}
                        />
                    </div>
                    <div className='flex flex-row border-b-2  border-b-slate-400 transition duration-200 hover:border-b-slate-200 mb-5 cursor-default'>
                        <input className='outline-none text-2xl text-zinc-200 mb-1 w-full' placeholder='Номер котла'
                            type='text'
                            onChange={e => setBoilerNumber(e.target.value)}
                            value={boilerNumber}
                    
                        />
                    </div>
                    <div className='flex w-full'>
                        <Link to='/Process' className='bg-teal-400 uppercase text-white text-xl rounded-xl font-bold  shadow py-3 px-3 mx-auto transition duration-200 hover:bg-teal-500 hover:scale-105'
                            onClick={() => (addProcess(article,boilerNumber))}>
                            Добавить процесс
                        </Link>
                    </div>
                </form>
            </div>

        </div>

    )

}

export default Varka;