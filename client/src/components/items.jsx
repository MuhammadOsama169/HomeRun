import { useState } from "react";
import { useDispatch } from "react-redux";
import { MainContainer,DescriptionContainer,Heading,HeadingPrice,HoverContainer,Container,ImageContainer,Button,HoverComponents } from "./styles/items.styled";

import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, price, name, image } = item.attributes;
  const url = image?.data?.attributes?.formats?.medium?.url;
  // ...
  

  return (
    <MainContainer width={width}>
      <HoverContainer
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <ImageContainer
          alt={item.name}
          src={`https://strapi-production-6616.up.railway.app${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
                 {isHovered && (
        <Container>
        <HoverComponents >
          <Button
            onClick={() => {
              dispatch(addToCart({ item: { ...item, count } }));
            }}>
            Add to Cart
          </Button>
        </HoverComponents>
      </Container>
      )}

      </HoverContainer>

      <DescriptionContainer>
        <Heading  >
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Heading>
        <Heading>{name}</Heading>
        <HeadingPrice>${price}</HeadingPrice>
      </DescriptionContainer>
    </MainContainer>
  );
};

export default Item;