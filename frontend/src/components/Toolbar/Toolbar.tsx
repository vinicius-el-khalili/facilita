import { FaPlus } from 'react-icons/fa';
import SearchBox from '../SearchBox/SearchBox';
import style from './Toolbar.module.scss'
const Toolbar = () => {
    return (
        <div className={style.Toolbar}>
            <SearchBox/>
            <div className={style.registerButton}>
                <div className={style.button}>
                    <FaPlus/> Cadastrar cliente
                </div>
            </div>
        </div>
    );
}
 
export default Toolbar;