const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr){
    return curr*amount;
}

function promotion(result){
    console.log(result * discount);
}

promotion(convert(500, usdCurr));