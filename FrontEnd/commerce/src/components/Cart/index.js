import styles from './styles.module.css'
import { useState, useEffect } from 'react'

//PS - URL, Categories, Name, Price

export default function Cart() {
    const props = {
        URL: "https://picsum.photos/100",
        Name: "Name",
        Price: "Price"
    }
    
    return(
        <>
        <div className={styles.container}>
            <div className={styles.cart}>
                <p>Seu carrinho de compras:</p>

                <div className={styles.items}>
                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>

                    <div className={styles.itemSingle}>
                        <img src={props.URL} alt=""/>
                        <p>{props.Name}</p>
                        <span>R${props.Price}</span>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
