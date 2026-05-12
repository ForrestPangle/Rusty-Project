export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const apiKey = process.env.ALPACA_API_KEY;
    const secretKey = process.env.ALPACA_SECRET_KEY;

    const response = await fetch('https://paper-api.alpaca.markets/v2/account', {
      method: 'GET',
      headers: {
        'APCA-API-KEY-ID': apiKey,
        'APCA-API-SECRET-KEY': secretKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Alpaca API error: ${response.status} - ${errorText}`);
    }

    const account = await response.json();

    res.status(200).json({
      success: true,
      account: {
        cash: parseFloat(account.cash),
        equity: parseFloat(account.equity),
        buying_power: parseFloat(account.buying_power),
        portfolio_value: parseFloat(account.portfolio_value),
        status: account.status
      }
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}