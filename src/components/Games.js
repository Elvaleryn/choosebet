import React from 'react'
//bootstrap
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Games = ({ games, chooseOdd }) => {



	return (
		<div>
			{games.map(p =>
				<div>
					<p style={{fontWeight: "600"}} key={p.id}>{p.game}</p>
					<div>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<Button onClick={(e) => chooseOdd(e, p, 'is1Selected')}variant="outline-secondary">{p.homeWin}</Button>
							</InputGroup.Prepend>
							<FormControl id="one" style={{ backgroundColor: p.is1Selected ? 'Yellow' : 'Gray' }} value={p.homeWin}  aria-describedby="basic-addon1" readOnly/>

							<InputGroup.Prepend>
								<Button onClick={(e) => chooseOdd(e, p, 'is2Selected')} variant="outline-secondary">{p.draw}</Button>
							</InputGroup.Prepend>
							<FormControl id="two" style={{ backgroundColor: p.is2Selected ? 'Yellow' : 'Gray' }} value={p.draw}  aria-describedby="basic-addon1" readOnly/>

							<InputGroup.Prepend>
								<Button onClick={(e) => chooseOdd(e, p, 'is3Selected')} variant="outline-secondary">{p.awayWin}</Button>
							</InputGroup.Prepend>
							<FormControl id="three" style={{ backgroundColor: p.is3Selected ? 'Yellow' : 'Gray' }} value={p.awayWin} aria-describedby="basic-addon1" readOnly/>
						</InputGroup>
					</div>
				</div>
			)}
		</div>
	)
}

export default Games