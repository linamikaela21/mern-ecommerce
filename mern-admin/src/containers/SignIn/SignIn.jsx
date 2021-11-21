import { SignInView } from './SignInView'
import { Home } from '../Home/Home'
import { logIn, isUserLoggedIn } from '../../redux/actions/auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

export const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [role, setRole] = useState('')

    const auth = useSelector(state => state.auth)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogIn = (e) => {
        
        e.preventDefault()

        const user = { email, password }

        dispatch(logIn(user))
    }

    useEffect(() => {
        if(!auth.authenticate) {
        dispatch(isUserLoggedIn)
        }
    }, [])

    return (
        auth.authenticate ?
        <>
        { navigate('/') }
        < Home />
        </>
        :
        <div>
            <SignInView 
            userLogIn={userLogIn}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            errors={errors}
            setErrors={setErrors}
            role={role}
            setRole={setRole}
            />
        </div>
    )
}
