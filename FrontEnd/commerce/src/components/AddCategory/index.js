import styles from './styles.module.css'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function AddCategoria() {

	const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false)
    
  const ShowModal = () => {
    setShowModal(true);
  }

  const CloseModal = e => {
    setShowModal(false)
  }

  const SendData = async e => {
    e.preventDefault();

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
			<button className={styles.CreateCategoryButton} onClick={() => ShowModal()}>Criar Categoria</button>

			<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
				<div className={styles.ModalPopUp}>
					<form>
            <div className={styles.ModalHeader}>
              <p>Criar Categoria</p>
						  <span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
            </div>

						<input className={styles.FormCardField} onChange={e => setName(e.target.value)} type="text" name="name" placeholder='Nome do produto'/>

						<input className={styles.FormCardField} onSubmit={e => SendData(e)} type="submit" value="Adicionar Categoria"/>
					</form>
				</div>
			</div>
		</>
	)
}
