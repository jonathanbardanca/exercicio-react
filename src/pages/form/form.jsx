import React from "react";
import Input from "./input.jsx";

const Form = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          id="nome"
          type="text"
          value={nome}
          setValue={setNome}
          required
        />

        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          setValue={setEmail}
          required
        />

        <Input
          label="Senha"
          id="senha"
          type="password"
          value={senha}
          setValue={setSenha}
          required
        />

        <Input
          label="Cep"
          id="Cep"
          type="text"
          value={cep}
          setValue={setCep}
          required
        />

        <Input
          label="Rua"
          id="rua"
          type="text"
          value={rua}
          setValue={setRua}
          required
        />

        <Input
          label="Numero"
          id="numero"
          type="text"
          value={numero}
          setValue={setNumero}
          required
        />

        <Input
          label="Bairro"
          id="bairro"
          type="text"
          value={bairro}
          setValue={setBairro}
          required
        />

        <Input
          label="Cidade"
          id="cidade"
          type="text"
          value={cidade}
          setValue={setCidade}
          required
        />

        <Input
          label="Estado"
          id="estado"
          type="text"
          value={estado}
          setValue={setEstado}
          required
        />

        <button type="submit">Enviar</button>
        
      </form>
    </>
  );
};

export default Form;