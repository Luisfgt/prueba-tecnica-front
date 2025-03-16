import { Portal } from '../../../helpers/Portal'
import logo from '../../../assets/logo.png'
import style from './login.module.css'
import { icons } from '../../../helpers/icons'
import { useState } from 'react'
import { postBack } from '../../../helpers/postFromBack'
import { User } from '../../../App'

export const Login = ({ closeModal, logUser, setUser, setToRegister }: { closeModal: () => void, logUser: () => void, setUser: React.Dispatch<React.SetStateAction<User>>, setToRegister: () => void }) => {

    const [showPassword, setShowPassword] = useState(true);
    const [infoToSend, setInfoToSend] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfoToSend({
            ...infoToSend,
            [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        try {
            const auth = await new postBack().auth(infoToSend.email, infoToSend.password);
            console.log(auth);
            
            if (auth.success) {
                setUser(auth.user);
                logUser();
                return closeModal();
            }
            return
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
                        <h1 className={style.titleModal}>Ingresar</h1>
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
                    <button onClick={login} className={style.buttomJoin}>Ingresar</button>
                    <h1 className={style.message}>¿No tienes cuenta? <span onClick={setToRegister} className={style.register}>Regístrate</span></h1>
                </div>
            </div>
        </Portal>
    )
}
