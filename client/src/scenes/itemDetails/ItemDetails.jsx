import { IconButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/items";
import { MainContainer,InnerContainer,ImageContainer,BackToHome,RightContainer,ItemDesContainer,ItemDesText,BottomContainer,Counter,AddToCart,TabsDescription ,Description,RelatedItemsCont,RelatedItemsHeading,RelatedItemsCard,ItemDescription} from "../../components/styles/ItemDetails.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `https://strapi-production-6616.up.railway.app/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `https://strapi-production-6616.up.railway.app/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainContainer >
      <InnerContainer >
        {/* IMAGES */}
        <ImageContainer >
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>

        {/* ACTIONS */}
        <RightContainer >
          <BackToHome to="/">Home/Item</BackToHome>
          <ItemDesContainer >
            <ItemDesText >{item?.attributes?.name}</ItemDesText>
            <ItemDesText><b>${item?.attributes?.price}</b></ItemDesText>
            <ItemDesText >
              {item?.attributes?.longDescription}
            </ItemDesText>
          </ItemDesContainer>

          <BottomContainer >
            <Counter>
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <p >{count}</p>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Counter>
            <AddToCart
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </AddToCart>
          </BottomContainer>
           
        </RightContainer>
      </InnerContainer>

      {/* INFORMATION */}
      <TabsDescription>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ sx: {  backgroundColor:'#00E7FF'}}}
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
        }}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </TabsDescription>
      <Description >
        {value === "description" && (
          <ItemDescription>{item?.attributes?.longDescription}</ItemDescription>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Description>

      {/* RELATED ITEMS */}
      <RelatedItemsCont>
        <RelatedItemsHeading>
        You may also like ...
        </RelatedItemsHeading>
        <RelatedItemsCard>
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </RelatedItemsCard>
      </RelatedItemsCont>
    </MainContainer>
  );
};

export default ItemDetails;