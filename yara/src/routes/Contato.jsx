import { useState } from 'react';
import './styles/Contato.css';

function Contato() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="container">
      <h1 className="title">Página de Contato</h1>

      <form className="form" onSubmit={() => {}}>
        <input 
          className="input"
          type="text"
          placeholder="Digíte seu Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite aqui sua mensagem para contato"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default Contato;