import '../../index.css'

function AlunaCad() {

    return (

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

    )

}

export default AlunaCad;