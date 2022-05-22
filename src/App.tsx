/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useContext } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import Private from './pages/Private/Private'
import './App.css'
import { AuthRequire } from './contexts/Auth/AuthRequire'
import { AuthContext } from './contexts/Auth/AuthContext'

function App() {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.signout()
		navigate('/')
	}

	return (
		<div className="App">
			<header>
				<h1>Header</h1>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/private'>Página Privada</Link>
					{auth.user && <Link to='/' onClick={handleLogout}>Sair</Link>}
				</nav>
			</header>
			<hr />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/private' element={<AuthRequire><Private /></AuthRequire>} />
			</Routes>
		</div>
	)
}

export default App
