import React from 'react'
//bootstrap
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Games = ({ games, chooseOdd }) => {

	const buttonBackground = {
		backgroundColor: 'black',
		width: '55px'
	}

	return (
		<div>
			{games.map(p =>
				<div>
					<p style={{fontWeight: '600'}, {fontSize: '1.5em'}} key={p.id}>{p.game}</p>
					<div>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<Button style={buttonBackground} value={p.homeWin} onClick={(e) => chooseOdd(e, p, 'is1Selected')}>{p.homeWin}</Button>
							</InputGroup.Prepend>
							<FormControl id="one" style={{ backgroundColor: p.is1Selected ? 'Yellow' : 'White' }} value={p.homeWin}  aria-describedby="basic-addon1" readOnly/>

							<InputGroup.Prepend>
								<Button style={buttonBackground} value={p.draw} onClick={(e) => chooseOdd(e, p, 'is2Selected')}>{p.draw}</Button>
							</InputGroup.Prepend>
							<FormControl id="two" style={{ backgroundColor: p.is2Selected ? 'Yellow' : 'White' }} value={p.draw}  aria-describedby="basic-addon1" readOnly/>

							<InputGroup.Prepend>
								<Button style={buttonBackground} value={p.awayWin} onClick={(e) => chooseOdd(e, p, 'is3Selected')}>{p.awayWin}</Button>
							</InputGroup.Prepend>
							<FormControl id="three" style={{ backgroundColor: p.is3Selected ? 'Yellow' : 'White' }} value={p.awayWin} aria-describedby="basic-addon1" readOnly/>
						</InputGroup>
					</div>
				</div>
			)}
		</div>
	)
}

export default Games