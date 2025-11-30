import '../../index.css'
import Seta from "../../assets/line_start.svg"
import { Link } from 'react-router-dom'
import {  useRef } from "react"
import api from '../../services/api'

function Dormitorio() {

    const inputAndar = useRef();
    const inputPorta = useRef();
    

    async function createDroms() {
        
        await api.post('/dormitorio', {

            andar:inputAndar.current.value,
            porta: inputPorta.current.value
            
        });

    }

    return (

        <div className='geral'>

            <div className='volta'>
                
                <button className='voltar'>

                    <Link to="/">            
                        <img src={Seta} />
                    </Link>    

                </button>

                <button className="lista">

                    <Link to="/listadormitorios"> Lista dos dormitórios </Link>

                </button>

            </div>


            <div className='container'>

                <form>

                    <h1> Cadastro de dormitório: </h1>
                    <input placeholder='Andar:' name = 'andar' type='number' ref={ inputAndar }/>
                    <br/ >
                    <input placeholder='Porta:' name = 'porta' type='number' ref={ inputPorta }/>
                    <br/ >

                    <button type='submit' onClick={createDroms}> Cadastrar </button>

                </form>

            </div>

        </div>


    )

}

export default Dormitorio;