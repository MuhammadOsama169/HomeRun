import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%;
`;
export const InnerContainer = styled.div`
  background-color: white;
  padding: 200px;
`;
export const FormConatainer = styled.div`
  color: black;
  margin: 100px auto;
`;
export const ButtonBack = styled.button`
  background-color: #222222;
  box-shadow: none;
  color: white;
  border-radius: 0;
  padding: 15px 40px;
  text-align: center;
  font-size: 16px;
  display: block;
  width: 100%;
  border: none;
  &:hover {
    background-color: #1769aa;
    transform: scale(1.05);
  }
`;
export const ButtonNext = styled.button`
  background-color: #222222;
  box-shadow: none;
  color: white;
  border-radius: 0;
  padding: 15px 40px;
  text-align: center;
  font-size: 16px;
  display: block;
  width: 100%;
  border: none;
  &:hover {
    background-color: #931314;
    transform: scale(1.05);
  }
`;
export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
