import { FaSearch } from "react-icons/fa";
import style from "./SearchBox.module.scss"
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import AppContext from "../../contexts/AppContext";
const SearchBox = () => {

    const context = useContext(AppContext)

    const [searchValue,setSearchValue] = useState<string|null>(null)
    const [searchFilter,setSearchFilter] = useState<string>("Todos")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log(event.target.value)
        setSearchValue(event.target.value)
        context.actions.filterClients(event.target.value,searchFilter)

    }

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {

        setSearchFilter(event.target.value)
        context.actions.filterClients(searchValue,event.target.value)
    }

    const handleClearButton = () => {
        setSearchValue(null)
    }

    return (
        <div className={style.SearchBox}>

            <div className={style.icon}>
                <FaSearch/>
            </div>

            <input
            type="text"
            value={searchValue?searchValue:""}
            onChange={handleInputChange}
            >
            </input>

            <div
            className={style.clearButton}
            onClick={handleClearButton}
            >
                <IoClose/>
            </div>

            <select
            value={searchFilter}
            onChange={handleSelectChange}
            >
                <option value="Todos">Todos</option>
                <option value="Nome">Nome</option>
                <option value="Email">Email</option>
                <option value="Telefone">Telefone</option>
            </select>

        </div>
    );
}
 
export default SearchBox;