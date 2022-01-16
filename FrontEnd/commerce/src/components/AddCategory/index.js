import styles from './styles.module.css'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function AddCategoria() {

	const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false)
    
  const ShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const CloseModal = e => {
    e.preventDefault();
    setShowModal(false)
  }

  const SendData = async e => {
    e.PreventDefault();

    if(name !== ""){
      const result = await fetch('http://localhost:3333/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name
        })
      }).then((res) => res.json())

      if (result.msg == "Category created successfully") {
        //sucesso
        alert("Categoria criada com sucesso")
      } else {
        alert("Ocorreu um erro!")
      }
    }else{
      alert("Preencha o campo!")
    }
  }

	return (
		<>
			<button className={styles.CreateCategoryButton} onClick={(e) => ShowModal(e)}>Criar Categoria</button>

			<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
				<div className={styles.ModalPopUp}>
					<form>
            <div className={styles.ModalHeader}>
              <h4>Criar Categoria</h4>
						  <span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
            </div>

						<input className={styles.FormCardField} onChange={e => setName(e.target.value)} type="text" name="name" placeholder='Nome'/>

						<input className={styles.FormCardField} onSubmit={e => SendData(e)} type="submit" value="Adicionar Categoria"/>
					</form>
				</div>
			</div>
		</>
	)
}
