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

	//state for selecting how much money user will put
	const [betMoney, setBetMoney] = useState(Number)
	//state for the odd value
	const [chosen, setChosen] = useState([1])
	//basically a data base for games
	const [games, setGames] = useState([])

	//getting data from server
	useEffect(() => {
		gameService
			.fetchGames()
			.then(response => {
				setGames(response.data)
			})
	}, [])

	//to pick the chosen odd
	const handleOptionChange = (game, option) => {
		game[option] = !game[option]
		setGames([...games])
	}

	const handleMoneyChange = (event) => {
		setBetMoney(event.target.value)
	}

	//when odd is chosen it activates the handle option change to apply background color
	const chooseOdd = (e, person, option) => {
		handleOptionChange(person, option)
		setChosen(chosen.concat(e.target.value))
	}
	
	const ratioTotal = chosen.reduce((a, b) => a * b)
	const result = parseFloat(ratioTotal * betMoney).toFixed(2)

	console.log(chosen);
	console.log(betMoney);
	console.log(ratioTotal);
	console.log(result);

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
						betMoney={betMoney}
						result={result}
						handleMoneyChange={handleMoneyChange}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default App
