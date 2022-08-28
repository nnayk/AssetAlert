let spreadsheet = SpreadsheetApp.getActive();

function getOwner()
{
  return spreadsheet.getOwner();
}

function getEmail()
{
  return getOwner().getEmail()
}


function getUsername()
{
  return getOwner().getUsername();
}

function getData(range)
{
  let data = spreadsheet.getRange(range).getValues()
  data = data.map(n => n[0])
  data = data.filter(n => (n != false || typeof n == 'number'))
  // console.log(thresholds)
  return data
}

function getTickers()
{
  let tickers = getData("A2:A");

  return tickers;
}

function getCategories()
{
  let cats = getData("B2:B");

  return cats;
}

function getDailyThresholds()
{
  let thresholds = getData("C2:C");
  console.log(thresholds)
  return thresholds;
}

function getWeeklyThresholds()
{
  let thresholds = getData('D2:D');

  return thresholds;
}

function getMonthlyThresholds()
{
  let thresholds = getData("E2:E");

  return thresholds;
}

function addTitles()
{
  SpreadsheetApp.getActiveSheet().getRange('A1').setValue('Ticker');
  SpreadsheetApp.getActiveSheet().getRange('B1').setValue('Category');
  SpreadsheetApp.getActiveSheet().getRange('C1').setValue('Daily Change');
  SpreadsheetApp.getActiveSheet().getRange('D1').setValue('Weekly Change');
  SpreadsheetApp.getActiveSheet().getRange('E1').setValue('Monthly Change');
}

function wait()
{
  // Utilities.sleep(5*1000);
  // console.log("SPREADY",SpreadsheetApp.getActiveSheet().getRange('A2').getValue())
  // let one = SpreadsheetApp.getActiveSheet().getRange('A2').getValue().length==0
  // console.log(one)
  // return one 
  // && SpreadsheetApp.getActiveSheet().getRange('B2').getValue().length==0
  // && SpreadsheetApp.getActiveSheet().getRange('C2').getValue().length==0
  // && SpreadsheetApp.getActiveSheet().getRange('D2').getValue().length==0
  // && SpreadsheetApp.getActiveSheet().getRange('E2').getValue().length==0
}