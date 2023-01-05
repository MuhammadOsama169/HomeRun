import styled from "@emotion/styled";

export const MainContainer = styled.div``;
export const DescriptionContainer = styled.div`
  margin-top: 3px;
`;
export const HoverContainer = styled.div`
  position: relative;
`;
export const Container = styled.div`
  display: block;
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  padding: 0 5%;
`;
export const HoverComponents = styled.div`
  display: flex;
  justify-cotent: space-between;
`;

export const ImageContainer = styled.img`
  cursor: pointer;
  width: 300px;
  height: 350px;
`;
export const Button = styled.button`
  background-color: #931314;
  color: white;
  font-family: "Cormorant SC", serif;
  font-size: 15px;
  padding: 5px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
`;
export const Heading = styled.div`
  text-align: center;
  font-weight: 10px;
  font-family: "Fauna One", serif;
  font-size: 15px;
  color: white;
`;
export const HeadingPrice = styled.div`
  text-align: center;
  font-family: "Cormorant SC", serif;
  font-size: 22px;
  color: white;
  font-weight: bold;
`;
