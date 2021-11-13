import styles from './styles.module.css'

export default function ProductSingle({URL, Categorie1, Categorie2, Name, Price}){
    
    return(
        <div className={styles.productWrapper}>
            <img src={URL} alt=""/>
            <div className={styles.productCategories}>
                <span>{Categorie1}</span>
                <span>{Categorie2}</span>
            </div>
            <p>{Name}</p>
            <span>R$ {Price}</span>
        </div>
    )
}  
