function send_email(recipient,subject,message)
{
    GmailApp.sendEmail(recipient,subject,message);
  // MailApp.sendEmail('nakul.indus@gmail.com',"Hello","Hi Nakul");
}

function craftSubject(frequency)
{
  return `Asset Alert: ${frequency} Watchlist Update`
}

function craftMessage(frequency,valid_stocks,valid)
{
  const user = getUsername()
  return `Hey ${user},\n\nHere are the following stocks and cryptocurrencies whose price met or exceeded your ${frequency} threshold change:\n\n${valid_stocks}`;
}