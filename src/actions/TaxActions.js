
export const addIncome = (grossIncome) => {
    let income = Number(grossIncome)
    if(income <= 9875)
        return {type: "Bracket0", payload: income}
    if(income > 9875 && income <= 40125)
        return {type: "Bracket12", payload: income}
    if(income > 40125 && income <= 85525)
        return {type: "Bracket22", payload: income}
    if(income > 85525 && income <= 163300)
        return {type: "Bracket24", payload: income}
    if(income > 163300 && income <= 207350)
        return {type: "Bracket32", payload: income}
    if(income > 207350 && income <= 518400)
        return {type: "Bracket35", payload: income}
    if(income > 518400)
        return {type: "Bracket37", payload: income}
}