import styles from './styles.module.css'
import ProductSingle from '../ProductSingle'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function Products() {

	const [products, setProducts] = useState([])

	const props = {
		URL: "https://picsum.photos/100",
		Categorie: "Category",
		Name: "Name",
		Price: "Price"
	}

	const GetProducts = async () => {
		const List = await fetch('http://localhost:3333/product', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())
		console.log(List)

		setProducts(List);
	}

	const [allCategories, setAllCategories] = useState([]);

	const getCategories = async () => {
		const result = await fetch('http://localhost:3333/category', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())

		if (result) {
			//sucesso
			setAllCategories(result)
		} else {
			alert("Ocorreu um erro ao tentar pegar as categorias!")
		}
	}

	useEffect(() => {
		GetProducts();
		getCategories();
	}, [])

	const [category1, setCategory1] = useState("1")
	const [category2, setCategory2] = useState("1")

	const sendData = () => {
		//fazer busca por categorias
	}

	return (
		<>
			<div className={styles.topBar}>
				<form onSubmit={sendData()}>
					<div className={styles.selectCategory}>
						<label>
							Categoria:
							<select value={category1} onChange={e => setCategory1(e.target.value)}>
								<option value="" disabled defaultChecked>Categoria</option>
								{
									allCategories && allCategories.length ? allCategories.map(elem => (
										<option value={elem.id} key={elem.id}>{elem.name}</option>
									)) : "Placeholder"
								}
							</select>
						</label>
					</div>
					<div className={styles.selectCategory}>
						<label>
							Categoria:
							<select value={category2} onChange={e => setCategory2(e.target.value)}>
								<option value="" disabled defaultChecked>Categoria</option>
								{
									allCategories && allCategories.length ? allCategories.map(elem => (
										<option value={elem.id} key={elem.id}>{elem.name}</option>
									)) : "Placeholder"
								}
							</select>
						</label>
					</div>
					<input type="submit" value="Pesquisar" />
				</form>
			</div>

			<div className={styles.products}>
				<div className={styles.productList}>
					{
						products && products.length ? products.map(element => {
							const productFormat = {
								URL: element.products.img_url || "https://picsum.photos/100",
								Categorie: element.categories.name,
								Name: element.products.name,
								Price: element.products.price,
								Id: element.products.id
							}
							console.log(element)
							return (
								<ProductSingle {...productFormat} key={element.products.id} />
							)
						}) : "Não há itens para mostrar, melhor contactar a administração!"
					}
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
					<ProductSingle {...props} />
				</div>
			</div>
		</>
	)
}
