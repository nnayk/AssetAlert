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
  }
