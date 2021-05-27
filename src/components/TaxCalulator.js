import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addIncome } from '../actions/TaxActions'


class TaxCalculator extends React.Component {

    state = {
        income: 0
    }
    
    handleSubmit = (event) => {
        let income = this.state.income
        this.props.addIncome(income)
    }

    handleChange = (event) => {
        this.setState({
            income: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="income">
                        <Form.Label>Gross Income</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    
                <div>
                    <h3>Net Income:</h3>
                    {this.state.income}
                </div>
    
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIncome: (income) => dispatch(addIncome(income))
        }
  }

export default connect(null, mapDispatchToProps)(TaxCalculator);