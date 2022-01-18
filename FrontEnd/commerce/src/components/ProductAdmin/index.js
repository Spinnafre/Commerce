import { useEffect, useState } from 'react';
import styles from './styles.module.css'

export default function ProductAdmin({URL, Categorie, Name, Price, Quantidade}){
    
    
    return(
        <div className={styles.productWrapper}>
            <img src={URL} alt=""/>
            <p>{Name}</p>
            <div className={styles.productCategories}>
                <span>{Categorie}</span>
            </div>
            <p>{Quantidade} unidades</p>
            <span>R${Price}</span>
            <div className={styles.actionButtons}>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    )
}  
