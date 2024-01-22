import ClientCard from "../ClientCard/ClientCard";
import SearchBox from "../SearchBox/SearchBox";
import style from "./ClientList.module.scss"

const ClientList = () => {
    return (
        <div className={style.ClientList}>
            <h1>Clientes</h1>
            <div className={style.filters}>
                <p>Pesquisar</p>
                <SearchBox/>
            </div>
            <div className={style.list}>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
                <ClientCard/>
            </div>
        </div>
    );
}
 
export default ClientList;