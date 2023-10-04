export default function LogIn(){
    return (
        <>
            <Form onSubmit={login}>
                <Logo src={driven} />
                <InputStyled name="email" type="email" placeholder="E-mail" required
                    value={email} onChange={e => setEmail(e.target.value)} />
                <InputStyled name="password" type="password" placeholder="Senha" required
                    value={password} onChange={e => setPassword(e.target.value)} />
                <ButtonStyled type="submit">ENTRAR</ButtonStyled>
                <Tosignin to="/cadastro">Não possui uma conta? Cadastre-se</Tosignin>
            </Form>
        </>)
}

const Logo = styled.img`
            width: 299px;
            height: 49px;
            margin: 134px auto 100px auto;
            display: flex;
            align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const Tosignin = styled(Link)`
    font-family: "roboto";
    font-size: 14px;
    font-weight: 400;
    color: white;
`