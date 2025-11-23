import { Link } from 'react-router-dom'
import './style.css'

 export default function Home() {

  return (

    <div className="Links">

      <Link to="/aluna">
        <button title='área da aluna'> Área da aluna </button>
      </Link>

    </div>
  );

}




