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
    category_id: ''
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

	useEffect(() => {
		getCategories();
	}, [])

	return (
	<>
		<button className={styles.AddProductButton}>Adicionar produto</button>

		<div className={styles.Modal}>
			<div className={styles.ModalPopUp}>
				<form>
					<span className={styles.ModalCloseButton}>X</span>

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.name} type="text" name="name" placeholder='Nome do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.price} type="text" name="price" placeholder='Preço do produto' />

					<input className={styles.FormCardField} onChange={handleOnChange} value={inputValues.qtd} type="number" name="qtf" placeholder='Quant do produto' />

					<div className={styles.QuantField}>
						<label>Categoria</label>
						<select onChange={handleOnChange}>
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
						<button className={styles.AddCategory} onSubmit={e => SendData(e)}>Criar Categoria</button>
					</div>

					<AddCategoria />
				</form>
			</div>
		</div>
	</>
	)
}