import { useSelector } from "react-redux"
import { SignUpView } from "./SignUpView"
import { useNavigate } from 'react-router-dom'
import { Home } from "../Home/Home"

export const SignUp = () => {

    const auth = useSelector(state => state.auth)

    const navigate = useNavigate()

    return (
        auth.authenticate ?
            <>
                {navigate('/')}
                < Home />
            </>
            :
            <>
                <SignUpView />
            </>
    )
}
