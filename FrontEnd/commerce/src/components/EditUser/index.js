import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export default function EditUser({name, login, address, email}) {

	const [inputValues, setInputValues] = useState({
    name: '',
    login: '',
    address: '',
    email: '',
    password: '',
    confPassword: ''
  });

	const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

	const [showModal, setShowModal] = useState(false)
    
  const ShowModal = (e) => {
		e.preventDefault();
    setInputValues({...inputValues, name: name, login: login, address: address, email: email})
    setShowModal(true);
  }

  const CloseModal = e => {
		e.preventDefault();
    setShowModal(false)
  }

	const SendData = async e => {
    e.preventDefault();

    let empty = false;
    for(let i in inputValues){
      if(inputValues[i] === ""){
        empty = true;
      }
    }

    if(empty === false){
			const UserToken = sessionStorage.getItem('token')
      const result = await fetch('http://localhost:3333/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
					"Authorization": `Bearer ${UserToken}`
        },
        body: JSON.stringify({
					name: inputValues.name,
					login: inputValues.login,
					address: inputValues.address,
					email: inputValues.email,
					password: inputValues.password,
					confPassword: inputValues.confPassword
        })
      }).then((res) => res.json())

      console.log(result)

      if (result.code == 200) {
        alert("Usuário editado com sucesso")
        
      } else {
        alert("Ocorreu um erro!")
      }
    }else{
      alert("Preencha o campo!")
    }
  }

	return (
	<>
		<button className={styles.EditUser} onClick={(e) => ShowModal(e)}>Editar</button>

		<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
			<div className={styles.ModalPopUp}>
				<form>
					<div className={styles.ModalHeader}>
            <h4>Editar Perfil</h4>
						<span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
          </div>

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.name} type="text" name="name" placeholder='Nome' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.login} type="text" name="login" placeholder='Login' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.address} type="text" name="address" placeholder='Endereço' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.email} type="email" name="email" placeholder='Email' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.password} type="password" name="password" placeholder='Senha' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.confPassword} type="password" name="confPassword" placeholder='Confirme a senha' />

					<button className={styles.FormCardField} onSubmit={e => SendData(e)}>Editar Perfil</button>
					<button className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>Cancelar</button>

				</form>
			</div>
		</div>
	</>
	)
}