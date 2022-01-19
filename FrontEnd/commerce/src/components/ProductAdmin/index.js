import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import EditProduct from '../../components/EditProduct'

export default function ProductAdmin({URL, Categorie, Name, Price, Quantidade, Id, GetNewProductList}) {

	const product = {URL, Categorie, Name, Price, Quantidade, Id, GetNewProductList}

	// deletando produto
	const DeleteProduct = async (id) => {
		const UserToken = sessionStorage.getItem('token')
		const result = await fetch(`http://localhost:3333/product/${id}`, {
			method: 'DELETE',
			headers: {
				"Authorization": `Bearer ${UserToken}`
			}
		})
			GetNewProductList(true)
			alert("Produto deletado com sucesso")
	}

	return (
		<div className={styles.productWrapper}>
			<img src={URL} alt="" />
			<p>{Name}</p>
			<div className={styles.productCategories}>
				<span>{Categorie}</span>
			</div>
			<p>{Quantidade} unidades</p>
			<span>R${Price}</span>
			<div className={styles.actionButtons}>
				<EditProduct {...product}/>
				<button onClick={() => DeleteProduct(Id)}>Excluir</button>
			</div>
		</div>
	)
}  
