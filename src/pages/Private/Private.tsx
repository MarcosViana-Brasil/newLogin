import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function Private() {
	const auth = useContext(AuthContext)

	return (
		<div>
			<h2>Página Privada</h2>

			Olá {auth.user?.name} seja bem vindo !
		</div>
	)
}
