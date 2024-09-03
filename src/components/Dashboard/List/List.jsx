import React from "react";
import "./List.css";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";

function List({ coin, key }) {
  return (
    <tr className="list-row">
      <Tooltip title="Coin Logo" placement="bottom-end">
        <td className="td-image">
          <img src={coin.image} className="coin-logo" />
        </td>
      </Tooltip>
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRounded />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownRounded />
          </div>
        </td>
      )}
      <Tooltip title="Current Price" placement="bottom-end">
        <td>
          <h3
            className="coin-price td-center-align`"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Total_volume" placement="botton-end">
        <td>
          <p className="total_volume td-right-align td-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market_cap" placement="bottom-end">
        <td className="desktop-td-mkt">
          <p className="total_volume td-right-align ">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market_cap" placement="bottom-end">
        <td className="mobile-td-mkt" >
          <p className="total_volume td-right-align ">
            ${convertNumber(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
