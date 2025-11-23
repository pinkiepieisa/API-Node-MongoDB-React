import Seta from "../../assets/line_start.svg"
import { Link } from 'react-router-dom'
import '../../index.css'

function AlunaCad() {

    return (

        <div className='geral'>

            <div className='volta'>


                    <button className='voltar'>

                        <Link to="/">            
                            <img src={Seta} />
                        </Link>    

                    </button>
            
            </div>

            <div className='container'>


                <form>
                    <h1>Cadastro da Aluna</h1>

                    <input placeholder='Nome:' name = 'nome' type='text'/>
                    <br/ >
                    <input placeholder='Idade:' name = 'idade' type='number'/>
                    <br/ >
                    <input placeholder='CPF:' name = 'cpf' type='text'/>
                    <br/ >
                    <input placeholder='Semestre:' name = 'semestre' type='number'/>
                    <br/ >
                    <input placeholder='Curso:' name = 'curso' type='text'/>
                    <br />
                    <p name = 'dormitorio'> Dormitório: </p>
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

export default AlunaCad;