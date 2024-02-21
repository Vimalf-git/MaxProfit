let arr = [
    { plot: 5, cost: 1500 },
    { plot: 4, cost: 1000 },
    { plot: 10, cost: 3000 }
];

const findmaxProfit = (plot, cost, input) => {
    let profit = 0;
    if (plot < input) {
        let bal = input - plot;
        profit = bal * cost;
        if (bal > plot) {
            let val = findmaxProfit(plot, cost, bal);
            profit += val
        }
    }
    return profit
}

let button=document.getElementById('btnConClick');
button.addEventListener('click',()=>{
    let max = 0;
    document.getElementById('profitCon').innerHTML=''
    let input=document.getElementById('inputCon').value;
    arr.forEach((e) => {
        let data = findmaxProfit(e.plot, e.cost, input);
        if (max < data) {
            max = data;
        } 
    })
    document.getElementById('profitCon').innerHTML = `$ ${max}`
})
