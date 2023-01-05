import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 80%;
  margin: 150px auto;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
`;
export const ImageContainer = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  display: flex;
  flex: 1 1 45%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  margin-bottom: 10px;
`;
export const BackToHome = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: #00e7ff;
  font-size: 20px;
`;
export const ItemDesContainer = styled.div`
  margin: 65px 0px 25px 0px;
`;
export const ItemDesText = styled.div`
  color: white;
  font-family: serif;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-top: 50px;
`;
export const Counter = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 2px 5px;
  margin: 15px;
  background-color: #82c3ec;
`;
export const AddToCart = styled.button`
  background-color: #931314;
  color: white;
  border-radius: 0px;
  min-width: 150ps;
  border: none;
  padding: 20px 20px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const TabsDescription = styled.div`
  margin: 20px 0;
`;
export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const RelatedItemsCont = styled.div`
  margin-top: 50px;
  width: 100%;
`;
export const ItemDescription = styled.div`
  color: white;
`;
export const RelatedItemsHeading = styled.div`
  font-weight: bold;
  font-family: "Metrophobic", sans-serif;
  font-size: 25px;
  margin-bottom: 20px;
  color: white;
  padding-bottom: 50px;
`;
export const RelatedItemsCard = styled.div`
  margin: top;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
`;
