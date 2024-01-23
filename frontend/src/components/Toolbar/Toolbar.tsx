import { FaPlus, FaRoute } from 'react-icons/fa';
import SearchBox from '../SearchBox/SearchBox';
import style from './Toolbar.module.scss';
import { useContext, useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import AppContext from '../../contexts/AppContext';

export const Toolbar = () => {

    const context = useContext(AppContext)
    const [registerForm, setRegisterForm] = useState<boolean>(false);

    return (
        <div className={style.Toolbar}>
            <SearchBox />
            <div className={style.ButtonsContainer}>
                <div
                className={`${style.Button} ${registerForm && style.ButtonOn}`}
                onClick={() => { setRegisterForm(!registerForm); }}>
                    <FaPlus /> Cadastrar cliente
                </div>
                <div
                className={style.Button}
                onClick={context.services.calculateRoutes}>
                    <FaRoute /> Calcular rotas
                </div>
            </div>
            <div className={`${style.RegisterFormContainer} ${registerForm && style.RegisterFormContainerOn}`}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Toolbar