function launchThresholdTool() {
    // Schedule daily 7 PM email.
    addTitles()
    intro()
    Utilities.sleep(5*1000)
    getApiKey()
    daily_email()
    weekly_email()
    monthly_email()

    ScriptApp.newTrigger('daily_email')
        .timeBased()
        .everyDays(1)
        .atHour(23)
        .inTimezone("America/Los_Angeles")
        .create();
  
    // Schedule weekly 7 PM email.
    ScriptApp.newTrigger('weekly_email')
        .timeBased()
        .onWeekDay(ScriptApp.WeekDay.SUNDAY)
        .atHour(23)
        .inTimezone("America/Los_Angeles")
        .create();
    
    // Schedule monthly 7 PM email.
    ScriptApp.newTrigger('monthly_email')
        .timeBased()
        .onMonthDay(1)
        .atHour(23)
        .inTimezone("America/Los_Angeles")
        .create();
  }
  
  function daily_email()
  {
   
    
    //Get stocks that exceed daily threshold
    const tickers = getTickers();
    const categories = getCategories()
    console.log("CATS",categories)
    const thresholds = getDailyThresholds();
    let prev_price = 0;
    let curr_price = 0;
    let percent_change = 0;
    let valid_stocks = []
    let count = 0;
    let price_data = []
  
  
  
    for(let i=0;i<tickers.length;i++)
    {
      console.log(tickers[i],valid_stocks)
      console.log(categories[i]=="S")
      if (categories[i]=="S")
      {
        console.log("VALID STOCKS")
        price_data = Object.values(getCloseStock("Time Series (Daily)","TIME_SERIES_DAILY",tickers[i]))
        prev_price=price_data[0]['1. open']
        curr_price=price_data[0]['4. close'];
      }
      else if (categories[i]=="C")
      {
        console.log("VALID CRYPTO")
        price_data = Object.values(getCloseCrypto("Time Series (Digital Currency Daily)","DIGITAL_CURRENCY_DAILY",tickers[i]))
        prev_price=price_data[0]['1b. open (USD)']
        curr_price=price_data[0]['4b. close (USD)'];
      }
      console.log("PRICEY",price_data)
      console.log("PREV",prev_price);
      console.log("CURR",curr_price);
      percent_change = getPercentChange(prev_price,curr_price);
      count += 1;
      console.log(percent_change,thresholds[i])
      if (Math.abs(percent_change)>=Math.abs(thresholds[i])) valid_stocks.push([tickers[i]+"\nActual Change: "+percent_change+"\nDaily Threshold: "+thresholds[i]]);
      if (count%5==0) 
      {
        console.log("SLEEPING...")
        Utilities.sleep(70*1000);
      }
    }
  
    const user = getEmail();
    const subject = craftSubject('Daily');
    const message = craftMessage('daily',valid_stocks.join('\r\n\n'));
    send_email(user,subject,message)
  
  }
  
  function weekly_email()
  {
    //Get stocks that exceed daily threshold
    const tickers = getTickers();
    const thresholds = getDailyThresholds();
    const categories = getCategories()
    let prev_price = 0;
    let curr_price = 0;
    let percent_change = 0;
    let valid_stocks = []
    let count = 0;
    let price_data = []
  
  
  
    for(let i=0;i<tickers.length;i++)
    {
      if (categories[i]=="S")
      {
        console.log("VALID STOCKS")
        price_data = Object.values(getCloseStock("Weekly Time Series","TIME_SERIES_WEEKLY",tickers[i]))
        prev_price=price_data[0]['1. open']
        curr_price=price_data[0]['4. close'];
      }
      else if (categories[i]=="C")
      {
        console.log("VALID CRYPTO")
        price_data = Object.values(getCloseCrypto("Time Series (Digital Currency Weekly)","DIGITAL_CURRENCY_WEEKLY",tickers[i]))
        prev_price=price_data[0]['1b. open (USD)']
        curr_price=price_data[0]['4b. close (USD)'];
      }
      console.log("PRICEY",price_data)
      console.log("PREV",prev_price);
      console.log("CURR",curr_price);
      percent_change = getPercentChange(prev_price,curr_price);
      count += 1;
      console.log(percent_change,thresholds[i])
      if (Math.abs(percent_change)>=Math.abs(thresholds[i])) valid_stocks.push([tickers[i]+"\nActual Change: "+percent_change+"\nDaily Threshold: "+thresholds[i]]);
      if (count%5==0) 
      {
        console.log("SLEEPING...")
        Utilities.sleep(70*1000);
      }
    }
  
    console.log(valid_stocks);  
  
    const user = getEmail();
    const subject = craftSubject('Weekly');
    const message = craftMessage('weekly',valid_stocks.join('\r\n\n'));
    send_email(user,subject,message)
  }
  
  function monthly_email()
  {
    //Get stocks that exceed daily threshold
    const tickers = getTickers();
    const thresholds = getMonthlyThresholds();
    const categories = getCategories()
    let prev_price = 0;
    let curr_price = 0;
    let percent_change = 0;
    let valid_stocks = []
    let count = 0;
    let price_data = []
    let index = 0
  
  
  
    for(let i=0;i<tickers.length;i++)
    {
      console.log("COMPANY",tickers[i])
      if (categories[i]=="S")
      {
        console.log("VALID STOCKS")
        price_data = Object.values(getCloseStock("Monthly Time Series","TIME_SERIES_MONTHLY",tickers[i]))
        prev_price=price_data[0]['1. open']
        curr_price=price_data[0]['4. close'];
      }
      else if (categories[i]=="C")
      {
        console.log("VALID CRYPTO")
        price_data = Object.values(getCloseCrypto("Time Series (Digital Currency Monthly)","DIGITAL_CURRENCY_MONTHLY",tickers[i]))
        prev_price=price_data[0]['1b. open (USD)']
        curr_price=price_data[0]['4b. close (USD)'];
      }
      console.log("PRIZ",price_data)
      recent_month = (Object.keys(price_data)[0]).split('-')[1]
      console.log(getPrevMonth(),getPrevMonth()==recent_month)
      if (getPrevMonth()!=recent_month)
      {
        index=1
      }
  
      console.log("PRICEY",price_data)
      prev_price=price_data[index]['1. open']
      curr_price=price_data[index]['4. close'];
      console.log("PREV",prev_price);
      console.log("CURR",curr_price);
      percent_change = getPercentChange(prev_price,curr_price);
      count += 1;
      console.log(percent_change,thresholds[i])
      if (Math.abs(percent_change)>=Math.abs(thresholds[i])) valid_stocks.push([tickers[i]+"\nActual Change: "+percent_change+"\nMonthly Threshold: "+thresholds[i]]);
      if (count%5==0) 
      {
        console.log("SLEEPING...")
        Utilities.sleep(70*1000);
      }
    }
  
    console.log(valid_stocks);
  
  
    const user = getEmail();
    const subject = craftSubject('Monthly');
    const message = craftMessage('monthly',valid_stocks.join('\r\n\n'));
    send_email(user,subject,message)
  }
