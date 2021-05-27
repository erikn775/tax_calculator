import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'

export default function TaxCalculator() {
    const [income, setIncome] = useState(0);
    const [netIncome, setNetIncome] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    const counter = useSelector(state => {
        console.log(state)
        
    });
    
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setIncome(event.target.value)
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="income">
                    <Form.Label>Gross Income</Form.Label>
                    <Form.Control type="text" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div>
                <h3>Net Income:</h3>
                {netIncome}
            </div>

        </div>
    )
}