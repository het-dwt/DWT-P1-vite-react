import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Shop from "./shop/shop";
import ProductList from "./home/addProducts";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Home" value="1" />
            <Tab label="Contact" value="2" />
            <Tab label="About" value="3" />
            <Tab label="Shop" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Home />
          <ProductList />
        </TabPanel>
        <TabPanel value="2">
          <Contact />
        </TabPanel>
        <TabPanel value="3">
          <About />
        </TabPanel>
        <TabPanel value="4">
          <Shop />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
