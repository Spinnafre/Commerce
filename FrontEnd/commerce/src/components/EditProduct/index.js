import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import AddCategoria from '../AddCategory';

//PS - URL, Categories, Name, Price

export default function EditProduct({URL, Categorie, Name, Price, Quantidade, Id, GetNewProductList}) {
	
	const [inputValues, setInputValues] = useState({
		productName: Name,
		imgUrl: URL,
    price: Price,
    qtd: Quantidade
  });
	
	const [category1, setCategory1] = useState(Categorie)
	
	const handleOnChange = event => {
		const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
	
	// REQUISITANDO CATEGORIAs
	const [categories, setCategories] = useState([]);
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

	// CRIANDO PRODUTO
	const SendData = async e => {
    e.preventDefault();
    let empty = false;
		if(inputValues.productName === "" || inputValues.price === "" || inputValues.qtd === "" || category1 === "" ){
			empty = true;
		}
    
		if(empty === false){
			const UserToken = sessionStorage.getItem('token')
			const result = await fetch(`http://localhost:3333/product/${Id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${UserToken}`
				},
				body: JSON.stringify({
					name: inputValues.productName,
					price: inputValues.price,
					img_url: inputValues.imgUrl,
					qtd: inputValues.qtd,
					category_id:[
						category1
					]
				})
			}).then((res) => res.json())
			
			alert("Produto Editado com sucesso!")

			GetNewProductList(true)

			setShowModal(false)
		}
  }

// MODAL
	const [showModal, setShowModal] = useState(false)  
  const ShowModal = (e) => {
		e.preventDefault();
    setShowModal(true);
		getCategories();
  }

  const CloseModal = e => {
    setShowModal(false)
		e.preventDefault();
  }

	useEffect(() => {
		getCategories();
	}, [])

	return (
	<>
		<button className={styles.AddProductButton} onClick={(e) => ShowModal(e)}>Editar</button>

		<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}></div>
		<div className={`styles.Modal ${showModal ? styles.ModalShow : styles.ModalHide}`}>
			<div className={styles.ModalPopUp}>
				<form>
					<div className={styles.ModalHeader}>
            <h4>Criar Produto</h4>
						<span className={styles.ModalCloseButton} onClick={(e)=> CloseModal(e)}>X</span>
          </div>

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.productName} type="text" name="productName" placeholder='Nome do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.imgUrl} type="text" name="imgUrl" placeholder='Link da imagem' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.price} type="text" name="price" placeholder='Preço do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.qtd} min={0} type="number" name="qtd" placeholder='Quant do produto' />

					<div className={styles.QuantField}>
							<select onChange={e => setCategory1(e.target.value)} name="category1">
								<option unselectable='on' value={""}>Categoria</option>
								{
									categories.length ? categories.map(elem => (
										<option value={elem.id} key={elem.id}>{elem.name}</option>
									)) : "Placeholder"
								}
							</select>
						
						<AddCategoria />
					</div>

					<button className={styles.EditButton} onClick={e => SendData(e)}>Editar</button>
				</form>
			</div>
		</div>
	</>
	)
}