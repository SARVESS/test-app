
// Question - 1:
// Input
const portfolio = [
    {name: 'Mark', stock: 'FB'},
    {name: 'Steve', stock: 'AAPL'},
    {name: 'Tim', stock: 'AAPL'},
    {name: 'Steve', stock: 'MSFT'},
    {name: 'Bill', stock: 'MSFT'},
    {name: 'Bill', stock: 'AAPL'},
    ];
    
    // Output
    const shareholder = [
      {stock: 'AAPL', name:['Steve', 'Bill', 'Tim'], count:3},
      {stock: 'MSFT', name:['Steve', 'Bill'], count:2},
      {stock: 'FB', name:['Mark'], count:1},
    ];
    
    
    // write your function here.
    
    function shares(portfolios) {
       const shareHolders = {};
       portfolios.map((portfolio) => {
          const { name, stock } = portfolio;
          if(!shareHolders[stock]) {
            shareHolders[stock] = {
               stock: stock,
               name: [name],
               count: 1
            }
          } else {
             shareHolders[stock].name.push(name);
             shareHolders[stock].count++;
          }
       });
       return Object.values(shareHolders);
    }
    
    console.log(shares(portfolio));


// Question - 2:

// for any given number you've to return the number in words
// Suppose n = 10 => it should print Ten
// Suppose n = 87 => it should print Eighty Seven
// Suppose n = 3 => Three

// n will be less than 100
// n will be greater than 0
// 0 < n < 100

function print(n) {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    
    if (n === 0) {
      return 'Zero';
    }
    
    let words = '';
    
    if (n >= 10 && n < 20) {
      words = teens[n - 10];
    } else {
      const onesDigit = n % 10;
      const tensDigit = Math.floor(n / 10);
      
      words = tens[tensDigit];
      if (onesDigit > 0) {
        if (words) {
          words += ' ';
        }
        words += ones[onesDigit];
      }
    }
    
    return words;
  }
  
  console.log(print(99));