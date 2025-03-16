import { Portal } from '../../../helpers/Portal'
import logo from '../../../assets/logo.png'
import style from './register.module.css'
import { icons } from '../../../helpers/icons'
import { useState } from 'react'
import { postBack } from '../../../helpers/postFromBack'
import { User } from '../../../App'

export const Register = ({ closeModal, logUser, setUser, setToLogin }: { closeModal: () => void, logUser: () => void, setUser: React.Dispatch<React.SetStateAction<User>>, setToLogin: () => void }) => {

    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const [infoToSend, setInfoToSend] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfoToSend({
            ...infoToSend,
            [e.target.name]: e.target.value
        })
    }

    const register = async () => {
        try {
            const numeroAleatorio = Math.random() < 0.5 ? 0 : 1;
            const categories = ["consola", "videojuego"]
            const register = await new postBack().createUser(infoToSend.name, infoToSend.email, infoToSend.password, categories[numeroAleatorio]);
            if (register.success) {
                setUser(register.user);
                logUser();
                closeModal();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Portal>
            <div className="background">
                <div onClick={closeModal} className="closeElement">
                    {icons().close}
                </div>
                <div className={style.loginContainer}>
                    <div className={style.logoAndTitle}>
                        <img src={logo} style={{ width: "150px", height: "auto" }} alt="logo" />
                        <h1 className={style.titleModal}>Registrarse</h1>
                    </div>
                    <div className={style.spanAndInput}>
                        <span>Nombre Completo</span>
                        <div className={style.inputContainer}>
                            <input onChange={handleChange} name='name' type="text" placeholder='Ingresar nombre completo' />
                        </div>
                    </div>
                    <div className={style.spanAndInput}>
                        <span>Email</span>
                        <div className={style.inputContainer}>
                            <input onChange={handleChange} name='email' type="text" placeholder='Ingresar email' />
                        </div>
                    </div>
                    <div className={style.spanAndInput}>
                        <span>Contraseña</span>
                        <div className={style.inputContainer}>
                            <input onChange={handleChange} name='password' type={!showPassword ? "text" : "password"} placeholder='Ingresar contraseña' />
                            <div style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "1.5rem" }} onClick={() => setShowPassword(!showPassword)}>
                                {icons()[showPassword ? 'eyeClose' : 'eyeOpen']}
                            </div>
                        </div>
                    </div>
                    <div className={style.spanAndInput}>
                        <span>Confirmar Contraseña</span>
                        <div className={style.inputContainer}>
                            <input onChange={handleChange} name='password2' type={!showPassword2 ? "text" : "password"} placeholder='Repetir contraseña' />
                            <div style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "1.5rem" }} onClick={() => setShowPassword2(!showPassword)}>
                                {icons()[showPassword2 ? 'eyeClose' : 'eyeOpen']}
                            </div>
                        </div>
                    </div>
                    <button onClick={register} className={style.buttomJoin}>Registrarse</button>
                    <h1 className={style.message}>¿Ya tienes cuenta? <span onClick={setToLogin} className={style.register}>Ingresa</span></h1>
                </div>
            </div>
        </Portal>
    )
}
