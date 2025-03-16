import style from './productCard1.module.css'

export const ProductCart1 = ({ name, price, image, isLogged, secondPrice }: { name: string, price: number, image: string, isLogged: boolean, secondPrice: number | false }) => {
    return (
        <div className={style.containerCard}>
            <div className={style.buttomAndInfo}>
                <section className={style.infoContainer}>
                    <h1 className={style.name}>{name}</h1>
                    <h1 style={{ textDecoration: (isLogged && secondPrice) ? "line-through" : "none", fontSize: (isLogged && secondPrice) ? "20px" : "30px", margin: "0", position: (isLogged && secondPrice) ? "absolute" : "relative", top: (isLogged && secondPrice) ? "-1rem" : "" }} className={style.price}>{!secondPrice && <span>$</span>}{parseFloat(price.toFixed(2))}</h1>
                    {secondPrice && <h1 className={style.price}><span>$</span>{parseFloat(secondPrice.toFixed(2))}</h1>}
                </section>
                <button className={style.buttom1}>Agregar al carrito</button>
            </div>
            <img src={image} className={style.imageCard1} alt={name} />
        </div>
    )
}
