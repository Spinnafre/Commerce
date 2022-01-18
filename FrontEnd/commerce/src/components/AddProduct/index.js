import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import AddCategoria from '../AddCategory';

//PS - URL, Categories, Name, Price

export default function AddProduct({GetNewProductList}) {
	
	const [inputValues, setInputValues] = useState({
		productName: '',
		imgUrl: '',
    price: '',
    qtd: ''
  });
	
	const [category1, setCategory1] = useState("")
	
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
		if(inputValues.productName == "" || inputValues.price == "" || inputValues.qtd == "" || category1 == "" ){
			empty = true;
		}
    
		if(empty == false){
			const UserToken = sessionStorage.getItem('token')
			const result = await fetch('http://localhost:3333/product', {
				method: 'POST',
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
			
			if(result.msg == "Product created sucessfully"){
				alert("Produto criado com sucesso!")

				GetNewProductList({
					name: inputValues.productName,
					price: inputValues.price,
					img_url: inputValues.imgUrl,
					qtd: inputValues.qtd,
					category_id:[
						category1
					]
				})

				setShowModal(false)
			} else {
				alert("Ocorreu um erro ao tentar criar produto!" + result.msg)
			}
		}else{
			alert("Preencha todos os campos")
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
		<button className={styles.AddProductButton} onClick={(e) => ShowModal(e)}>Adicionar produto</button>

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
							<select onChange={e => console.log(e.target.value)} name="category1">
								<option unselectable='on' value={""}>Categoria</option>
								{
									categories.length ? categories.map(elem => (
										<option value={elem.id} key={elem.id}>{elem.name}</option>
									)) : "Placeholder"
								}
							</select>
						
						<AddCategoria />
					</div>

					<button className={styles.FormCardField} onClick={e => SendData(e)}>Criar produto</button>
				</form>
			</div>
		</div>
	</>
	)
}