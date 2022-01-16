import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import AddCategoria from '../AddCategory';

//PS - URL, Categories, Name, Price

export default function AddProduct() {

	const [categories, setCategories] = useState([]);

	const [inputValues, setInputValues] = useState({
    name: '',
    price: '',
    qtd: '',
    category1_id: '',
    category2_id: ''
  });

	const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

	const getCategories = async () => {
		const result = await fetch('http://localhost:3333/category', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())

		if (result) {
			//sucesso
			setCategories(result)
		} else {
			alert("Ocorreu um erro ao tentar pegar as categorias!")
		}
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
      console.log(inputValues)
    } else {
        alert("Ocorreu um erro!")
    }
  }

	const [showModal, setShowModal] = useState(false)
    
  const ShowModal = (e) => {
		e.preventDefault();
    setShowModal(true);
		console.log(showModal)
  }

  const CloseModal = e => {
    setShowModal(false)
		console.log(showModal)
  }

	useEffect(() => {
		getCategories();
	}, [])

	return (
	<>
		<button className={styles.AddProductButton} onClick={(e) => ShowModal(e)}>Adicionar produto</button>

		<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}></div>
		<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
			<div className={styles.ModalPopUp}>
				<form>
					<div className={styles.ModalHeader}>
            <h4>Criar Produto</h4>
						<span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
          </div>

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.name} type="text" name="name" placeholder='Nome do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.price} type="text" name="price" placeholder='Preço do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.qtd} type="number" name="qtd" placeholder='Quant do produto' />

					<div className={styles.QuantField}>
						<div>
							<select onChange={handleOnChange} name="category1_id">
								<option value="" disabled selected>Categoria</option>
								{
									categories.length ? categories.map(elem => {
										<option value={elem.id}>{elem.name}</option>
									}) : "Placeholder"
								}
								<option value="Esportes">Esportes</option>
								<option value="Politica">Política</option>
								<option value="Entretenimento">Entretenimento</option>
								<option value="Famosos">Famosos</option>
							</select>

							<select onChange={handleOnChange} name="category2_id">
								<option value="" disabled selected>Categoria</option>
								{
									categories.length ? categories.map(elem => {
										<option value={elem.id}>{elem.name}</option>
									}) : "Placeholder"
								}
								<option value="Esportes">Esportes</option>
								<option value="Politica">Política</option>
								<option value="Entretenimento">Entretenimento</option>
								<option value="Famosos">Famosos</option>
							</select>
						</div>
						
						<AddCategoria />
					</div>

					<button className={styles.FormCardField} onSubmit={e => SendData(e)}>Criar produto</button>
				</form>
			</div>
		</div>
	</>
	)
}