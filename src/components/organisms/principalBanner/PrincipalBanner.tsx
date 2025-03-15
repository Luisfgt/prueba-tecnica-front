import style from './principalBanner.module.css'
import ps5Banner from '../../../assets/Ps5 2.png'

export const PrincipalBanner = () => {

    return (
        <div className={style.bannerContainer}>
            <div className={style.principalTitleAndButton}>
                <h1 className={style.title}>Regístrate y <br />obtén los <br />
                    mejores <span style={{ color: "#FFB73B" }}>precios</span></h1>
                <button className={style.button1}>Obtener un descuento</button>
            </div>
            <img src={ps5Banner} alt="ps5" className={style.bannerImage} />
        </div>
    )
}
