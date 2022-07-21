import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";
import { validateRegisterForm } from "../../shared/utils/Validators";
import { connect } from "react-redux";
import {getActions} from "../../store/actions/authActions";
import {useNavigate} from 'react-router-dom';

const RegisterPage = ({register}) => {
    const history = useNavigate();

    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState(false)

    const handleRegister = () => {
        const userDetails = {
            "mail":mail,
            "password":password,
            "username": username,
        }

        register(userDetails,history)
    }

    useEffect(() => {
        setIsFormValid(validateRegisterForm({mail,username,password}))
    }, [mail,username,password,setIsFormValid])

    return (
        <AuthBox>
            <Typography variant='h5' sx={{color:'white'}}>
                Create an account
            </Typography>
            <RegisterPageInputs 
                mail={mail}
                setMail={setMail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter
            handleRegister={handleRegister}
            isFormValid={isFormValid} />
        </AuthBox>
            
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(RegisterPage);