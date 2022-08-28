function getMonth()
{
  // let URL = "https://paper-api.alpaca.markets";
let today = new Date();
return String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

// today = mm + '/' + dd + '/' + yyyy;

// console.log(`DATE ${today}`);
// formula=`=INDEX(GOOGLEFINANCE("EPD","PRICE",DATE(${yyyy},${mm},${dd})),2,2)`;
// spreadsheet.getRange('K8').setValue(formula);
}

function getPrevMonth()
{
  const currMonth = (new Date()).getMonth()+1;

  let prevMonth=currMonth-1;

  if (prevMonth==0)
  {
    prevMonth=12;
  }


  return String(prevMonth).padStart(2,'0');

}

function getDay()
{
let today = new Date();
return String(today.getDate()).padStart(2, '0');
}

function getYear()
{
let today = new Date();
return today.getFullYear();
}

function getcurrMonthName()
{
  return new Date().toLocaleString(
  'default', {month: 'long'});
}