// let api_key=undefined;
function getApiKey() {
    var ui = SpreadsheetApp.getUi();
    var result = ui.prompt("Please generate an API key at https://www.alphavantage.co/support/#api-key.\nEnter your API key");
    api_key = result.getResponseText();
  }
  
  function intro()
  {
    console.log("INSIDE INTRO")
    var ui = SpreadsheetApp.getUi();
    ui.alert("Welcome to Asset Alert!\nFor the column titled 'Category', enter 'S' for stocks and 'C' for cryptocurrencies");
  //   var htmlOutput = HtmlService
  //     .createHtmlOutput(
  //     `<h1 style="color:green">Welcome to Asset Alert!</h1>
  //     <h2 style="color:green">The first five column titles have been filled in for you.</h2>
  //     <h2 style="color:green">For the column titled 'Category,' enter 'S' for stocks and 'C' for cryptocurrencies.</h2>`)
  //     .setWidth(250)
  //     .setHeight(300);
  // SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Asset Alert - Introduction');
  }