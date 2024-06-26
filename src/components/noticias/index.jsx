import './noticias.css'

function Noticias() {
  return (
    <div className='noticias'>
      <header className='titulo'>
        <h1>Acompanhe as nossas noticias</h1>
        <p>Seja o primeiro a saber quando novos animais são resgatados!</p>
      </header>
      <form className='email' id='email'>
        <input type="text" placeholder='Seu e-mail' className='input-text'/>
        <button className='cadastrar' id='cadastrar'>Cadastrar</button>
      </form>
      <div className='copyright'>
        <p>© 2024 PetRescue. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Noticias