import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import axios from "axios";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import Search from "../components/Dashboard/Search/Search";
import Loader from "../components/Common/Loader/Loader";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
// eslint-disable-next-line
  var filteredCoins = coins.filter((item) => {
    item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowercase().includes(search.toLowerCase());
  });
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "inr",
          per_page: "100",
        },
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-dnXMZe4aPPnE8FUHDYckL5bX",
        },
      })
      .then((response) => {
        console.log("Response", response);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;
//
  //
  //"deploy": "gh-pages -d build",
  //