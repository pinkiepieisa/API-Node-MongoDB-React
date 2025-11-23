import { Link } from 'react-router-dom'
import '../../index.css'

 export default function Home() {

  return (

    <div className="Links">


      <div className='inicio'>

        <h1> República </h1>

        <br></br>

        <p>Bem vinda! <br></br> Escolha uma opção: </p>

      </div>

      <div className='containerGeral'>

        <Link to="/aluna">
          <button className='glow-on-hover' title='área da aluna'> Área da aluna </button>
        </Link>

        <br></br> <br></br><br />

        <Link to="/dormitorio">
          <button className='glow-on-hover' title='área do dormitório'> Área do dormitório </button>
        </Link>

      </div>

    </div>
  );

}




