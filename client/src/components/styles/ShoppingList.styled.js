import styled from "@emotion/styled";

export const ItemConatiner = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 1.33%;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
  margin-bottom: 20px;
`;
