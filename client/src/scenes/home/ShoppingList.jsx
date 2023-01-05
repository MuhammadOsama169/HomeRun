import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Item from "../../components/items";
import { ItemConatiner ,MainContainer,InnerContainer,Heading} from "../../components/styles/ShoppingList.styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";


const ShoppingList = () => {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <MainContainer>
      <InnerContainer>
      <Heading >
        Our Featured <b>Products</b>
      </Heading>
      <Tabs
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" , backgroundColor:'#00E7FF'}}}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
          "& button": {
            color:'white'
          },
          "& button:hover": {
            color:'grey'
          },
          "& button:focus": {
            color:'#00E7FF'
          },
          "& button.Mui-selected": {
            color:'#00E7FF'
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>


      <ItemConatiner>
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </ItemConatiner>
      </InnerContainer>
    </MainContainer>
  );
};

export default ShoppingList;