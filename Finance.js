// https://marketstack.com/documentation

// function updatePrices()
// {
//   var spreadsheet = SpreadsheetApp.getActive();
//   let tickers = spreadsheet.getRange("A2:A").getValues()
//   tickers = tickers.map(n => n[0])
//   tickers = tickers.filter(n => n != false && n != 'Cash')
//   console.log(tickers)

//   for (let i = 0; i< tickers.length ; i++)
//   {
//     console.log(tickers[i]+" "+tickers[i] == false)
//   }
//   // formula="=INDEX(GOOGLEFINANCE(" + '"' + ticker + '", ' + '"PRICE"'+'"DATE(2020,3,6)),2,2)"';

//   for (let row = 0; row < tickers.length; row++)
//   {
//       formula="=INDEX(GOOGLEFINANCE(" + '"' + tickers[row] + '", ' + '"PRICE", '+'DATE(2022,8,12)),2,2)';
//       let currRow = 'B'+(row+2);
//       spreadsheet.getRange(currRow).setValue(formula);
//   }

//   // formula="=INDEX(GOOGLEFINANCE(" + '"' + ticker + '", ' + '"PRICE", '+'DATE(2020,3,6)),2,2)';
//   // spreadsheet.getRange('K7').setValue(formula);

//   // getDate(spreadsheet)
// }

// const api_key = 'D92I833FK8E9BJBA'

function getCloseStock(unit,period,stock)
{
  // let stock = "AAPL"
  let url = `https://www.alphavantage.co/query?function=${period}&symbol=${stock}&apikey=${api_key}`
  console.log(url);
  // url = `http://api.marketstack.com/v1/eod?access_key=${api_key}&symbols=BRK-A`
  // console.log("URL",url)

  var response = UrlFetchApp.fetch(url); // get api endpoint
  var json = response.getContentText(); // get the response content as text
  var data = JSON.parse(json); //parse text into json
  // console.log(data);
  // console.log(Object.values(data['Time Series (Daily)'])[1]['4. close']);
  console.log("DATA",data)
  return data[`${unit}`]
}

function getCloseCrypto(unit,period,stock)
{
  // let stock = "AAPL"
  let url = `https://www.alphavantage.co/query?function=${period}&symbol=${stock}&market=CNY&apikey=${api_key}`
  console.log(url);
  // url = `http://api.marketstack.com/v1/eod?access_key=${api_key}&symbols=BRK-A`
  // console.log("URL",url)

  var response = UrlFetchApp.fetch(url); // get api endpoint
  var json = response.getContentText(); // get the response content as text
  var data = JSON.parse(json); //parse text into json
  // console.log(data);
  // console.log(Object.values(data['Time Series (Daily)'])[1]['4. close']);
  return data[`${unit}`]
}




// function getPrevDayPrice(stock)
// {
//   return getClosePrice(stock)[1]['4. close'];
// }

// function getCurrPrice(stock)
// {
//   return getClosePrice(stock)[0]['4. close'];
// }


