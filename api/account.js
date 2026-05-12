import Alpaca from '@alpacahq/alpaca-trade-api';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const alpaca = new Alpaca({
      keyId: process.env.ALPACA_API_KEY,
      secretKey: process.env.ALPACA_SECRET_KEY,
      paper: true, // Important: Use paper trading
      baseUrl: 'https://paper-api.alpaca.markets'
    });

    // Get account information
    const account = await alpaca.getAccount();

    res.status(200).json({
      success: true,
      account: {
        cash: parseFloat(account.cash),
        equity: parseFloat(account.equity),
        buying_power: parseFloat(account.buying_power),
        portfolio_value: parseFloat(account.portfolio_value),
        long_market_value: parseFloat(account.long_market_value),
        short_market_value: parseFloat(account.short_market_value),
        initial_margin: parseFloat(account.initial_margin),
        maintenance_margin: parseFloat(account.maintenance_margin),
        last_equity: parseFloat(account.last_equity),
        status: account.status
      }
    });

  } catch (error) {
    console.error('Alpaca API Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch account data'
    });
  }
}