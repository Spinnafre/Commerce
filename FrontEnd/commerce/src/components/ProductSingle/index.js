import { useEffect, useState } from 'react';
import styles from './styles.module.css'

export default function ProductSingle({ URL, Categorie, Name, Price, Id }) {
	const [Cart, setCart] = useState([])

	//console.log( URL, Categorie, Name, Price, id )
	function LoadCart() {
		//recuperar carrinho 
		let cart = Cart
		let cookieArray = document.cookie.split(';')
		for (let i = 0; i < cookieArray.length; i++) {
			let ondeCortar = cookieArray[i].indexOf('=') + 1;
			let itemValueArray = cookieArray[i].slice(ondeCortar);
			itemValueArray = itemValueArray.split(',');
			if (itemValueArray[0] !== '') {
				cart.push({
					name: itemValueArray[0],
					price: itemValueArray[1],
					count: itemValueArray[2],
					id: itemValueArray[3]
				})
			}
		}
		setCart(cart)
	}

	function SaveCart() {
		let cart = Cart
		for (var item in cart) {
			document.cookie = `${cart[item].name}=` + cart[item].name + ',' + cart[item].price + ',' + cart[item].count + ',' + cart[item].id;
			//console.log(document.cookie)
		}
		//console.log(cart)
	}

	function AddCart() {
		let cart = Cart;
		for (var item in cart) {
			if (cart[item].name === Name) {
				cart[item].count++;
				setCart(cart);
				SaveCart();
				return;
			}
		}
		cart.push({
			name: Name,
			price: Price,
			count: 1,
			id: Id
		});
		setCart(cart);
		SaveCart();
		LoadCart()
	}

	useEffect(() => {
		LoadCart()
	}, [Cart])

	return (
		<div className={styles.productWrapper} key={Id}>
			<img src={URL} alt="" />
			<p>{Name}</p>
			<div className={styles.productCategories}>
				<span>{Categorie}</span>
			</div>
			<span>R${Price}</span>
			<button onClick={AddCart}>Comprar</button>
		</div>
	)
}  
