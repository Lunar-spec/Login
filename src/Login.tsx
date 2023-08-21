import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loginsvg from './assets/Login-rafiki.svg'

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const LeftSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightSide = styled.div`
    flex: 1;
    padding: 50px 60px;
    background-color: #fff;
    filter: drop-shadow(0 0 20px #E2E2E2);
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    color: #04072f;

    @media only screen and (max-width: 600px) {
        padding: 5px;
        filter: none;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    padding: 10px;

    @media only screen and (max-width: 600px) {
        padding: 0;
        margin: 0;
    }
`;
const Label = styled.label`
    letter-spacing: 1px;
    color: #04072f;
    margin-bottom: 5px;
    text-align: left;
`;

const UserLabel = styled(Label)`
    position: relative;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.input`
    margin: 0 auto;
    width: 95%;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 12px;
    font-family: 'Poppins', sans-serif;
    outline: none;
    font-size: 1rem;
    color: #04072f;

    &::placeholder {
        color: #737b86;
    }

    @media only screen and (max-width: 600px) {
        padding: 7px;
    }
`;

const PasswordLabel = styled(Label)`
    position: relative;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const EyeIcon = styled.span`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 3.65rem;
    right: 20px;
    cursor: pointer;
    font-size: 20px;
    color:#737b86;

    @media only screen and (max-width: 600px) {
        right: 8px;
        top: 3.5rem;
        font-size: 18px;
    }

`;

const CheckBox = styled.input`
    accent-color: #f78719;
    height: 20px;
    width: 20px;
    margin-right: 8px;
    @media only screen and (max-width: 600px) {
        height: 15px;
        width: 15px;
    }
`;

const RememberMe = styled(Label)`
    display: flex;
    flex-direction: row;
    color:#737b86;
    align-items: center;
`;

const TermsLabel = styled(Label)`
    display: flex;
    flex-direction: row;
    color:#737b86;
    align-items: center;

    @media only screen and (max-width: 600px) {
        display: initial;
        align-items: center;
        justify-content: center;
    }
`;

const Anchor = styled.a`
    color: #f78719;
    margin-left: 5px;
    text-decoration: underline;

    @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin:0 auto;
    padding: 12px;
    background-color: #1575a7;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`;

const RegisterLink = styled(Anchor)`
    text-decoration: none;
    display: block;
    text-align: center;
    margin-top: 20px;
    color:#737b86;

`;


const LoginScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <LeftSide>
                <img src={Loginsvg} alt="svg" />
            </LeftSide>
            <RightSide>
                <Title>Login</Title>
                <Form>
                    <UserLabel>
                        Login ID
                    </UserLabel>
                    <Input type="text" placeholder="Enter Login ID" />

                    <div>
                        <PasswordLabel>
                            Password
                            <EyeIcon onClick={handleTogglePassword}>
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </EyeIcon>
                        </PasswordLabel>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                        />
                    </div>
                    <RememberMe>
                        <CheckBox type="checkbox" />
                        Remember me
                    </RememberMe>
                    <TermsLabel>
                        <CheckBox type="checkbox" />
                        Agree to<Anchor href="#">Terms & Conditions</Anchor>
                    </TermsLabel>

                    <Button>Login</Button>
                </Form>
                <RegisterLink>Don't have an account?<Anchor href="#">Register Here</Anchor></RegisterLink>
            </RightSide>
        </Container>
    );
};

export default LoginScreen;
