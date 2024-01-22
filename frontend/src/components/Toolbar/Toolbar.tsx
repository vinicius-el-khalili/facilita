import { FaPlus } from 'react-icons/fa';
import SearchBox from '../SearchBox/SearchBox';
import style from './Toolbar.module.scss'
import { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
const Toolbar = () => {

    const [registerForm,setRegisterForm] = useState<boolean>(false)

    return (
        <div className={style.Toolbar}>

            <SearchBox/>

            <div className={style.registerButtonContainer}>
                <div
                className={`${style.registerButton} ${registerForm&&style.registerButtonOn}`}
                onClick={()=>{setRegisterForm(!registerForm)}}
                >
                    <FaPlus/> Cadastrar cliente
                </div>
            </div>

            <div className={`${style.RegisterFormContainer} ${registerForm&&style.RegisterFormContainerOn}`}>
                <RegisterForm/>
            </div>

        </div>
    );
}
 
export default Toolbar;