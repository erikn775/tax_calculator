import React from 'react';

export default class CalculatorLogic extends React.Component {

    state = {
        income: null
    }


    render(){
        return(
            <div>

            </div>
        )
    }
}



    function getTaxBracket(grossIncome){
        if(grossIncome <= 9875)
            return TaxBracket.Bracket0;
        if(grossIncome > 9875 && grossIncome <= 40125)
            return TaxBracket.Bracket12;
        if(grossIncome > 40125 && grossIncome <= 85525)
            return TaxBracket.Bracket22;
        if(grossIncome > 85525 && grossIncome <= 163300)
            return TaxBracket.Bracket24;
        if(grossIncome > 163300 && grossIncome <= 207350)
            return TaxBracket.Bracket32;
        if(grossIncome > 207350 && grossIncome <= 518400)
            return TaxBracket.Bracket35;

        return TaxBracket.Bracket37;
    }