import styles from './styles.module.css'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function Cart() {

	const [Cart, setCart] = useState([])
	let cart = []
	
	useEffect(() => {
		LoadCart();
	}, [])

	function SaveCart(){
		cart = Cart
		for(var item in cart){
		document.cookie = `${cart[item].name}=` + cart[item].name +','+ cart[item].price + ',' + cart[item].count;
		}
	}

	function LoadCart() {
		//recuperar carrinho 
		cart = []
		let cookieArray = document.cookie.split(';')
		for (let i = 0; i < cookieArray.length; i++) {
			let ondeCortar = cookieArray[i].indexOf('=') + 1;
			let itemValueArray = cookieArray[i].slice(ondeCortar);
			itemValueArray = itemValueArray.split(',');
			if (itemValueArray[0] !== '') {
				cart.push({
					name: itemValueArray[0],
					price: itemValueArray[1],
					count: parseInt(itemValueArray[2])
				})
			}
		}
		setCart(cart)
		cart = Cart;
		console.log(cart)
	}

	function AddCart(Name){
		cart = Cart;
		for(var item in cart) {
			if(cart[item].name === Name) {
				cart[item].count++;
				setCart(cart);
				SaveCart();
				LoadCart();
				return;
			}
		}
	}
	
	function LessCart(Name){
		cart = Cart;
		for(var item in cart) {
			if(cart[item].name === Name) {
				cart[item].count--;
				setCart(cart);
				SaveCart();
				LoadCart();
				return;
			}
		}
	}

	function RemoveFromCart(Name) {
		//retirando da string cart
		cart = Cart
		console.log(cart)
	  for(var item in cart) {
			if(cart[item].name === Name) {
				cart.splice(item, 1);
				break;
			}
	  }
		//retirando do cookie
		let cookieArray = document.cookie.split(';')
		for(let i = 0; i< cookieArray.length; i++){
			let ondeCortar = cookieArray[i].indexOf('=')+1;
			let itemValueArray = cookieArray[i].slice(ondeCortar);
			itemValueArray = itemValueArray.split(',');
			if(itemValueArray[0] == Name){
				let nomeCookie = cookieArray[i].slice(0, ondeCortar);
				document.cookie = `${itemValueArray[0]}=` + itemValueArray[0] +','+ itemValueArray[1] + ',' + 0 + `; expires=Thu, 01 Jan 1970 00:00:00 UTC; path="/"`;
				//console.log(document.cookie)
			}
		}
		setCart(cart);
	  SaveCart();
		LoadCart();
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.cart}>
					<div className={styles.Header}>
						<p>Seu carrinho de compras:</p>
						<button onClick={LoadCart}>Atualizar</button>
					</div>

					<div className={styles.items}>
						{
							Cart ? Cart.map(element => {
								return (
									<div className={styles.itemSingle} key={element.name}>
										<div className={styles.itemHeader}>
											<p className={styles.itemName}>{element.name}</p>
											<button onClick={() => RemoveFromCart(element.name)} className={styles.itemDelete}>x</button>
										</div>
										<span className={styles.itemPrice}>R${element.price}</span>
										<div className={styles.itemQuantCont}>
											<button onClick={()=> LessCart(element.name)}>&#10096;</button>
											<p className={styles.itemQuant}>{element.count}</p>
											<button onClick={()=> AddCart(element.name)}>&#10097;</button>
										</div>
									</div>
								)
							})
								:
								'Adicione items em seu carrinho para aprecerem aqui!'
						}
					</div>
				</div>
			</div>
		</>
	)
}
