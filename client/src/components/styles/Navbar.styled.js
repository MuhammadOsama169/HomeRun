import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";
import LogoSmall from "../../assets/images/favicon.png";

export const MainContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #262e50;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media all and (max-width: 1086px) {
    height: 100px;
  }
  @media all and (max-width: 900px) {
    display: none;
  }
`;
export const BottomContainer = styled.nav`
  background-color: #262e50;
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 2;
  @media all and (min-width: 900px) {
    display: none;
  }
`;
export const InnerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  @media all and (max-width: 1086px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  z-index: 2;
  @media all and (max-width: 800px) {
    column-gap: 50px;
  }
`;
export const Icon = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  background-color: #262e50;
`;

export const LogoContainer = styled(Link)`
  background-image: url(${LogoImg});
  background-size: 100%;
  width: 150px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;

  @media all and (max-width: 1086px) {
    display: none;
  }
`;
export const LogoS = styled(Link)`
  background-image: url(${LogoSmall});
  background-size: 100%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  display: none;
  @media all and (max-width: 1086px) {
    display: flex;
  }
`;
