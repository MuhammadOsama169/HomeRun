import styled from "@emotion/styled";

export const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  display: block;
`;
export const InnerContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: max(400px, 30%);
  height: 100%;
  background-color: white;
  padding: 40px;
  overflow: auto;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
export const ShoppingBag = styled.div`
  text-align: center;
  font-family: "Cormorant SC", serif;
  font-size: 22px;
  color: black;
  font-weight: regular;
  margin-bottom: 10px;
`;
export const TitleHeading = styled.div`
  text-align: center;
  font-family: "Cormorant SC", serif;
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-align: left;
`;
export const ItemDescription = styled.div`
  text-align: center;
  font-family: "Metrophobic", sans-serif;
  font-size: 13px;
  color: black;
  font-weight: regular;
  text-align: left;
  margin-bottom: 5px;
`;
export const Container = styled.div``;
export const ContainerWrap40pc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
`;
export const ContainerWrap60pc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
`;
export const ContainerCounter = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid grey;
`;
export const CheckoutButton = styled.button`
  background-color: #222222;
  color: white;
  border-radius: 0px;
  border-radius: 0px;
  min-width: 100%;
  padding: 20px 40px;
  margin: 20px 0px;
  &:hover {
    background-color: #931314;
    transform: scale(1.05);
  }
`;
