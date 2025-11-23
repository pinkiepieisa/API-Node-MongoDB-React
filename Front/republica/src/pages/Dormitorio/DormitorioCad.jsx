import '../../index.css'
import Seta from "../../assets/line_start.svg"
import { Link } from 'react-router-dom'


function Dormitorio() {

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
                    <input placeholder='Andar:' name = 'andar' type='number'/>
                    <br/ >
                    <input placeholder='Porta:' name = 'porta' type='number'/>
                    <br/ >

                    <button type='submit'> Cadastrar </button>

                </form>

            </div>

        </div>


    )

}

export default Dormitorio;