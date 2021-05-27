
export default function TaxReducer(state = {totalTaxes: 0}, action){
    switch (action.type)
    {
        case "Bracket37":
            state.totalTaxes += (action.payload - 518401) * .37;
        case "Bracket35":
            state.totalTaxes += (Math.min(action.payload, 518400) - 207351) * .35;
        case "Bracket32":
            state.totalTaxes += (Math.min(action.payload, 207351) - 163301) * .32;
        case "Bracket24":
            state.totalTaxes += (Math.min(action.payload, 163301) - 85526) * .24;
        case "Bracket22":
            state.totalTaxes += (Math.min(action.payload, 85526) - 40126) * .22;
        case "Bracket12":
            state.totalTaxes += (Math.min(action.payload, 40126) - 9876) * .12;
    }
    return state
}

    