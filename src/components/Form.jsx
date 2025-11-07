import React from "react";
import Input from "./Input.jsx";
import useForm from "../hooks/useForm.jsx";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Form.module.css";

const Form = () => {
  const nome = useForm("nome");
  const email = useForm("email");
  const password = useForm("senha");
  const cep = useForm("cep");
  const rua = useForm();
  const numero = useForm("numero");
  const bairro = useForm();
  const cidade = useForm();
  const estado = useForm();

  const [carregando, setCarregando] = React.useState(false);
  const dialogRef = React.useRef(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      email.validate() &&
      password.validate() &&
      cep.validate() &&
      rua.validate() &&
      numero.validate()
    ) {
      dialogRef.current.showModal();

      try {
        await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Form),
        });

        navigate("/Home");
      } catch (err) {
        console.error("Erro ao enviar formulário:", err);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        try {
          dialogRef.current?.close();
        } catch (e) {
          console.error("Erro ao fechar o diálogo:", e);
        }
      }
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Nome" id="nome" type="text" {...nome} />

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="algo@algo.algo"
          {...email}
        />

        <Input label="Senha" id="senha" type="password" {...password} />

        <Input
          label="Cep"
          id="Cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />

        <Input label="Rua" id="rua" type="text" {...rua} />

        <Input label="Numero" id="numero" type="text" {...numero} />

        <Input label="Bairro" id="bairro" type="text" {...bairro} />

        <Input label="Cidade" id="cidade" type="text" {...cidade} />

        <Input label="Estado" id="estado" type="text" {...estado} />

        <button type="submit">Enviar</button>
      </form>

      <dialog ref={dialogRef} style={{ border: "none", padding: "1rem" }}>
        <p>Formulário enviado com sucesso!</p>
      </dialog>
    </>
  );
};

export default Form;
