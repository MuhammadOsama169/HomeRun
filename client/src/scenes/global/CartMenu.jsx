import { Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { MainContainer,InnerContainer,ShoppingBag,FlexBox ,Container,ContainerWrap40pc,ContainerWrap60pc,TitleHeading,ItemDescription,ContainerCounter,CheckoutButton} from "../../components/styles/CartMenu.styled";


const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <>
    {isCartOpen && (
      <MainContainer>
        <InnerContainer>

          {/* HEADER */}
          <FlexBox >
            <ShoppingBag>SHOPPING BAG ({cart.length})</ShoppingBag>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <>
            {cart.map((item) => (
              <Container key={`${item.attributes.name}-${item.id}`}>
                <FlexBox>
                  <ContainerWrap40pc>
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </ContainerWrap40pc>
                  <ContainerWrap60pc >
                    <FlexBox >
                      <TitleHeading >
                        {item.attributes.name}
                      </TitleHeading>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <ItemDescription>{item.attributes.shortDescription}</ItemDescription>
                    <FlexBox>
                      <ContainerCounter>
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </ContainerCounter>
                      <b>
                        ${item.attributes.price}
                      </b>
                    </FlexBox>
                  </ContainerWrap60pc>
                </FlexBox>
                <Divider />
              </Container>
            ))}
          </>

          {/* ACTIONS */}
          <Container>
            <FlexBox>
              <TitleHeading >SUBTOTAL</TitleHeading>
              <TitleHeading >${totalPrice}</TitleHeading>
            </FlexBox>
            <CheckoutButton
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </CheckoutButton>
          </Container>
      </InnerContainer>
    </MainContainer>
    )}
    </>

  );
};

export default CartMenu;