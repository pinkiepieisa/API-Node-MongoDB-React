import Seta from "../../assets/line_start.svg"
import { Link } from 'react-router-dom'
import '../../index.css'
import {  useRef } from "react"
import api from '../../services/api'


function AlunaCad() {

    const inputNome = useRef();
    const inputIdade = useRef();
    const inputCpf = useRef();
    const inputSem = useRef();
    const inputCurso = useRef();
    const inputPorta = useRef();
    const inputAndar = useRef();

    async function createUsers() {
        
        await api.post('/aluna', {

            nome: inputNome.current.value,
            idade: inputIdade.current.value,
            cpf: inputCpf.current.value,
            semestre: inputSem.current.value,
            curso: inputCurso.current.value,
            dormitorio: {
                andar:inputAndar.current.value,
                porta: inputPorta.current.value
            }
            
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

                    <Link to="/listaalunas"> Lista das alunas </Link>

                </button>

            
            </div>

            <div className='containerA'>


                <form>
                    <h1> Cadastro da Aluna </h1>

                    <input placeholder='Nome:' name = 'nome' type='text' ref={ inputNome }/>
                    <br/ >
                    <input placeholder='Idade:' name = 'idade' type='number' ref={ inputIdade }/>
                    <br/ >
                    <input placeholder='CPF:' name = 'cpf' type='text' ref={ inputCpf }/>
                    <br/ >
                    <input placeholder='Semestre:' name = 'semestre' type='number' ref={ inputSem }/>
                    <br/ >
                    <input placeholder='Curso:' name = 'curso' type='text' ref = { inputCurso} />
                    <br />
                    <p name = 'dormitorio'> Dormitório: </p>
                    <input placeholder='Andar:' name = 'andar' type='number' ref={ inputAndar }/>
                    <br/ >
                    <input placeholder='Porta:' name = 'porta' type='number' ref={ inputPorta }/>
                    <br/ >

                    <button type='submit' onClick={createUsers}> Cadastrar </button>

                </form>

            </div>

        </div>

    )

}

export default AlunaCad;