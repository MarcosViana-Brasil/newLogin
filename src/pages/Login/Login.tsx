import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"


export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogin = async () => {
		if (email && password) {
			const isLogged = await auth.signin(email, password)
			if (isLogged) {
				navigate('/')
			} else {
				alert('Acesso negado...')
			}
		}
	}

	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	return (
		<div>
			<h2>Página fechada</h2>

			<input
				type="text"
				value={email}
				placeholder='Digite seu email'
				autoComplete=""
				onChange={handleEmailInput}
			/>
			<br />
			<br />


			<input
				type="password"
				value={password}
				placeholder='Digite sua senha'
				autoComplete=""
				onChange={handlePasswordInput}
			/>
			<br />
			<br />

			<button type='button' onClick={handleLogin}>Logar</button>
		</div>

	)
}
