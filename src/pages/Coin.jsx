import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
import { gettingDate } from "../functions/getDate";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import settingChartData  from "../functions/settingChartData.js";


function Coin() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({labels:[],datasets:[]});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        setChartData({
          labels: prices.map((price)=>gettingDate(price[0])
        ),
          datasets: [
            {
              data: prices.map((price)=>price[1]),
              borderColor: '#3a80e9',
              borderWidth:2,
              fill:true,
              tension:0.25,
              backgroundColor:prices?"transparent":"rgba(58,128,233,0.1)",
              pointRadius:0,
            },
          ]
        });
        setIsLoading(false);
      }
    }
  }
  
  const handleDaysChange = async(event)=>{
    setIsLoading(true);
    const prices=await getCoinPrices(id,event.target.value);
    if(prices.length>0){
      setChartData(settingChartData(prices));
      setIsLoading(false);
    }
    setDays(event.target.value);
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{padding:"0rem 1rem"}}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default Coin;
