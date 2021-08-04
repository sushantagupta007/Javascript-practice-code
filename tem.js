//Interest RAte Function

function interestCalculator (principal, rate, time){
    const interest = (principal*rate*time)/100;
    return interest; 
}

let interest = interestCalculator (1000,10,2);
console.log(interest); 