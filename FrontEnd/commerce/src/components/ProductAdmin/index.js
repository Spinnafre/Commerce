import { useEffect, useState } from 'react';
import styles from './styles.module.css'

export default function ProductAdmin({URL, Categorie1, Categorie2, Name, Price, Quantidade}){
    
    

    return(
        <div className={styles.productWrapper}>
            <img src={URL} alt=""/>
            <p>{Name}</p>
            <div className={styles.productCategories}>
                <span>{Categorie1}</span>
                <span>{Categorie2}</span>
            </div>
            <p>{Quantidade} unidades</p>
            <span>R${Price}</span>
            <button>Editar</button>
        </div>
    )
}  
