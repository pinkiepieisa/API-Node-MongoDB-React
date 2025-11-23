import { Link } from 'react-router-dom'
import '../../index.css'

 export default function Home() {

  return (

    <div className="Links">

      <div className='containerGeral'>

        <Link to="/aluna">
          <button title='área da aluna'> Área da aluna </button>
        </Link>

        <br></br>

        <Link to="/dormitorio">
          <button title='área do dormitório'> Área do dormitório </button>
        </Link>

      </div>

    </div>
  );

}




