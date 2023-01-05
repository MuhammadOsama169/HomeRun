import styled from "@emotion/styled";

export const ItemConatiner = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 1.33%;
  background-color: #151a2f;
  color: white;
`;

export const MainContainer = styled.div`
  width: 100%;
`;
export const InnerContainer = styled.div`
  width: 80%;
  margin: 80px auto;
`;
export const Heading = styled.div`
  text-align: center;
  font-family: "Cormorant SC", serif;
  font-size: 30px;
  color: white;
`;
