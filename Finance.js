function getCloseStock(unit,period,stock)
{
  let url = `https://www.alphavantage.co/query?function=${period}&symbol=${stock}&apikey=${api_key}`
  console.log(url);


  var response = UrlFetchApp.fetch(url); // get api endpoint
  var json = response.getContentText(); // get the response content as text
  var data = JSON.parse(json); //parse text into json

  console.log("DATA",data)
  return data[`${unit}`]
}

function getCloseCrypto(unit,period,stock)
{
  let url = `https://www.alphavantage.co/query?function=${period}&symbol=${stock}&market=CNY&apikey=${api_key}`
  console.log(url);

  var response = UrlFetchApp.fetch(url); // get api endpoint
  var json = response.getContentText(); // get the response content as text
  var data = JSON.parse(json); //parse text into json
  return data[`${unit}`]
}

