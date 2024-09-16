import axios from "axios";

export const getCoinPrices = (id, days) => {
  const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
    params: {
      'vs_currency': 'usd',
      'days': `${days}`
    },
    headers: {
      'accept': 'application/json',
      'x-cg-demo-api-key': 'CG-dnXMZe4aPPnE8FUHDYckL5bX'
    }
  })
    .then((response) => {
        
        console.log("Response>>>",response.data.prices);
        return response.data.prices;
    })
    .catch((e) => {
      console.log(e.message);
    });

  return prices;
};

// if (response.data) {
//     console.log("Prices>>>", response.data);
//     if (priceType == "market_caps") {
//       return response.data.market_caps;
//     } else if (priceType == "total_volumes") {
//       return response.data.total_volumes;
//     } else {
//       return response.data.prices;
//     }
//   }