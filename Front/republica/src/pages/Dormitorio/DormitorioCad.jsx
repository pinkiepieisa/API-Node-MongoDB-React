import './dormitorio.css'

function Dormitorio() {

    return (

        <div className='container'>

            <form>
                <h1> Dormitório: </h1>
                <input placeholder='Andar:' name = 'andar' type='number'/>
                <br/ >
                <input placeholder='Porta:' name = 'porta' type='number'/>
                <br/ >

                <button type='submit'> Cadastrar </button>
            </form>

        </div>


    )

}

export default Dormitorio;