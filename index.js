
const findmaxProfit = (input) => {
    let theater = 5;
    let pub = 4;
    let comm = 10;
    let theaterCost = 1500;
    let pubCost = 1000;
    let comCost = 3000;
    let maxprofit =0;
    if (theater < input) {
        let bal = input - theater;
        let profit = bal * theaterCost;
        
        
        if (bal > theater) {
            let val = findmaxProfit(bal);
            profit += val
        }
        if (maxprofit < profit) {
            maxprofit = profit
        }
    } if (pub < input) {
        let bal = input - pub;
        let profit = bal * pubCost
        if (bal > pub) {
            let val = findmaxProfit(bal);
            profit += val
        }
        if (maxprofit < profit) {
            maxprofit = profit
        }
    } if (comm < input) {
        let bal = input - comm;
        let profit = bal * comCost
        if (bal > comm) {
            let val = findmaxProfit(bal);
            profit += val
        }
        if (maxprofit < profit) {
            maxprofit = profit
        }
    }
    return maxprofit
}
let input = 13;
console.log('$'+findmaxProfit(input));