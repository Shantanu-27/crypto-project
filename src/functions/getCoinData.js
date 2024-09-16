import axios from "axios";

export const getCoinData = (id) => {
  const coinData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`, {
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "\tCG-dnXMZe4aPPnE8FUHDYckL5bX",
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log("Error", error);
    });

  return coinData;
};
