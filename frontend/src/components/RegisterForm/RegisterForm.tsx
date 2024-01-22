import { useState } from "react";
import style from "./RegisterForm.module.scss"
const RegisterForm = () => {

    const [name,setName] = useState<string|null>(null)
    const [email,setEmail] = useState<string|null>(null)
    const [phone,setPhone] = useState<string|null>(null)
    const [x,setX] = useState<number|null>(null)
    const [y,setY] = useState<number|null>(null)

    const handleSubmit = () => {}

    return (
        <div className={style.RegisterForm}>

            <h2>Cadastrar Cliente</h2>

            <form onSubmit={handleSubmit}>

                <div className={style.inputField}>
                    <p>Nome</p>
                    <input
                    type="text"
                    value={name?name:""}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>
                
                <div className={style.inputField}>
                    <p>Email</p>
                    <input
                    type="text"
                    value={email?email:""}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>

                <div className={style.inputField}>
                    <p>Telefone</p>
                    <input
                    type="text"
                    value={phone?phone:""}
                    onChange={(e)=>{setPhone(e.target.value)}}
                    />
                </div>

                <div className={style.coordinates}>
                    <p>Coordenadas</p>
                    <div className={style.inputs}>

                        <div className={style.coordinateInput}>
                            <div className={style.xy}>X</div>
                            <input
                            type="number"
                            value={x?x:""}
                            onChange={(e)=>{setX(Number(e.target.value))}}
                            />
                        </div>

                        <div className={style.coordinateInput}>
                            <div className={style.xy}>Y</div>
                            <input
                            type="number"
                            value={y?y:""}
                            onChange={(e)=>{setY(Number(e.target.value))}}
                            />
                        </div>

                    </div>
                    
                </div>

                <button
                className={style.submitButton}
                type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}
 
export default RegisterForm;