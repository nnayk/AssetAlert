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


