import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  let navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const SendData = async e => {
    e.preventDefault();

    let empty = false;
    if(inputValues.email === "" || inputValues.password === ""){
      empty = true;
    }

    if(empty === false){
      const result = await fetch('http://localhost:3333/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputValues.email,
          password: inputValues.password
        })
      }).then((res) => res.json())

      if (result.token) {
        //salvando o token
        sessionStorage.setItem('token', result.token);

        //guardando se usuário é admin result.isAdmin
        sessionStorage.setItem('isAdmin', result.user.isAdmin);

        //guardando o id
        sessionStorage.setItem('id', result.user.id)
        
        alert('Usuário logado!');

        //mudar para página inicial
        navigate("/");
      } else {
        alert("Ocorreu um erro!")
      }
    }else{
      alert("Preencha o campo!")
    }
  }

    return (
      <main className={styles.loginPage} style={{ padding: "1rem 0" }}>
        <h2>Login</h2>

        <div className={styles.FormCard}>
          <header className={styles.FormCardHeader}>
            <h4>Entre na sua conta!</h4>
          </header>

          <section className={styles.FormCardBody}>
              <form name="formlogin">
                <input type="text" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.email} name="email" placeholder="email" />
                <input type="password" className={styles.FormCardField} onChange={handleOnChange} value={inputValues.password} name="password" placeholder="senha" />
                <input type='button' className={styles.FormCardField} onClick={(e) => SendData(e)} value="Login"/>
              </form>

              <div className={styles.FormCardFooter}>
                <Link className={styles.Link} to="/cadastro">Não tem conta? Ir para Cadastro</Link>
              </div>
          </section>
        </div>
      </main>
    ); 
  }