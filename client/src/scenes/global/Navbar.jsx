import { useDispatch, useSelector } from "react-redux";
import { Badge} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { MainContainer,BottomContainer,InnerContainer,LogoContainer,LogoS ,IconContainer,Icon} from "../../components/styles/Navbar.styled";
import { setIsCartOpen } from "../../state";


 const Navbar=() =>{

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  
  return (
    <>
    <MainContainer>
      <InnerContainer>
        <LogoContainer to="/"/>
        <LogoS to="/"/>
        <IconContainer
        >
          <Icon >
            <SearchOutlined />
          </Icon>
          <Icon >
            <PersonOutline />
          </Icon>
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 20,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
                backgroundColor:"red",
                color:"white"
              },
            }}
          >
            <Icon onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined />
            </Icon>
          </Badge>

        </IconContainer>
      </InnerContainer>
    </MainContainer>

    <BottomContainer>
    <IconContainer 
        >
          <Icon >
            <SearchOutlined />
          </Icon>
          <Icon >
            <PersonOutline />
          </Icon>
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 20,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
                backgroundColor:"red",
                color:"white"
              },
            }}
          >
            <Icon onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined />
            </Icon>
          </Badge>

        </IconContainer>
    </BottomContainer>

    </>
  );
}

export default Navbar;