import { useEffect, useState } from 'react';
import styles from './styles.module.css'

export default function ProductSingle({URL, Categorie1, Categorie2, Name, Price}){
    const [Cart, setCart] = useState([])
    let cart = []

    useEffect(() => {
        LoadCart()
    }, [Cart])

    function LoadCart(){
        //recuperar carrinho 
        let cart = Cart
        let cookieArray = document.cookie.split(';')
        for(let i = 0; i< cookieArray.length; i++){
            let ondeCortar = cookieArray[i].indexOf('=')+1;
            let itemValueArray = cookieArray[i].slice(ondeCortar);
            itemValueArray = itemValueArray.split(',');
            if(itemValueArray[0] !== ''){
                cart.push({
                    name: itemValueArray[0],
                    price: itemValueArray[1],
                    count: itemValueArray[2]
                })
            }
        }
        setCart(cart)
        console.log(cart)
    }

    function SaveCart(){
        let cart = Cart
        for(var item in cart){
			document.cookie = `${cart[item].name}=` + cart[item].name +','+ cart[item].price + ',' + cart[item].count;
			//console.log(document.cookie)
		}
		//console.log(cart)
    }

    function AddCart(){
        let cart = Cart;
        for(var item in cart) {
			if(cart[item].name === Name) {
				cart[item].count ++;
                setCart(cart);
				SaveCart();
				return;
			}
        }
        cart.push({
            name: Name,
            price: Price,
            count: 1
        });
        setCart(cart);
        SaveCart();
    }

    return(
        <div className={styles.productWrapper}>
            <img src={URL} alt=""/>
            <div className={styles.productCategories}>
                <span>{Categorie1}</span>
                <span>{Categorie2}</span>
            </div>
            <p>{Name}</p>
            <span>R${Price}</span>
            <button onClick={AddCart}>Comprar</button>
        </div>
    )
}  
