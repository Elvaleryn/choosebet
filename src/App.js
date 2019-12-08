import React from 'react'
//hooks
import { useState, useEffect } from 'react'
//services
import gameService from './services/gameservice'
//components
import Header from './components/Header'
import Games from './components/Games'
import Option from './components/Option'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const App = () => {

	//set state for option element
	const [option, setOption] = useState(Number)
	//state for the odd value
	const [chosen, setChosen] = useState([1])
	//basically a data base for games
	const [games, setGames] = useState([])

	useEffect(() => {
		gameService
			.fetchGames()
			.then(response => {
				setGames(response.data)
			})
	}, [])

	const handleOptionChange = (game, option) => {
		game[option] = !game[option]
		setGames([...games])
	}

	const handleMoneyChange = (event) => {
		setOption(event.target.value)
	}

	const chooseOdd = (e, person, option) => {
		handleOptionChange(person, option)
		setChosen(chosen.concat(e.target.value))
	}
	const ratioTotal = chosen.reduce((a, b) => a * b)
	const result = parseFloat(ratioTotal * option).toFixed(2)

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md="auto">
					<Header />
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<Games
						games={games}
						chooseOdd={chooseOdd}
					/>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<Option
						option={option}
						result={result}
						handleMoneyChange={handleMoneyChange}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default App
