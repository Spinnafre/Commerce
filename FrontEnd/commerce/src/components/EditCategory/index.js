import styles from './styles.module.css'
import { useState, useEffect } from 'react'

export default function EditCategory({name, id, ReloadCategories}) {

	const [newName, setNewName] = useState(name);
  const [showModal, setShowModal] = useState(false)
    
  const ShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const CloseModal = e => {
    e.preventDefault();
    setShowModal(false)
  }

	const EditCategorie = () => {
    const UserToken = sessionStorage.getItem('token')
		fetch(`http://localhost:3333/category/${id}`, {
			method: 'PUT',
			headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${UserToken}`
			},
			body: JSON.stringify({
				name: newName
			})
		})
    setShowModal(false)
		ReloadCategories(true)
	}

	return (
		<>
			<button className={styles.EditCategoryButton} onClick={(e) => ShowModal(e)}>Editar Categoria</button>

			<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
				<div className={styles.ModalPopUp}>
					<div action='#'>
            <div className={styles.ModalHeader}>
              <h4>Editar Categoria</h4>
						  <span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
            </div>

						<input className={styles.FormCardField} onChange={e => setNewName(e.target.value)} value={newName} required type="text" name="name" placeholder='Nome'/>

						<input className={styles.FormCardField} onClick={() => EditCategorie()} type="submit" value="Editar"/>
					</div>
				</div>
			</div>
		</>
	)
}
