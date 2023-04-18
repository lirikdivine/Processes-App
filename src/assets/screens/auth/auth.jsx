import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import {AuthContext} from '../../providers/authProvider'
import * as yup from "yup";

import styles from './auth.module.css';


const schema = yup.object({
    email: yup.string('').required('Обязательное поле'),
    password: yup.string('').required('Обязательное поле'),
});


function Auth() {

    const navigate = useNavigate();
    const {user,setUser} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data),
        navigate("/Profile"),
        console.log(user)
        
    }

    

    return (



        <div className={styles.wrapper}>
            <div className='mx-5'>
                <div className={styles.card}>
                    <h1 className='flex justify-center text-4xl text-zinc-200 font-semibold mb-8'>Вход</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="h-8"><p className="text-lg text-zinc-300">{errors.email?.message}</p></div>
                            <label className={styles.label}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2 mr-2 fill-teal-400 min-w-max">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input className={styles.input} type='eamil' placeholder="Почта"
                                    {...register("email")}
                                />
                            </label>
                        </div>
                        <div>
                            <div className="h-8"><p className="text-lg text-zinc-300">{errors.password?.message}</p></div>
                            <label className={styles.label}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2 mr-2 fill-teal-400 min-w-max">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <input className={styles.input} type='password' placeholder="Пароль"
                                    {...register("password")}
                                />
                            </label>
                        </div>
                        <div className='flex flex-row mb-10 justify-between '>
                            <a className='text-zinc-300 font-medium text-2xl cursor-pointer transition duration-200 hover:text-zinc-100'>
                                Забыли пароль?
                            </a>
                            <Link to='/Registration'>
                                <div className='text-zinc-300 font-medium text-2xl cursor-pointer transition duration-200 hover:text-zinc-100'>
                                    Регистрация
                                </div>
                            </Link>
                        </div>
                        <button className={styles.button}>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Auth;