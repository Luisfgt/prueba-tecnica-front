import style from './productCard1.module.css'

export const ProductCart1 = ({ name, price, image }: { name: string, price: number, image: string }) => {
    return (
        <div className={style.containerCard}>
            <div className={style.buttomAndInfo}>
                <section className={style.infoContainer}>
                    <h1 className={style.name}>{name}</h1>
                    <h2 className={style.price}><span className=''>$</span>{price}</h2>
                </section>
                <button className={style.buttom1}>Agregar al carrito</button>
            </div>
            <img src={image} className={style.imageCard1} alt={name} />
        </div>
    )
}
