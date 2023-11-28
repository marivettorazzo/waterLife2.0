import  { useState } from 'react';

const Forms = () => {
  // Defina o estado para armazenar os valores do formulário
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  // Manipule as mudanças nos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Manipule o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça algo com os dados do formulário, por exemplo, envie para um servidor
    console.log('Dados do formulário:', formulario);
  };

  return (
    <div>
      <h1>Meu Componente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formulario.mensagem}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Forms;