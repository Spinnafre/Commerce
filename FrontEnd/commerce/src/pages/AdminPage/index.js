import styles from './styles.module.css'
import { useState, useEffect } from 'react'

import ProductSingle from '../../components/ProductSingle'
import ProductAdmin from '../../components/ProductAdmin'
import AddProduct from '../../components/AddProduct'
import AddCategoria from '../../components/AddCategory'


//PS - URL, Categories, Name, Price

export default function AdminPage() {

	const [category1, setCategory1] = useState("1")
	const [category2, setCategory2] = useState("1")

	const [products, setProducts] = useState([])

	const props = {
		URL: "https://picsum.photos/100",
		Categorie1: "Category1",
		Categorie2: "Category2",
		Name: "Name",
		Price: 300,
		Quantidade: 24
	}

	const SearchFilter = (e) => {
		e.PreventDefault();
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
			console.log(result)
		} else {
			alert("Ocorreu um erro ao tentar pegar as categorias!")
		}
	}

	useEffect(() => {
		getCategories();
		GetProducts();
	}, [])

	return (
		<div className={styles.AdminPage}>
			<div className={styles.topBar}>
				<form >
					<div className={styles.selectCategory}>
						<label>
							Categoria:
							<select value={category1} onChange={e => setCategory1(e.target.value)}>
								<option defaultValue value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</label>
					</div>
					<div className={styles.selectCategory}>
						<label>
							Categoria:
							<select value={category2} onChange={e => setCategory2(e.target.value)}>
								<option defaultValue value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</label>
					</div>
					<input onClick={(e) => SearchFilter(e)} type="submit" value="Pesquisar" />
					<AddProduct />
				</form>
			</div>

			<div className={styles.AdminControl}>
				<div className={styles.products}>
					<div className={styles.productList}>
						{
							products && products.length ? products.map(element => {
								element = {
									URL: element.products.url,
									Categorie1: element.categories[0],
									Categorie2: element.categories[1],
									Name: element.products.name,
									Price: element.products.price,
									Quantidade: element.products.qtd
								}
								console.log(element)
								return (
									<ProductAdmin {...element} />
								)
							}) : "Não há itens para mostrar, melhor contactar a administração!"
						}
						<ProductAdmin {...props} />
						<ProductAdmin {...props} />
						<ProductAdmin {...props} />
					</div>
				</div>

				<div className={styles.CategoriesPanel}>
					<div className={styles.CategoriesPanelHeader}>
						<h4>Categorias</h4>
						<AddCategoria />
					</div>
					<ul className={styles.CategoriesList}>
						{
							allCategories && allCategories.length ? allCategories.map(elem => {
								return(
									<li key={elem.id} value={elem.id}>
										<span>{elem.name}</span>
										<div>
											<button>Editar</button>
											<button>Deletar</button>
										</div>
									</li>
								)
							}) : "Não há categorias, adicione uma!"
						}
						<li>
							<span>Nome Categoria</span>
							<div>
								<button>Editar</button>
								<button>Deletar</button>
							</div>
						</li>
					</ul>
				</div>

			</div>
		</div>
	)
}
