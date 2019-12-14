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
	//1- add a state to store the ratios and by click i will add or remove them from the state
	//so, onclick i want to add and remove the value from the state
	//the problem was when i choose the first odd active state becomes true and when i try to choose second odd active state tries to imply from true side. I should create states for each of them or i should apply the method to change color.
	//2- functionality to choose only one ratio from each game 
	//3- figure out option behavior

	//!important note: maybe find the game by id then use their value to altering the chosen state.

	//background style
	document.body.style = 'background:#7289da;'

	//state for selecting how much money user will put
	const [betMoney, setBetMoney] = useState(3)
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
		//when odd is chosen it activates the handle option change to apply background color
		handleOptionChange(person, option)
		const index = e.target.value
		setChosen(chosen.concat(index))
	}

	const ratioTotal = chosen.reduce((a, b) => a * b)
	const result = parseFloat(ratioTotal * betMoney).toFixed(2)

	// let ratios = chosen.reduce((a, b) => a * b)
	// const result = parseFloat(ratios * betMoney).toFixed(2)

	console.log(`CHOSEN RATIO: ${chosen}`);
	console.log(`BETTED AMOUNT: ${betMoney}`);
	console.log(`RESULT: ${result}`);

	return (
		<Container>
			<Row className="justify-content-md-center">
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
