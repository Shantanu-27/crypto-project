import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import "./Tabs.css"

export default function Tabs({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    pallete: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  const style = {
    color: "var(--white)",
    width: "100vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          variant="fullWidth"
          aria-label="lab API tabs example"
        >
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="Grid"variant="fullWidth">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table>
          {coins.map((item, i) => {
              return (
                <List coin={item} key={i} />
              );
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
