import { useEffect, useState } from 'react';
import '../../index.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Seta from "../../assets/line_start.svg"

function ListaAluna() {

    const [users, setUsers] = useState([]);

    async function getUsers() {

        const usersFromApi = await api.get('/aluna');
        setUsers(usersFromApi.data);
        
    }

    useEffect(() => {
        getUsers()

    }, []);

    async function deleteUsers(id) {
        
        await api.delete(`/aluna/${id}`);

        getUsers();

    };


    return (

        <>

            <div className='voltaL'>

                <button>
                    
                    <Link to="/">
                        <img src={Seta} />
                    </Link>

                </button>

            </div>


            <div className='novadiv'>

                <h1> Alunas cadastradas na república: </h1>

            </div>

            {users.map((user) => (


                <div key={user._id} className='listaExibir'>


                    <div className='listar'>

                        <p> Nome: {user.nome}</p> 
                        <p> Idade: {user.idade}</p>
                        <p> CPF: {user.cpf}</p>
                        <p> Semestre: {user.semestre}</p>
                        <p> Curso: {user.curso}</p>
                        <p> Dormitório:</p>
                        <p> andar: {user.dormitorio?.andar}</p> 
                        <p> porta: {user.dormitorio?.porta}</p> 

                    </div>
                    

                    <div className='botoes'>

                        <button onClick={() => deleteUsers(user._id)}> Apagar </button>
                        {/*Quando é necessário passar um parâmetro para a função*/}  

                        <button> 

                            <Link to = "/atualizaraluna">

                                Editar 

                            </Link>    

                            </button>

                    </div>

                </div>

            ))}

        </>
        
    )
}

export default ListaAluna;