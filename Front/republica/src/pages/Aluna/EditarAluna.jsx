import Seta from "../../assets/line_start.svg"
import { Link, useParams } from 'react-router-dom'
import '../../index.css'
import {  useEffect, useRef, } from "react"
import api from '../../services/api'


function EditarAluna() {

    const { id } = useParams();
    const [user, setUser] = useState([]);

    const inputNome = useRef();
    const inputIdade = useRef();
    const inputCpf = useRef();
    const inputSem = useRef();
    const inputCurso = useRef();
    const inputPorta = useRef();
    const inputAndar = useRef();

    useEffect(() => {

  
        async function updateAluna(id) {
            
            await api.put(`/aluna/${id}`, {

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

    });



    return (

        <div className='geral'>

            <div className='volta'>


                <button className='voltar'>

                    <Link to={`/listaalunas/${user._id}`}>            
                        <img src={Seta} />
                    </Link>    

                </button>

            
            </div>

            <div className='containerA'>


                <form>

                    <h1> Atualizar dados da Aluna: </h1>

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

                    <button type='submit' onClick={() => updateAluna(user._id)}> Atualizar </button>

                </form>

            </div>

        </div>

    )

}

export default EditarAluna;