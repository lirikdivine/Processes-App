import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './registration.module.css'

const schema = yup.object({
    name: yup.string('').required('Обязательное поле'),
    email: yup.string().required('Обязательное поле'),
    password: yup.string('').required('Обязательное поле'),
    confirmpassword: yup.string().required('Обязательное поле'),
});



function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data);
        window.location.href = "/";
    }

    return (
        <div className={styles.wrapper}>
            <div className='mx-5'>
                <div className={styles.card}>
                    <h1 className='flex justify-center text-4xl text-zinc-200 font-semibold mb-8'>Регистрация</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="h-8"><p className="text-lg text-zinc-300">{errors.name?.message}</p></div>
                            <label className={styles.label}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2 mr-2 fill-teal-400 min-w-max">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input className={styles.input} type='text' placeholder="Имя"
                                    {...register("name")}
                                />
                            </label>
                        </div>
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
                        <div className='mb-4'>
                            <div className="h-8"><p className="text-lg text-zinc-300">{errors.confirmpassword?.message}</p></div>
                            <label className={styles.label}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2 mr-2 fill-teal-400 min-w-max">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>

                                <input className={styles.input} type='password' placeholder="Подтвердите пароль"
                                    {...register("confirmpassword")}
                                />
                            </label>
                        </div>
                        <button className={styles.button}>
                            Зарегестрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default Registration;