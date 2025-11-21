import './aluna.css'

function AlunaCad() {

    return (

        <div className='containerAlu'>
            <form>
                <h1>Cadastro da Aluna</h1>

                <input name = 'nome' type='text'/>
                <br/ >
                <input name = 'idade' type='number'/>
                <br/ >
                <input name = 'cpf' type='text'/>
                <br/ >
                <input name = 'semestre' type='number'/>
                <br/ >
                <input name = 'curso' type='text'/>
                <br/ >
                <label name = 'dormitorio'/>
                <br />
                <input name = 'andar' type='number'/>
                <br/ >
                <input name = 'porta' type='number'/>
                <br/ >

                <button type='submit'> Cadastrar </button>

            </form>
        </div>

    )

}