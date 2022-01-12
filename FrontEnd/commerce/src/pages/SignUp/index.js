import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SignUp() {
  let navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    nome: '',
    login: '',
    email: '',
    endereco: '',
    senha: '',
    senhaAux: '',
  });
  
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const SendData = async e => {
    e.preventDefault();
    let empty = false;
    for(let i in inputValues){
      if(inputValues[i] === ""){
        empty = true;
      }
    }

    if(empty === false && inputValues[4] === inputValues[5]){
      const result = await fetch('http://localhost:3333/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: inputValues[0],
          login: inputValues[1],
          address: inputValues[2],
          email: inputValues[3],
          password: inputValues[4],
				  idAdmin: false
        })
      }).then((res) => res.json())

      if(result.msg){
        alert("Cadastro realizado com sucesso");
        console.log(result)
        //mudar para página de login
        navigate("/login", {replace: true})
      }else{
        console.log(result)
      }
    }else{
      alert("Preencha o campo!")
    }
  }

    return (
      <main className={styles.SignUpPage} style={{ padding: "1rem 0" }}>
        <h2>Cadastro</h2>

        <div className={styles.FormCard}>
          <header className={styles.FormCardHeader}>
            <h4>Entre na sua conta!</h4>
          </header>

          <section className={styles.FormCardBody}>
              <form name="formlogin">
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.nome} id="nome" name="nome" placeholder="nome" />
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.login} id="login" name="login" placeholder="login" />
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.email} id="email" name="email" placeholder="email" />
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.endereco} id="endereco" name="endereco" placeholder="endereço" />
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.senha} id="senha" name="senha" placeholder="senha" />
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.senhaAux} id="senhaAux" name="senhaAux" placeholder="Confirme a Senha" />
                <input type='button' onClick={(e) => SendData(e)} className={styles.FormCardField} value="Cadastrar"/>
              </form>

              <div className={styles.FormCardFooter}>
                <Link className={styles.Link} to="/cadastro">Já tem conta? Ir para Login</Link>
              </div>
          </section>
        </div>
      </main>
    ); 
  }