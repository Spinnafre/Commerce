import styles from './styles.module.css'
import { useState, useEffect } from 'react'

import AddCategoria from '../../components/AddCategory'
import AdminProductList from '../../components/AdminProductList'
import EditCategory from '../../components/EditCategory'
//PS - URL, Categories, Name, Price

export default function AdminPage() {

	const [category1, setCategory1] = useState("1")
	const [category2, setCategory2] = useState("1")

	const SearchFilter = (e) => {
		e.preventDefault();
		// filtrar
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

	// deletando categoria
	const DeleteCategorie = (id, name) => {
    const UserToken = sessionStorage.getItem('token')
		fetch(`http://localhost:3333/category/${id}`, {
			method: 'DELETE',
			headers: {
        "Authorization": `Bearer ${UserToken}`
			}
		})
		
		let newCategoriesList = allCategories;
		let index = 0;
		newCategoriesList.forEach(elem => {
			if(elem.name === name){
				newCategoriesList.splice(index, 1)
			}
			index++
		})
		setAllCategories(newCategoriesList);
		getCategories();
	}

	const ReloadCategories = (reload) => {
		if(reload){
			getCategories();
		}
	}

	useEffect(() => {
		getCategories();
	}, [])

	return (
		<div className={styles.AdminPage}>
			<div className={styles.topBar}>
				<div className={styles.searchFields}>
					<div className={styles.selectCategory}>
						<select className={styles.FormCardField} onChange={e => setCategory1(e.target.value)} name="category1_id">
							<option value="" disabled>Categoria</option>
							{
								allCategories && allCategories.length ? allCategories.map(elem => (
									<option value={elem.id} key={elem.id}>{elem.name}</option>
								)) : "Placeholder"
							}
						</select>

						<select className={styles.FormCardField} onChange={e => setCategory2(e.target.value)} name="category2_id">
							<option value="" disabled>Categoria</option>
							{
								allCategories && allCategories.length ? allCategories.map(elem => (
									<option value={elem.id} key={elem.id}>{elem.name}</option>
								)) : "Placeholder"
							}
						</select>
					</div>
					<button className={styles.FormCardField} onClick={(e) => SearchFilter(e)}>Pesquisar</button>
				</div>
			</div>

			<div className={styles.AdminControl}>
				<div className={styles.products}>
					<AdminProductList />
				</div>

				<div className={styles.CategoriesPanel}>
					<div className={styles.CategoriesPanelHeader}>
						<h4>Categorias</h4>
						<AddCategoria ReloadCategories={ReloadCategories} />
					</div>
					<ul className={styles.CategoriesList}>
						{
							allCategories && allCategories.length ? allCategories.map(elem => {
								return(
									<li className={styles.CategorieSingle} key={elem.id} value={elem.id}>
										<span>{elem.name}</span>
										<div>
											<EditCategory name={elem.name} id={elem.id} ReloadCategories={ReloadCategories}/>
											<button className={styles.DeleteCategoryButton} onClick={() => DeleteCategorie(elem.id, elem.name)}>Deletar</button>
										</div>
									</li>
								)
							}) : "Não há categorias, adicione uma!"
						}
					</ul>
				</div>

			</div>
		</div>
	)
}
