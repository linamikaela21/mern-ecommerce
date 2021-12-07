import { useDispatch, useSelector } from "react-redux"
import { SignUpView } from "./SignUpView"
import { useNavigate } from 'react-router-dom'
import { Home } from "../Home/Home"
import { signUp } from "../../redux/actions"
import { useEffect, useState } from "react"

export const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [role, setRole] = useState('')

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        if (!user.loading) {
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
        }
      }, [user.loading])

    const signup = (e) => {
        e.preventDefault()
        const user = { firstName, lastName, email, password, role }
        console.log(user)
        dispatch(signUp(user))
    }

    if (user.loading) {
        return <p>Loading...!</p>;
      }

    return (
        auth.authenticate ?
            <>
                {navigate('/')}
                < Home />
            </>
            :
            <>
                <SignUpView
                    signup={signup}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    errors={errors}
                    setErrors={setErrors}
                    role={role}
                    setRole={setRole} />
            </>
    )
}
