
export default function TaxReducer(state = {totalTaxes: 0}, action){
    switch (action.type)
    {
        case "Bracket37":
            state.totalTaxes += (action.payload - 518401) * .37;
        // case "Bracket35":
        //     totalTaxes += (Math.min(income, 518400) - 207351) * .35;
        // case "Bracket32":
        //     totalTaxes += (Math.min(income, 207351) - 163301) * .32;
        // case "Bracket24":
        //     totalTaxes += (Math.min(income, 163301) - 85526) * .24;
        // case "Bracket22":
        //     totalTaxes += (Math.min(income, 85526) - 40126) * .22;
        // case "Bracket12":
        //     totalTaxes += (Math.min(income, 40126) - 9876) * .12;
    }
}

    