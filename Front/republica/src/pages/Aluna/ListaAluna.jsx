import { useEffect, useState } from 'react';
import '../../index.css'
import api from '../../services/api';

function ListaAluna() {

    const [users, setUsers] = useState([]);

    async function getUsers() {
        const usersFromApi = await api.get('/aluna');
        setUsers(usersFromApi.data);
    }

    useEffect(() => {
        getUsers()

    }, []);

    return (

        <>

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

                        <button> Apagar </button>

                        <button> Editar </button>

                    </div>

                </div>

            ))}

        </>
        
    )
}

export default ListaAluna;