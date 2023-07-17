import React, { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Container } from '@mui/material';

function Login() {
    const navigate = useNavigate();
    return (
        <Container maxWidth="sm" sx={{}}>
            <Card sx={{
                minWidth: 275, display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center !important",
                borderRadius: "10px",
                alignContent: "center",
                marginTop: "5rem !important",
                border: "1px solid grey ",
                boxShadow: "2px 2px",
            }}>
                <CardContent sx={{display: "flex",
                flexDirection: "column",
                justifyContent: "center",   }}>
                    <h4> Login With Google</h4>
                    <GoogleOAuthProvider clientId="312833596109-4fo2ok5ppqabqgdrs94ms50tbhplvil2.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                var decoded = jwt_decode(credentialResponse.credential);
                                // setLoginData(decoded)
                                localStorage.setItem('loginData', JSON.stringify(decoded));
                                navigate("/user");
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Login
