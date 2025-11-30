import '../../index.css'
import { Link } from 'react-router-dom';
import Seta from "../../assets/line_start.svg"
import { useEffect, useState } from 'react';
import api from '../../services/api';


function ListaDormitorio() {

    const [dorms, setDorms] = useState([]);

    async function getDorms() {

        const dormsFromApi = await api.get('/dormitorio');
        setDorms(dormsFromApi.data)
        
    };

    useEffect(() => {

        getDorms()

    }, []);


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

                <h1> Dormitórios cadastrados na república: </h1>

            </div>


            {dorms.map((dorm) => (


                <div key={dorm._id} className='listaExibir'>


                    <div className='listar'>

                        <p> Dormitório:</p>
                        <p> andar: {dorm.andar}</p> 
                        <p> porta: {dorm.porta}</p> 

                    </div>
                    

                    <div className='botoes'>

                        <button> Apagar </button>

                       {/*} <button> Editar </button> */} 

                    </div>

                </div>

            ))}

        </>

    );

}

export default ListaDormitorio;