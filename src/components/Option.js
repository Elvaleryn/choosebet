import React from 'react'
//bootstrap
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Option = ({ option, result, handleMoneyChange }) => {



	return (
		<div>
			{/* <form name="secim">
				Misli
      	<select name="liste" onChange={handleMoneyChange}>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
				K.Bedeli:{option}
				M. Kazan:{result}
			</form> */}
			<Form>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Row>
						<Col>
							<Form.Label>Select</Form.Label>
							<Form.Control as="select" onChange={handleMoneyChange}>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
							</Form.Control>
							K.Bedeli:{option}
							M. kazanç:{result}
						</Col>
					</Row>
				</Form.Group>
			</Form>
		</div>
	)
}

export default Option